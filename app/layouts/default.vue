<template>
    <div class="app-wrapper">
        <header-component @open-auth-modal="(type) => toggleModal('auth', true, type)"
            @open-profile-modal=" toggleModal('profile', true)"
            @open-enrolled-modal="toggleModal('enrollment', true)" />
        <main class="content-canvas">
            <slot />
        </main>
        <footer-component />
        <auth-modal v-if="modalState.auth.isOpen" :modal="modalState.auth" @close="toggleModal('auth', false)" />
        <profile-modal v-if="modalState.profile" @close="toggleModal('profile', false)" />
        <Enrolled-courses :state="modalState.enrollment" @close="toggleModal('enrollment', false)" />
    </div>
</template>
<script setup lang="ts">
import ProfileModal from '~/components/auth/profileModal.vue';
import EnrolledCourses from '~/components/EnrolledCourses.vue';


const modalState = reactive({
    auth: { isOpen: false, type: null as 'login' | 'register' | null },
    profile: false,
    enrollment: false,
});

const toggleModal = (modalName: keyof typeof modalState, value: boolean, type?: 'login' | 'register' | null) => {
    if (modalName === 'auth') {
        modalState.auth.isOpen = value;
        if (type) modalState.auth.type = type;
    } else {
        (modalState[modalName] as boolean) = value;
    }
};

</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    height: 100%;

}

.app-wrapper {
    display: flex;
    /* ჩავრთოთ flexbox */
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #F5F5F5;
    align-items: flex-start;
    margin: 0;
    padding: 0;
}

.content-canvas {
    width: 1920px;
    /* height: 1080px; */
    flex: 1 0 auto;
    background-color: #F5F5F5;
    position: relative;
    flex-shrink: 0;
    overflow: hidden;
    padding-bottom: 100px;
}
</style>