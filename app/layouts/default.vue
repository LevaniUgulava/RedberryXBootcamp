<template>
    <div class="app-wrapper">
        <header-component @open-auth-modal="(type) => modalStore.toggleModal('auth', true, type)"
            @open-profile-modal="modalStore.toggleModal('profile', true)"
            @open-enrolled-modal="modalStore.toggleModal('enrollment', true)" />
        <main class="content-canvas">
            <slot />
        </main>
        <footer-component />
        <auth-modal v-if="modalStore.modalState.auth.isOpen" :modal="modalStore.modalState.auth"
            @close="modalStore.toggleModal('auth', false)" />
        <profile-modal v-if="modalStore.modalState.profile" @close="modalStore.toggleModal('profile', false)" />
        <Enrolled-courses :state="modalStore.modalState.enrollment"
            @close="modalStore.toggleModal('enrollment', false)" />
    </div>
</template>
<script setup lang="ts">
import ProfileModal from '~/components/auth/profileModal.vue';
import EnrolledCourses from '~/components/EnrolledCourses.vue';

import { useModalStore } from '~/stores/modal';
const modalStore = useModalStore();


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