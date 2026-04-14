<template>
    <Teleport to="body">
        <div class="modal-overlay">
            <div class="content">
                <div class="detail">
                    <div class="icon">
                        <div v-html="FeedBackSvg[ui.svg]"></div>
                    </div>
                    <div class="message">
                        {{ ui.title }}
                    </div>
                    <div class="text">
                        <div class="text" v-html="ui.text"></div>
                    </div>
                </div>
                <div>
                    <RateComponent v-if="ui.rating" :courseId="courseStore.lastAttempt?.courseId || ''" :isRated="isRated"
                        :icon-shown="true" :rating="courseReview" />
                </div>
                <div class="buttons">
                    <button @click="handleLightClick" v-if="ui.btn2" class="btn light">
                        {{ ui.btn2 }}
                    </button>
                    <button @click="handleDarkClick()" class="btn dark">
                        {{ ui.btn1 }}
                    </button>

                </div>
            </div>
        </div>
    </Teleport>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useCourseStore } from '~/stores/course';
import { useModalStore } from '~/stores/modal';
const authStore = useAuthStore();
const modalStore = useModalStore();
const courseStore = useCourseStore();
const props = defineProps<{
    item?: any;
    type: 'profile' | 'congratulations' | 'conflict' | 'confirm';
    courseName?: string;
    time?: string;
}>()
const handleLightClick = () => {
    if (props.type === 'profile') {
        modalStore.closeFeedback();
        setTimeout(() => {
            modalStore.closeFeedback();
        }, 300);
        modalStore.toggleModal('profile', true);

    } else if (props.type === 'conflict') {
        if (courseStore.lastAttempt) {
            courseStore.Enrollment(courseStore.lastAttempt.courseId, courseStore.lastAttempt.scheduleId, true);
        }
    }
}
const courseReview = computed(() => {
    if (!props.item) return 0;

    const review = props.item.find((review: any) => review.userId === authStore.user?.id);

    return review?.rating || 0;
})
const isRated = ref(courseReview.value > 0);

const handleDarkClick = () => {
    modalStore.closeFeedback();
}

const ui = computed(() => {
    const config = {
        profile: {
            svg: 'profile',
            title: 'Complete your profile to continue',
            text: 'You need to complete your profile before enrolling in this course.',
            btn2: 'Complete Profile',
            btn1: 'Cancel',
            rating: false
        },
        congratulations: {
            svg: 'congratulations',
            title: 'Congratulations!',
            text: `You've completed <span class="highlight">"${props.courseName}"</span> Course!`,
            btn1: 'Done',
            btn2: null,
            rating: true
        },
        conflict: {
            svg: 'conflict',
            title: 'Enrollment Conflict',
            text: `You are already enrolled in <span class="highlight">"${props.courseName}"</span> with the same schedule: ${props.time}`,
            btn1: 'Cancel',
            btn2: 'Continue Anyway',
            rating: false
        },
        confirm: {
            svg: 'confirm',
            title: 'Enrollment Confirmed!',
            text: `You've successfully enrolled to the <span class="highlight">"${props.courseName}"</span> Course!`,
            btn1: 'Done',
            btn2: null,
            rating: false
        }
    }
    return config[props.type];
})
</script>
<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.content {
    display: flex;
    flex-direction: column;
    width: 476px;
    background-color: #FFFFFF;
    padding: 60px;
    border-radius: 16px;
    box-sizing: border-box;
    gap: 42px;

}

.detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
}

.message {
    color: #3D3D3D;
    font-size: 32px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.text {
    justify-content: center;
    color: #3D3D3D;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    font-size: 20px;

}

.buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 8px;
}

.btn {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
}

.light {
    border: 2px solid #958FEF;
    color: #4F46E5;
    background-color: #FFFFFF;
}

.dark {
    border: 2px solid transparent;
    background-color: #4F46E5;
    color: white;
}

.dark:hover {
    background-color: #281ED2;
}

.light:hover {
    background-color: #F9F5FF;
}

.text:deep(.highlight) {
    color: #3D3D3D;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
}
</style>