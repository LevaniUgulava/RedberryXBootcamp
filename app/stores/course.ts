import { useModalStore } from "./modal";
import { useAuthStore } from "./auth";

export const useCourseStore = defineStore('course', () => {
    const modalStore = useModalStore();
    const authStore = useAuthStore();
    const config = useRuntimeConfig();

    const lastAttempt = ref<{ courseId: string, scheduleId: number } | null>(null);

    const Enrollment = async (courseId: string, courseScheduleId: number, force = false) => {
        try {
            const response = await $fetch<any>(`/enrollments`, {
                baseURL: config.public.api as string,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${authStore.token}`,
                },
                body: {
                    courseId: courseId,
                    courseScheduleId: courseScheduleId,
                    force: force,
                }
            });
            modalStore.openFeedback('confirm', response.data.course.title);
            await refreshNuxtData(`course-${courseId}`);
            await refreshNuxtData('user-enrollments');


        } catch (err: any) {

            const status = err.response?._data?.status || err.statusCode;
            const errorData = err.response?._data;



            if (status === 409) {
                lastAttempt.value = { courseId, scheduleId: courseScheduleId };
                const conflictDetails = errorData.conflicts[0].schedule;

                modalStore.openFeedback('conflict', errorData.conflicts[0].conflictingCourseName, conflictDetails);
            }
            console.error('Enrollment error:', err);
        }
    }

    const rate = async (rating: number, courseId: string) => {
        try {
            const response = await $fetch(`/courses/${courseId}/reviews`, {
                baseURL: config.public.api,
                method: 'POST',
                body: {
                    rating: rating
                },
                headers: {
                    Authorization: `Bearer ${authStore.token}`,
                }
            })

        } catch (err) {
            console.error('Error submitting rating:', err);
        }

    }

    return {
        rate,
        Enrollment, lastAttempt
    }

});