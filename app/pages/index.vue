<template>
    <main class="home-layout">
        <HeroSlider />


        <CourseSection title="Start Learning Today"
            subtitle="Choose from our most popular courses and begin your journey" :showSeeAll="false">
            <CardComponent v-for="item in data?.data" :key="item.id" :item="item" />
        </CourseSection>




    </main>
</template>

<script setup lang="ts">
import CardComponent from '~/components/cards/CardComponent.vue';
import CourseSection from '~/components/CourseSection.vue';
import HeroSlider from '~/components/HeroSlider.vue';
const isAuth = false;
const config = useRuntimeConfig();

const { data, error } = await useFetch<any>('/courses/featured', {
    baseURL: config.public.api as string
});

if (data.value) {
    console.log('მონაცემები წამოვიდა:', data.value);
}

if (error.value) {
    console.error('შეცდომა:', error.value);
}
</script>

<style scoped>
.home-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 177px;
    box-sizing: border-box;
}

.home-layout> :first-child {
    margin-top: 40px;
}
</style>
