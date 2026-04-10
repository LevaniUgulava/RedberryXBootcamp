
export const useAuthStore = defineStore('auth', () => {
    const config = useRuntimeConfig();
    const user = ref<any>(null)
    const token = useCookie('auth_token', {
        maxAge: 60 * 60 * 24,
        sameSite: 'lax'
    });
    const isLoggedIn = computed(() => !!token.value)

    async function login(credentials: any) {
        try {
            const response = await $fetch<any>('/login', {
                method: 'POST',
                baseURL: config.public.api,
                body: credentials
            })
            user.value = response.data.user
            token.value = response.data.token

        } catch (error) {
            console.error('Login failed:', error)
            throw error
        }
    }
    return {
        user,
        isLoggedIn,
        login,
        token
    }

})