import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
    const config = useRuntimeConfig();
    const user = useCookie<any>('user_data');
    const token = useCookie<string | null>('auth_token', {
        maxAge: 60 * 60 * 24,
        sameSite: 'lax'
    });
    const isLoggedIn = computed(() => !!token.value)

    async function register(form: any) {
        try {
            const formData = new FormData();

            formData.append('username', form.username);
            formData.append('email', form.email);
            formData.append('password', form.password);
            formData.append('password_confirmation', form.password_confirmation);

            if (form.avatar) {
                formData.append('avatar', form.avatar);
            }

            const response = await $fetch<any>('/register', {
                method: 'POST',
                baseURL: config.public.api,
                body: formData,
            });

            user.value = response.data.user;
            token.value = response.data.token;

        } catch (error: any) {
            console.error('რეგისტრაციის შეცდომა:', error.data || error);
            throw error;
        }
    }
    async function login(credentials: any) {
        try {
            const response = await $fetch<any>('/login', {
                method: 'POST',
                baseURL: config.public.api,
                body: credentials
            })
            user.value = response.data.user
            token.value = response.data.token
            await refreshNuxtData('in-progress-index');
        } catch (error) {
            console.error('Login failed:', error)
            throw error
        }
    }
    async function me() {
        try {
            const response = await $fetch<any>('/me', {
                method: 'GET',
                baseURL: config.public.api,
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            })
            user.value = response.data;
        } catch (error) {
            console.error('Fetch failed:', error)
            throw error
        }
    }
    async function updateProfile(credentials: any) {
        try {


            const response = await $fetch<any>('/profile', {
                method: 'PUT',
                baseURL: config.public.api,
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: credentials
            });

            if (response.data) {
                user.value = response.data;
            }

            return response;
        } catch (error: any) {
            console.error('Profile update failed:', error);
            throw error;
        }
    }
    return {
        user,
        isLoggedIn,
        login,
        register,
        updateProfile,
        me,
        token
    }

})