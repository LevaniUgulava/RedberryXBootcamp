<template>
    <section class="course-section">
        <div class="section-header">
            <div class="title-group">
                <h2>{{ title }}</h2>
                <p v-if="subtitle">{{ subtitle }}</p>
            </div>
            <NuxtLink v-if="showSeeAll" to="/all" class="see-all">See All</NuxtLink>
        </div>

        <div class="cards-grid">
            <slot />
            <Lockmodal v-if="modal" class="lock-overlay" />
        </div>
    </section>
</template>

<script setup lang="ts">
import Lockmodal from '~/components/auth/lockModal.vue';

defineProps({
    title: String,
    subtitle: String,
    showSeeAll: Boolean,
    modal: Boolean
});
</script>

<style scoped>
.course-section {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 48px;
}

.lock-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 24px;
}

.cards-grid {
    position: relative;
    display: flex;
    gap: 24px;
}

.title-group h2 {
    font-family: 'inter', sans-serif;
    font-weight: 600;
    font-size: 40px;
    margin: 0;
    color: #0A0A0A;
}

.title-group p {
    font-family: 'inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #3D3D3D;
    margin: 4px 0 0 0;
}

.see-all {
    font-family: 'inter', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #4F46E5;
}
</style>