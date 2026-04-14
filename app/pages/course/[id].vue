<template>
    <div class="course-container">
        <div class="breadcrumb">
            <span>Home</span>
            <span class="seperator">
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M-0.000161171 1.0607L1.06084 0.000703812L6.83984 5.7777C6.93299 5.87027 7.00692 5.98035 7.05737 6.1016C7.10782 6.22285 7.13379 6.35288 7.13379 6.4842C7.13379 6.61553 7.10782 6.74556 7.05737 6.86681C7.00692 6.98806 6.93299 7.09813 6.83984 7.1907L1.06084 12.9707L0.000838757 11.9107L5.42484 6.4857L-0.000161171 1.0607Z"
                        fill="#666666" />
                </svg>
            </span>
            <span>Browse</span>
            <span class="seperator">
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M-0.000161171 1.0607L1.06084 0.000703812L6.83984 5.7777C6.93299 5.87027 7.00692 5.98035 7.05737 6.1016C7.10782 6.22285 7.13379 6.35288 7.13379 6.4842C7.13379 6.61553 7.10782 6.74556 7.05737 6.86681C7.00692 6.98806 6.93299 7.09813 6.83984 7.1907L1.06084 12.9707L0.000838757 11.9107L5.42484 6.4857L-0.000161171 1.0607Z"
                        fill="#666666" />
                </svg>
            </span>
            <span class="active">{{ course.category.name }}</span>
        </div>
        <header>
            <h1>{{ course.title }}</h1>
        </header>
        <main class="main">

            <article class="course-description">

                <div class="image-section">
                    <img :src="course.image" alt="Course Image" />

                    <div class="details-row">
                        <div class="info-items">
                            <div class="icon-text">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 4H17V2H15V4H9V2H7V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM5 20V8H19V6V20H5Z"
                                        fill="#525252" />
                                </svg>
                                {{ course.durationWeeks }} Weeks
                            </div>
                            <div class="icon-text">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.5 12H12V7M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z"
                                        stroke="#525252" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                {{ course.hours }} Hours
                            </div>

                        </div>

                        <div class="badge">
                            <div class="rate-badge">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1318_10582)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M17.2932 8.17501C17.4349 8.47691 17.7177 8.68831 18.0474 8.73867L23.888 9.63081C24.6926 9.75372 25.0212 10.7351 24.4527 11.3177L20.1644 15.7128C19.9427 15.94 19.8421 16.259 19.8932 16.5722L20.8972 22.7252C21.0317 23.5491 20.1571 24.1653 19.4265 23.7615L14.2957 20.9255C13.9946 20.7591 13.6292 20.7591 13.3281 20.9255L8.19806 23.7614C7.46751 24.1653 6.59295 23.5492 6.72729 22.7253L7.73067 16.5722C7.78175 16.2589 7.6811 15.9401 7.45946 15.7129L3.17106 11.3177C2.60263 10.7351 2.93119 9.75372 3.73581 9.63081L9.57636 8.73867C9.90604 8.68831 10.1889 8.47691 10.3306 8.17501L12.9066 2.68645C13.2666 1.91962 14.3572 1.91962 14.7171 2.68645L17.2932 8.17501Z"
                                            fill="#F4A316" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1318_10582">
                                            <rect width="26" height="26" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                {{ averageRating }}


                            </div>
                            <div class="tag-pill">
                                <div class="svg" v-html="SvgMap[course.category.icon]"></div>
                                {{ course.category.name }}
                            </div>

                        </div>

                    </div>
                    <div>
                        <div class="instructor">
                            <img :src="course.instructor.avatar" alt="avatar" class="avatar" />
                            <div class="category-name">
                                {{ course.instructor.name }}
                            </div>

                        </div>
                        <div class="description">
                            <h4>Course Description</h4>
                            <p>
                                {{ course.description }}
                            </p>
                        </div>

                    </div>
                </div>
            </article>
            <!-- here -->
            <article class="details">
                <EnrollComponent v-if="course.enrollment === null" :course-id="courseId"
                    :basePrice="course.basePrice" />
                <EnrolledComponent v-else :item="course" />
            </article>
        </main>
        <div>
            <FeedbackModal v-if="modalStore.feedback.isOpen" :type="modalStore.feedback.type"
                :course-name="modalStore.feedback.courseName" :time="modalStore.feedback.details"
                :item="course.reviews" />
        </div>

    </div>
</template>
<script setup lang="ts">
import EnrollComponent from '~/components/course/EnrollComponent.vue';
import EnrolledComponent from '~/components/course/EnrolledComponent.vue';
import FeedbackModal from '~/components/feedbackModal.vue';
import { useAuthStore } from '~/stores/auth';
import { useModalStore } from '~/stores/modal';
const authStore = useAuthStore();
const modalStore = useModalStore();
const config = useRuntimeConfig();
const route = useRoute();
const courseId = computed(() => route.params.id as string);

const { data: course, pending, error } = await useFetch(() => `/courses/${courseId.value}`, {
    baseURL: config.public.api as string,
    key: `course-${courseId.value}`,
    headers: {
        Authorization: `Bearer ${authStore.token}`
    },
    transform: (res: any) => res.data || res
});
const averageRating = computed(() => {
    const reviews = course.value?.reviews;

    if (!reviews || reviews.length === 0) {
        return '0.0';
    }

    const sum = reviews.reduce((acc: number, item: any) => acc + item.rating, 0);

    return (sum / reviews.length).toFixed(1);
});
</script>

<style scoped>
.details {
    display: flex;
    flex-direction: column;
    gap: 11px;
    width: 530px;
    min-height: 400px;
}

.arrow-icon {
    transition: transform 0.3s ease, fill 0.3s ease;
    transform: rotate(0deg);
}

.rotate-180 {
    transform: rotate(180deg);
}

.badge {
    display: flex;
    align-items: center;
    gap: 10px;
}

.rate-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 500;
    color: #525252;
    line-height: 150%;
}

.course-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 177px;
    box-sizing: border-box;
    justify-content: space-between;
}

.feed {
    position: absolute;
}

.course-description {
    width: 950px;
}



.main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}



h4 {
    display: flex;
    margin: 0;
    align-items: center;
}


.breadcrumb {
    padding: 50px 0 20px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    color: #666666;
}

.breadcrumb .active {
    color: #736BEA;
}

header h1 {
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 30px;
}

.image-section img {
    width: 100%;
    height: 474px;
    object-fit: cover;
    border-radius: 20px;
}

.details-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.info-items {
    display: flex;
    gap: 20px;
    align-items: center;
}

.icon-text {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #525252;
}

.tag-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: #FFFFFF;
    border-radius: 12px;
}

.tag-pill .svg {
    display: flex;
}

.description h4 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: #8A8A8A;

}

.description p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #525252;
    white-space: pre-line;
}

.instructor {
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    width: fit-content;
    gap: 5px;
    padding: 8px 12px;
    border-radius: 12px;
    margin: 20px 0;
}

.instructor .avatar {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    object-fit: cover;
}

.instructor .category-name {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #666666;
}
</style>