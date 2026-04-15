<template>
    <div class="slider-wrapper">
        <swiper :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]" :slides-per-view="1" :loop="false"
            :pagination="{
                el: '.custom-dots',
                clickable: true
            }" :navigation="{
                nextEl: '.next-btn',
                prevEl: '.prev-btn',
            }" :autoplay="{ delay: 50000 }" class="my-swiper">
            <swiper-slide v-for="(slide, index) in swiperData" :key="index" class="slide"
                :style="{ backgroundImage: `url(${slide.image})` }">
                <div class="content">
                    <h1>{{ slide.title }}</h1>
                    <p>{{ slide.description }}</p>
                    <button @click="goToCourse" class="btn">{{ slide.buttonText }}</button>
                </div>
            </swiper-slide>


            <div class="slider-controls">
                <div class="custom-dots"></div>
                <div class="custom-nav">
                    <button class="prev-btn">
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M27 5.0625C22.6612 5.0625 18.4198 6.34911 14.8122 8.75964C11.2046 11.1702 8.3928 14.5963 6.7324 18.6049C5.07201 22.6134 4.63757 27.0243 5.48403 31.2798C6.3305 35.5353 8.41984 39.4441 11.4879 42.5122C14.5559 45.5802 18.4648 47.6695 22.7202 48.516C26.9757 49.3624 31.3866 48.928 35.3951 47.2676C39.4037 45.6072 42.8298 42.7954 45.2404 39.1878C47.6509 35.5802 48.9375 31.3388 48.9375 27C48.9314 21.1837 46.6181 15.6074 42.5054 11.4946C38.3926 7.38188 32.8163 5.06864 27 5.0625ZM27 45.5625C23.3287 45.5625 19.7398 44.4738 16.6872 42.4342C13.6346 40.3945 11.2554 37.4954 9.8505 34.1036C8.44554 30.7117 8.07794 26.9794 8.79418 23.3786C9.51042 19.7779 11.2783 16.4703 13.8743 13.8743C16.4704 11.2783 19.7779 9.51041 23.3786 8.79417C26.9794 8.07793 30.7117 8.44553 34.1036 9.85049C37.4954 11.2554 40.3945 13.6346 42.4342 16.6872C44.4738 19.7398 45.5625 23.3287 45.5625 27C45.5569 31.9214 43.5994 36.6396 40.1195 40.1195C36.6396 43.5994 31.9214 45.5569 27 45.5625ZM31.5689 19.7564L24.3232 27L31.5689 34.2436C31.7257 34.4004 31.8501 34.5865 31.9349 34.7914C32.0198 34.9962 32.0634 35.2158 32.0634 35.4375C32.0634 35.6592 32.0198 35.8788 31.9349 36.0836C31.8501 36.2885 31.7257 36.4746 31.5689 36.6314C31.4121 36.7882 31.226 36.9126 31.0211 36.9974C30.8163 37.0823 30.5967 37.1259 30.375 37.1259C30.1533 37.1259 29.9337 37.0823 29.7289 36.9974C29.524 36.9126 29.3379 36.7882 29.1811 36.6314L20.7436 28.1939C20.5867 28.0372 20.4622 27.8511 20.3773 27.6462C20.2924 27.4414 20.2487 27.2218 20.2487 27C20.2487 26.7782 20.2924 26.5586 20.3773 26.3538C20.4622 26.1489 20.5867 25.9628 20.7436 25.8061L29.1811 17.3686C29.3379 17.2118 29.524 17.0874 29.7289 17.0026C29.9337 16.9177 30.1533 16.8741 30.375 16.8741C30.5967 16.8741 30.8163 16.9177 31.0211 17.0026C31.226 17.0874 31.4121 17.2118 31.5689 17.3686C31.7257 17.5254 31.8501 17.7115 31.9349 17.9164C32.0198 18.1212 32.0634 18.3408 32.0634 18.5625C32.0634 18.7842 32.0198 19.0038 31.9349 19.2086C31.8501 19.4135 31.7257 19.5996 31.5689 19.7564Z"
                                fill="white" />
                        </svg>
                    </button>
                    <button class="next-btn">
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M27 5.0625C22.6612 5.0625 18.4198 6.34911 14.8122 8.75964C11.2046 11.1702 8.3928 14.5963 6.7324 18.6049C5.07201 22.6134 4.63757 27.0243 5.48403 31.2798C6.3305 35.5353 8.41984 39.4441 11.4879 42.5122C14.5559 45.5802 18.4648 47.6695 22.7202 48.516C26.9757 49.3624 31.3866 48.928 35.3951 47.2676C39.4037 45.6072 42.8298 42.7954 45.2404 39.1878C47.6509 35.5802 48.9375 31.3388 48.9375 27C48.9314 21.1837 46.6181 15.6074 42.5054 11.4946C38.3926 7.38188 32.8163 5.06864 27 5.0625ZM27 45.5625C23.3287 45.5625 19.7398 44.4738 16.6872 42.4342C13.6346 40.3945 11.2554 37.4954 9.8505 34.1036C8.44554 30.7117 8.07794 26.9794 8.79418 23.3786C9.51042 19.7779 11.2783 16.4703 13.8743 13.8743C16.4704 11.2783 19.7779 9.51041 23.3786 8.79417C26.9794 8.07793 30.7117 8.44553 34.1036 9.85049C37.4954 11.2554 40.3945 13.6346 42.4342 16.6872C44.4738 19.7398 45.5625 23.3287 45.5625 27C45.5569 31.9214 43.5994 36.6396 40.1195 40.1195C36.6396 43.5994 31.9214 45.5569 27 45.5625ZM33.2564 25.8061C33.4133 25.9628 33.5378 26.1489 33.6227 26.3538C33.7076 26.5586 33.7513 26.7782 33.7513 27C33.7513 27.2218 33.7076 27.4414 33.6227 27.6462C33.5378 27.8511 33.4133 28.0372 33.2564 28.1939L24.8189 36.6314C24.6621 36.7882 24.476 36.9126 24.2711 36.9974C24.0663 37.0823 23.8467 37.1259 23.625 37.1259C23.4033 37.1259 23.1837 37.0823 22.9789 36.9974C22.774 36.9126 22.5879 36.7882 22.4311 36.6314C22.2743 36.4746 22.1499 36.2885 22.0651 36.0836C21.9802 35.8788 21.9366 35.6592 21.9366 35.4375C21.9366 35.2158 21.9802 34.9962 22.0651 34.7914C22.1499 34.5865 22.2743 34.4004 22.4311 34.2436L29.6768 27L22.4311 19.7564C22.1145 19.4398 21.9366 19.0103 21.9366 18.5625C21.9366 18.1147 22.1145 17.6852 22.4311 17.3686C22.7477 17.0519 23.1772 16.8741 23.625 16.8741C24.0728 16.8741 24.5023 17.0519 24.8189 17.3686L33.2564 25.8061Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;
const SwiperNavigation = Navigation;
const router = useRouter();
const swiperData = [
    {
        title: 'Start learning something new today',
        description: 'Explore a wide range of expert-led courses in design, development, business, and more. Find the skills you need to grow your career and learn at your own pace.',
        buttonText: 'Browse Courses',
        image: '/img/68f543f056a30e3d5f099b8e3ec05e5d2a403872.png'
    },
    {
        title: 'Pick up where you left off',
        description: 'Your learning journey is already in progress. Continue your enrolled courses, track your progress, and stay on track toward completing your goals.',
        buttonText: 'Start Learning',
        image: '/img/8584b867d5528160322fe2dc7fe7c6da6d295c19.png'
    },
    {
        title: 'Learn together, grow faster',
        description: '',
        buttonText: 'Start Learning',
        image: '/img/dfc2fadfbba911a1a07ab99c2358a787702a63cc.png'
    }
];

const goToCourse = async () => {
    await nextTick();
    router.push('/courses').catch(err => {
        console.error("Navigation error:", err);
    });
};
</script>

<style scoped>
.slider-wrapper {
    width: 1566px;
    margin: 40px auto;
}

.my-swiper {
    width: 100%;
    height: 420px;
    border-radius: 30px;
    position: relative;
}

.slide {
    padding: 48px;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    color: white;
}

.variant-1 {
    background-image: linear-gradient(to right, #2D0A31, #958FEF);
}

.variant-2 {
    background-image: linear-gradient(to right, #B45309, #F59E0B);
}

.content {
    display: flex;
    flex-direction: column;
}

h1 {
    font-family: 'Inter', sans-serif;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #FFFFFF;
    max-width: 1400px;
}

p {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 300;
    margin: 0;
    color: #FFFFFF;
    max-width: 1200px;
}

.btn {
    margin-top: 12px;
    padding: 17px 25px;
    width: fit-content;
    height: 64px;
    background: #4F46E5;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
}

.slider-controls {
    position: absolute;
    bottom: 60px;
    left: 80px;
    right: 80px;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    pointer-events: none;
}

.custom-dots {
    display: flex !important;
    gap: 12px;
    pointer-events: auto;
    align-items: center;
    justify-content: center;
}

:deep(.custom-dots .swiper-pagination-bullet) {
    width: 57px;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.4);
    opacity: 1;
    margin: 0 !important;
    cursor: pointer;
    transition: background 0.3s ease;
}

:deep(.custom-dots .swiper-pagination-bullet-active) {
    background: white;
}

.custom-nav {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    gap: 15px;
    pointer-events: auto;
}

.prev-btn,
.next-btn {
    width: 54px;
    height: 54px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.prev-btn.swiper-button-disabled,
.next-btn.swiper-button-disabled {
    opacity: 0.3;
    pointer-events: none;
    cursor: not-allowed;
}

.prev-btn:not(.swiper-button-disabled):hover,
.next-btn:not(.swiper-button-disabled):hover {
    transform: scale(1.1);
}
</style>