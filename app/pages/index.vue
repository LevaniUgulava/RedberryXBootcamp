<template>
    <main class="home-layout">
        <HeroSlider />

        <!--authorized -->
        <CourseSection v-if="authStore.isLoggedIn && inProgressCourses?.length > 0" :is-featured="false"
            :count="inProgressCourses?.length || 0" title="Continue Learning" subtitle="Pick up where you left">
            <InProgressCard v-for="(item, index) in inProgressCourses" :item="item" :key="index" />
        </CourseSection>

        <CourseSection title="Start Learning Today"
            subtitle="Choose from our most popular courses and begin your journey" :showSeeAll="false"
            :is-featured="true">
            <CardComponent v-for="item in data?.data" :key="item.id" :item="item" />
        </CourseSection>


        <!-- not-authorized -->
        <CourseSection v-if="!authStore.isLoggedIn" title="Continue Learning" subtitle="Pick up where you left"
            :modal="true">
            <InProgressCard v-for="(item, index) in dummyData" :item="item" :key="index" :is-blur="true" />
        </CourseSection>

    </main>
</template>

<script setup lang="ts">
import CardComponent from '~/components/cards/CardComponent.vue';
import InProgressCard from '~/components/cards/inProgressCard.vue';
import CourseSection from '~/components/CourseSection.vue';
import HeroSlider from '~/components/HeroSlider.vue';
import { useAuthStore } from '~/stores/auth';
const authStore = useAuthStore();
const config = useRuntimeConfig();

const { data, error } = await useFetch<any>('/courses/featured', {
    baseURL: config.public.api as string
});



if (error.value) {
    console.error('შეცდომა:', error.value);
}
const { data: inProgressCourses, refresh } = await useAsyncData(
    'in-progress-index',
    () => $fetch('/courses/in-progress', {
        baseURL: config.public.api as string,
        headers: {
            Authorization: `Bearer ${authStore.token}`,
            Accept: 'application/json'
        }
    }),
    {
        watch: [() => authStore.token],
        immediate: authStore.isLoggedIn,
        transform: (res: any) => res.data || res
    }
);

watch(() => authStore.isLoggedIn, (isLoggedIn) => {
    if (isLoggedIn) {
        refresh();
    }
});
const dummyData = [
    {
        course: {
            image: '/img/68f543f056a30e3d5f099b8e3ec05e5d2a403872.png',
            instructor: {
                name: 'John Doe'
            },
            title: 'Advanced React & TypeScript Development',

        },

        progress: 65
    },
    {
        course: {
            image: '/img/8584b867d5528160322fe2dc7fe7c6da6d295c19.png',
            instructor: {
                name: 'Jane Smith'
            },
            title: 'Mastering Vue.js 3',

        },


        progress: 40
    },
    {
        course: {
            image: '/img/dfc2fadfbba911a1a07ab99c2358a787702a63cc.png',
            instructor: {
                name: 'Emily Johnson'
            },
            title: 'Full-Stack Web Development with Node.js',

        },

        progress: 80
    }
];
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
