<template>
    <header class="header-container">
        <div class="header-content">
            <div @click.stop.prevent="goToHome" class="logo">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="60" rx="14" fill="#4F46E5" />
                    <path
                        d="M29.1282 34.5001L24.6667 29.8848M29.1282 34.5001C31.2056 33.6828 33.1984 32.652 35.0769 31.4232M29.1282 34.5001V42.1923C29.1282 42.1923 33.6344 41.3462 35.0769 39.1155C36.6831 36.6232 35.0769 31.4232 35.0769 31.4232M24.6667 29.8848C25.4581 27.7609 26.4546 25.725 27.641 23.808C29.3739 20.9418 31.7867 18.5819 34.6501 16.9528C37.5135 15.3237 40.7322 14.4794 44 14.5004C44 18.6849 42.84 26.0387 35.0769 31.4232M24.6667 29.8848L17.2308 29.8848C17.2308 29.8848 18.0487 25.2233 20.2051 23.731C22.6144 22.0695 27.641 23.731 27.641 23.731M17.9744 36.8078C15.7436 38.7462 15 44.5 15 44.5C15 44.5 20.5621 43.7308 22.4359 41.4231C23.4918 40.1308 23.4769 38.1462 22.3021 36.9463C21.724 36.3755 20.9625 36.0457 20.1638 36.0201C19.3651 35.9946 18.5854 36.2751 17.9744 36.8078Z"
                        stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <nav class="nav-section">
                <div class="nav-links">
                    <a href="/courses" class="nav-item">
                        <span class="icon"><svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.5063 11.6797C14.5829 12.0307 14.665 12.3604 14.7573 12.6689C15.0649 13.6967 15.4915 14.5561 16.1675 15.2383C16.9887 16.0669 18.0869 16.5345 19.4878 16.8467C18.0869 17.1589 16.9887 17.6265 16.1675 18.4551C15.4915 19.1372 15.0649 19.9968 14.7573 21.0244C14.6612 21.3454 14.5757 21.6895 14.4966 22.0566C14.4159 21.6947 14.3298 21.356 14.2329 21.04C13.9207 20.0216 13.4923 19.1745 12.8179 18.501C12.1429 17.8269 11.2978 17.4029 10.2856 17.0977C10.0113 17.0149 9.72016 16.9398 9.41162 16.8701C10.8641 16.558 11.9989 16.0892 12.8423 15.2393C13.5188 14.5575 13.9458 13.6979 14.2544 12.6699C14.3471 12.3611 14.4295 12.031 14.5063 11.6797ZM22.4438 16.3975H22.4409C22.4432 16.3972 22.4455 16.3967 22.4478 16.3965L22.4438 16.3975ZM7.11572 8.14941C7.22866 8.36262 7.37007 8.5646 7.55322 8.74609C7.7655 8.95637 8.00471 9.11164 8.2583 9.23145C8.00949 9.35115 7.77427 9.5031 7.56494 9.70605C7.39381 9.872 7.25892 10.0549 7.14893 10.248C7.03689 10.0399 6.89814 9.84279 6.71826 9.66504C6.498 9.44747 6.2481 9.28806 5.98389 9.16504C6.2358 9.04772 6.47578 8.89902 6.68896 8.69727C6.86512 8.5305 7.00269 8.34533 7.11572 8.14941ZM12.436 3.11523C12.4701 3.15099 12.505 3.18479 12.5405 3.2168C12.4998 3.25211 12.4602 3.28996 12.4214 3.33008C12.4094 3.34246 12.3977 3.35562 12.3862 3.36816C12.3762 3.35742 12.3673 3.34557 12.3569 3.33496C12.3179 3.29501 12.2777 3.2578 12.2368 3.22266C12.2754 3.18824 12.3133 3.15209 12.3501 3.11328C12.3649 3.0976 12.378 3.08039 12.3921 3.06445C12.4068 3.08109 12.4205 3.09889 12.436 3.11523Z"
                                    stroke="currentColor" stroke-width="2" />
                            </svg>
                        </span> Browse Courses
                    </a>
                    <button @click="triggerModal('enrolled')" v-if="authStore.isLoggedIn" class="nav-item">
                        <span class="icon"><svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.9998 7.58333V22.75M12.9998 7.58333C12.9998 6.43406 12.5433 5.33186 11.7306 4.5192C10.918 3.70655 9.81578 3.25 8.6665 3.25H3.24984C2.96252 3.25 2.68697 3.36414 2.4838 3.5673C2.28064 3.77047 2.1665 4.04602 2.1665 4.33333V18.4167C2.1665 18.704 2.28064 18.9795 2.4838 19.1827C2.68697 19.3859 2.96252 19.5 3.24984 19.5H9.74984C10.6118 19.5 11.4384 19.8424 12.0479 20.4519C12.6574 21.0614 12.9998 21.888 12.9998 22.75M12.9998 7.58333C12.9998 6.43406 13.4564 5.33186 14.269 4.5192C15.0817 3.70655 16.1839 3.25 17.3332 3.25H22.7498C23.0372 3.25 23.3127 3.36414 23.5159 3.5673C23.719 3.77047 23.8332 4.04602 23.8332 4.33333V18.4167C23.8332 18.704 23.719 18.9795 23.5159 19.1827C23.3127 19.3859 23.0372 19.5 22.7498 19.5H16.2498C15.3879 19.5 14.5612 19.8424 13.9517 20.4519C13.3422 21.0614 12.9998 21.888 12.9998 22.75"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </span>
                        Enrolled Courses
                    </button>
                </div>

                <div class="profile-icon" v-if="authStore.isLoggedIn">
                    <div class="profile-icon" @click="triggerModal('profile')">
                        <div class="avatar-wrapper">
                            <img v-if="userAvatar" :src="userAvatar" alt="Avatar" class="avatar-img">
                            <svg v-else width="56" height="56" viewBox="0 0 56 56" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="bg-circle"
                                    d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
                                    fill="#EEEDFC" />

                                <path
                                    d="M39.0832 42.25V39.0833C39.0832 37.4036 38.4159 35.7927 37.2282 34.605C36.0404 33.4173 34.4295 32.75 32.7498 32.75H23.2498C21.5701 32.75 19.9592 33.4173 18.7715 34.605C17.5838 35.7927 16.9165 37.4036 16.9165 39.0833V42.25"
                                    stroke="#736BEA" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M27.9998 26.4167C31.4976 26.4167 34.3332 23.5811 34.3332 20.0833C34.3332 16.5855 31.4976 13.75 27.9998 13.75C24.502 13.75 21.6665 16.5855 21.6665 20.0833C21.6665 23.5811 24.502 26.4167 27.9998 26.4167Z"
                                    stroke="#736BEA" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round" />

                            </svg>

                            <svg class="status-icon" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="8" :fill="isProfileComplete ? '#1DC31D' : '#F4A316'"
                                    stroke="white" stroke-width="2" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="cta-buttons" v-if="!authStore.isLoggedIn">
                    <button @click="triggerModal('auth', 'login')" class="cta-button login">Login</button>
                    <button @click="triggerModal('auth', 'register')" class="cta-button signup">Sign Up</button>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const user = computed(() => authStore.user);
const router = useRouter();
const isLogin = computed(() => authStore.isLoggedIn);
const isProfileComplete = computed(() => user.value?.profileComplete ?? false);
const userAvatar = computed(() => user.value?.avatar);
const goToHome = async () => {
    await nextTick();
    router.push('/').catch(err => {
        console.error("Navigation error:", err);
    });
};
const emit = defineEmits<{
    (e: 'openAuthModal', type: 'login' | 'register'): void;
    (e: 'openProfileModal'): void;
    (e: 'openEnrolledModal'): void
}>();
const modalActions = {
    profile: () => emit('openProfileModal'),
    auth: (type: 'login' | 'register') => emit('openAuthModal', type),
    enrolled: () => emit('openEnrolledModal')
} as const;

const triggerModal = (name: keyof typeof modalActions, type?: 'login' | 'register') => {
    const action = modalActions[name];

    if (name === 'auth' && type) {
        (action as (t: string) => void)(type);
    } else {
        (action as () => void)();
    }
};
onMounted(async () => {
    if (authStore.token && !authStore.user) {
        await authStore.me();
    }
});

</script>
<style scoped>
.header-container {
    width: 1920px;
    background-color: #F5F5F5;
    border-bottom: 1px solid #D1D1D1;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
}

.header-content {
    width: 100%;
    padding: 24px 177px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
}

.logo {
    cursor: pointer;
}

.nav-section {
    display: flex;
    align-items: center;
    gap: 32px;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 24px;
}

.nav-item {
    border: none;
    background-color: transparent;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
    gap: 8px;
    line-height: 1;
    letter-spacing: 0;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #525252;
}

.nav-item:hover {
    color: #4F46E5;
}

.nav-item .icon {
    display: flex;
    align-items: center;
}

.avatar-wrapper {
    position: relative;
    width: 56px;
    height: 56px;
    display: inline-block;
}

.avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.status-icon {
    position: absolute;
    bottom: -2px;
    right: -2px;

}

.profile-icon {
    display: inline-flex;
    cursor: pointer;
    overflow: hidden;
}

.bg-circle {
    fill: #EEEDFC;
    stroke: #EEEDFC;
    stroke-width: 0px;
    transition: stroke 300ms ease-out, stroke-width 300ms ease-out, fill 300ms ease-out;
}

.profile-icon:hover .bg-circle {
    stroke: #B7B3F4;
    stroke-width: 1.5px;
}

.cta-buttons {
    display: flex;
    align-items: center;
    gap: 15px;
}

.cta-button {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    box-sizing: border-box;
}

.cta-button.login {
    width: 114px;
    height: 60px;
    background-color: transparent;
    border: 2px solid #958FEF;
    color: #4F46E5;
    padding: 12px 16px;
    gap: 2px;
}

.cta-button.signup {
    width: 125px;
    height: 60px;
    background-color: #4F46E5;
    border: none;
    color: #FFFFFF;
    padding: 17px 25px;
    gap: 10px;
}

.cta-button.login:hover {
    background-color: rgba(149, 143, 239, 0.1);
}

.cta-button.signup:hover {
    opacity: 0.9;
}
</style>