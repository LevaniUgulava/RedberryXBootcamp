<template>
    <div class="course-detail">
        <div class="detail">
            <div class="step">
                <header>
                    <div class="title">
                        <svg width="28" height="28" viewBox="0 0 28 28"
                            :fill="stepPassed.includes(0) ? 'currentcolor' : 'none'" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.4541 2.70312C17.5704 2.70313 20.5591 3.94098 22.7627 6.14453C24.9662 8.34808 26.2041 11.3368 26.2041 14.4531C26.2041 15.996 25.9 17.5237 25.3096 18.9492C24.7191 20.3748 23.8538 21.6706 22.7627 22.7617C21.6716 23.8528 20.3758 24.7181 18.9502 25.3086C17.5247 25.899 15.997 26.2031 14.4541 26.2031C12.9112 26.2031 11.3835 25.899 9.95801 25.3086C8.53243 24.7181 7.2366 23.8528 6.14551 22.7617C5.05442 21.6706 4.18913 20.3748 3.59863 18.9492C3.00823 17.5237 2.7041 15.996 2.7041 14.4531C2.7041 11.3368 3.94196 8.34808 6.14551 6.14453C8.34906 3.94098 11.3378 2.70312 14.4541 2.70312Z"
                                stroke="#130E67" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.8786 18.6866V9.3125L11.6562 11.656"
                                :stroke="stepPassed.includes(0) ? 'white' : '#0A0836'" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                        <h4>Weekly Schedule</h4>
                    </div>


                    <svg @click="steps.firstStep.open = !steps.firstStep.open"
                        :class="{ 'rotate-180': steps.firstStep.open }" class="arrow-icon" width="28" height="28"
                        viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.9359 17.2397C21.0081 17.3017 21.093 17.3501 21.1858 17.3823C21.2786 17.4145 21.3774 17.4297 21.4767 17.4271C21.5759 17.4246 21.6737 17.4043 21.7643 17.3674C21.8549 17.3305 21.9367 17.2778 22.0049 17.2122C22.0731 17.1466 22.1264 17.0694 22.1618 16.9851C22.1972 16.9008 22.2139 16.811 22.2111 16.7208C22.2083 16.6305 22.186 16.5417 22.1454 16.4594C22.1048 16.377 22.0468 16.3027 21.9746 16.2407L15.171 10.4007C15.0307 10.2801 14.8449 10.2129 14.6517 10.2129C14.4586 10.2129 14.2727 10.2801 14.1324 10.4007L7.32804 16.2407C7.25429 16.3023 7.19473 16.3766 7.15283 16.4592C7.11093 16.5419 7.08753 16.6313 7.08397 16.7223C7.08042 16.8132 7.09678 16.9039 7.13212 16.9891C7.16746 17.0743 7.22106 17.1522 7.28982 17.2184C7.35858 17.2846 7.44111 17.3377 7.53264 17.3746C7.62417 17.4115 7.72286 17.4316 7.82299 17.4336C7.92311 17.4356 8.02267 17.4194 8.11588 17.3861C8.20909 17.3529 8.2941 17.3031 8.36596 17.2397L14.6517 11.8449L20.9359 17.2397Z"
                            :fill="steps.firstStep.open ? '#130E67' : '#8A8A8A'" />
                    </svg>
                </header>
                <Transition name="fade">

                    <div v-if="steps.firstStep.open" class="week">
                        <div v-for="item in allSchedules" :key="item.id" @click="handleScheduleSelection(item.id)"
                            class="card gap-5 h-91" :class="{
                                'disable': !isAvailable(item.id),
                                'active': steps.firstStep.value == item.id,
                            }">
                            {{ item.label }}
                        </div>

                    </div>
                </Transition>
            </div>
            <div class="step">
                <header>
                    <div class="title">
                        <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"
                            :fill="steps.secondStep.value ? '#0A0A0A' : 'none'">

                            <path
                                d="M14.0234 2.27344C17.1397 2.27344 20.1285 3.51129 22.332 5.71484C24.5356 7.9184 25.7734 10.9071 25.7734 14.0234C25.7734 15.5663 25.4693 17.094 24.8789 18.5195C24.2884 19.9451 23.4231 21.2409 22.332 22.332C21.2409 23.4231 19.9451 24.2884 18.5195 24.8789C17.094 25.4693 15.5663 25.7734 14.0234 25.7734C12.4805 25.7734 10.9528 25.4693 9.52734 24.8789C8.10177 24.2884 6.80593 23.4231 5.71484 22.332C4.62376 21.2409 3.75846 19.9451 3.16797 18.5195C2.57757 17.094 2.27344 15.5663 2.27344 14.0234C2.27344 10.9071 3.51129 7.9184 5.71484 5.71484C7.9184 3.51129 10.9071 2.27344 14.0234 2.27344Z"
                                :stroke="steps.secondStep.value ? '#0A0A0A' : (steps.secondStep.open ? '#0A0A0A' : '#8A8A8A')"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />

                            <path
                                d="M10.5236 12.0179C10.5236 8.30393 16.941 8.30393 16.941 12.0179C16.941 14.8213 12.7485 17.2385 10.5236 18.7677C10.5236 18.7677 14.6952 18.1717 17.4764 18.7677"
                                :stroke="steps.secondStep.value ? 'white' : (steps.secondStep.open ? '#0A0A0A' : '#8A8A8A')"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <h4 :class="{ 'text-gray-400': !steps.secondStep.open && !steps.secondStep.value }">Time
                            Slot</h4>
                    </div>
                    <svg @click="toggle(1)" :class="{ 'rotate-180': steps.secondStep.open }" class="arrow-icon"
                        width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.9359 17.2397C21.0081 17.3017 21.093 17.3501 21.1858 17.3823C21.2786 17.4145 21.3774 17.4297 21.4767 17.4271C21.5759 17.4246 21.6737 17.4043 21.7643 17.3674C21.8549 17.3305 21.9367 17.2778 22.0049 17.2122C22.0731 17.1466 22.1264 17.0694 22.1618 16.9851C22.1972 16.9008 22.2139 16.811 22.2111 16.7208C22.2083 16.6305 22.186 16.5417 22.1454 16.4594C22.1048 16.377 22.0468 16.3027 21.9746 16.2407L15.171 10.4007C15.0307 10.2801 14.8449 10.2129 14.6517 10.2129C14.4586 10.2129 14.2727 10.2801 14.1324 10.4007L7.32804 16.2407C7.25429 16.3023 7.19473 16.3766 7.15283 16.4592C7.11093 16.5419 7.08753 16.6313 7.08397 16.7223C7.08042 16.8132 7.09678 16.9039 7.13212 16.9891C7.16746 17.0743 7.22106 17.1522 7.28982 17.2184C7.35858 17.2846 7.44111 17.3377 7.53264 17.3746C7.62417 17.4115 7.72286 17.4316 7.82299 17.4336C7.92311 17.4356 8.02267 17.4194 8.11588 17.3861C8.20909 17.3529 8.2941 17.3031 8.36596 17.2397L14.6517 11.8449L20.9359 17.2397Z"
                            :fill="steps.secondStep.open ? '#130E67' : '#8A8A8A'" />
                    </svg>

                </header>
                <Transition name="fade">

                    <div v-if="steps.secondStep.open" class="time-slot">
                        <div v-for="(item, index) in allTimeSlots" :key="index"
                            @click="handleTimeSlotSelection(item.id)" class="card gap-5 h-91" :class="{
                                'disable': !isAvailableTimeSlot(item.id),
                                'active': steps.secondStep.value == item.id,

                            }">
                            <div :class="{ 'disable-span': !isAvailableTimeSlot(item.id), 'active-span': steps.secondStep.value == item.id, }"
                                class="text-gray" v-html="item.svg"></div>
                            <div>
                                <span
                                    :class="{ 'disable-span': !isAvailableTimeSlot(item.id), 'active-span': steps.secondStep.value == item.id, }"
                                    class="text-sm text-gray">{{
                                        item.label }}</span>
                                <span
                                    :class="{ 'disable-span': !isAvailableTimeSlot(item.id), 'active-span': steps.secondStep.value == item.id, }"
                                    class="text-xs text-gray">{{
                                        item.time }}</span>
                            </div>

                        </div>
                    </div>
                </Transition>

            </div>
            <div class="step">
                <header>
                    <div class="title">
                        <svg width="28" height="28" viewBox="0 0 28 28"
                            :fill="steps.thirdStep.value ? 'currentcolor' : 'none'" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.9944 2.15332C17.1107 2.15332 20.0994 3.39117 22.303 5.59473C24.5065 7.79828 25.7444 10.787 25.7444 13.9033C25.7444 15.4462 25.4403 16.9739 24.8499 18.3994C24.2594 19.825 23.3941 21.1208 22.303 22.2119C21.2119 23.303 19.9161 24.1683 18.4905 24.7588C17.065 25.3492 15.5373 25.6533 13.9944 25.6533C12.4515 25.6533 10.9238 25.3492 9.49829 24.7588C8.07272 24.1683 6.77688 23.303 5.68579 22.2119C4.5947 21.1208 3.72941 19.825 3.13892 18.3994C2.54851 16.9739 2.24438 15.4462 2.24438 13.9033C2.24438 10.787 3.48224 7.79828 5.68579 5.59473C7.88934 3.39117 10.8781 2.15332 13.9944 2.15332Z"
                                :stroke="steps.thirdStep.value ? 'white' : (steps.thirdStep.open ? '#0A0A0A' : '#8A8A8A')"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M10.3225 11.4715C10.3225 8.11886 17.6777 8.11886 17.6777 11.4715C17.6777 11.4715 17.6777 14.0009 14.0001 14.0009C17.6777 14.0009 17.6777 16.5302 17.6777 16.5302C17.6777 19.8829 10.3225 19.8829 10.3225 16.5302"
                                :stroke="steps.thirdStep.value ? 'white' : (steps.thirdStep.open ? '#0A0A0A' : '#8A8A8A')"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                        <h4 :class="{ 'text-gray-400': !steps.thirdStep.open && !steps.thirdStep.value }">
                            Session Type</h4>
                    </div>
                    <svg @click="toggle(2)" :class="{ 'rotate-180': steps.thirdStep.open }" class="arrow-icon"
                        width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.9359 17.2397C21.0081 17.3017 21.093 17.3501 21.1858 17.3823C21.2786 17.4145 21.3774 17.4297 21.4767 17.4271C21.5759 17.4246 21.6737 17.4043 21.7643 17.3674C21.8549 17.3305 21.9367 17.2778 22.0049 17.2122C22.0731 17.1466 22.1264 17.0694 22.1618 16.9851C22.1972 16.9008 22.2139 16.811 22.2111 16.7208C22.2083 16.6305 22.186 16.5417 22.1454 16.4594C22.1048 16.377 22.0468 16.3027 21.9746 16.2407L15.171 10.4007C15.0307 10.2801 14.8449 10.2129 14.6517 10.2129C14.4586 10.2129 14.2727 10.2801 14.1324 10.4007L7.32804 16.2407C7.25429 16.3023 7.19473 16.3766 7.15283 16.4592C7.11093 16.5419 7.08753 16.6313 7.08397 16.7223C7.08042 16.8132 7.09678 16.9039 7.13212 16.9891C7.16746 17.0743 7.22106 17.1522 7.28982 17.2184C7.35858 17.2846 7.44111 17.3377 7.53264 17.3746C7.62417 17.4115 7.72286 17.4316 7.82299 17.4336C7.92311 17.4356 8.02267 17.4194 8.11588 17.3861C8.20909 17.3529 8.2941 17.3031 8.36596 17.2397L14.6517 11.8449L20.9359 17.2397Z"
                            :fill="steps.thirdStep.open ? '#130E67' : '#8A8A8A'" />
                    </svg>

                </header>
                <Transition name="fade">

                    <div v-if="steps.thirdStep.open" class="session">

                        <div v-if="loadingSessionTypes" class="session-first-div">
                            <div class="card gap-5 h-131">
                                <div>
                                    <div class="icon" :class="{ 'skeleton': loadingSessionTypes }"></div>
                                    <h5 class="type" :class="{ 'skeleton': loadingSessionTypes }"></h5>
                                    <span class="location" :class="{ 'skeleton': loadingSessionTypes }"></span>
                                    <span class=" added" :class="{ 'skeleton': loadingSessionTypes }"></span>

                                </div>

                            </div>
                            <div class="seats">
                                <span :class="{ 'skeleton': loadingSessionTypes }"></span>
                            </div>
                        </div>
                        <div v-for="(item, index) in sessionTypes" :key="index" class="session-first-div">

                            <div @click="selectSessionType(item.id, item.courseScheduleId)"
                                :class="{ 'active': steps.thirdStep.value == item.id, 'disable': item.availableSeats == 0 }"
                                class="card gap-5 h-131">
                                <div>
                                    <div style="height: fit-content;" v-html="sessionType[item.name]"></div>
                                    <h5 :class="{ 'disable-span': item.availableSeats == 0 }" class="type">{{ item.name
                                    }}
                                    </h5>
                                    <span :class="{ 'disable-span': item.availableSeats == 0 }" class="location">{{
                                        item.location ?? 'Google Meet' }}</span>
                                    <span :class="{ 'disable-span': item.availableSeats == 0 }" class="added">+ ${{
                                        item.priceModifier
                                    }}</span>

                                </div>
                            </div>
                            <div class="seats">
                                <span v-if="item.availableSeats == 0">Fully Booked</span>
                                <span class="warning" v-else-if="item.availableSeats < 5">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.8 11.7557L9.33437 2.26379C9.19779 2.03124 9.00281 1.83843 8.76875 1.70445C8.53469 1.57048 8.26969 1.5 8 1.5C7.73031 1.5 7.4653 1.57048 7.23124 1.70445C6.99719 1.83843 6.8022 2.03124 6.66562 2.26379L1.2 11.7557C1.06858 11.9806 0.999329 12.2364 0.999329 12.4969C0.999329 12.7574 1.06858 13.0132 1.2 13.2382C1.33483 13.4721 1.52948 13.666 1.76397 13.7999C1.99847 13.9338 2.26436 14.0028 2.53437 14H13.4656C13.7354 14.0026 14.0011 13.9334 14.2353 13.7996C14.4696 13.6657 14.664 13.4719 14.7987 13.2382C14.9304 13.0134 14.9998 12.7576 15 12.4971C15.0003 12.2366 14.9312 11.9807 14.8 11.7557ZM13.9331 12.7375C13.8855 12.8188 13.8171 12.886 13.7349 12.9321C13.6528 12.9782 13.5598 13.0017 13.4656 13H2.53437C2.44017 13.0017 2.34723 12.9782 2.26508 12.9321C2.18293 12.886 2.11452 12.8188 2.06687 12.7375C2.02371 12.6645 2.00095 12.5812 2.00095 12.4963C2.00095 12.4114 2.02371 12.3281 2.06687 12.255L7.5325 2.76317C7.58111 2.68227 7.64983 2.61534 7.73197 2.56887C7.81411 2.5224 7.90688 2.49797 8.00125 2.49797C8.09562 2.49797 8.18839 2.5224 8.27053 2.56887C8.35267 2.61534 8.42139 2.68227 8.47 2.76317L13.9356 12.255C13.9784 12.3283 14.0007 12.4118 14.0003 12.4966C13.9999 12.5815 13.9767 12.6647 13.9331 12.7375ZM7.5 9.00004V6.50004C7.5 6.36743 7.55268 6.24026 7.64645 6.14649C7.74021 6.05272 7.86739 6.00004 8 6.00004C8.13261 6.00004 8.25978 6.05272 8.35355 6.14649C8.44732 6.24026 8.5 6.36743 8.5 6.50004V9.00004C8.5 9.13265 8.44732 9.25983 8.35355 9.35359C8.25978 9.44736 8.13261 9.50004 8 9.50004C7.86739 9.50004 7.74021 9.44736 7.64645 9.35359C7.55268 9.25983 7.5 9.13265 7.5 9.00004ZM8.75 11.25C8.75 11.3984 8.70601 11.5434 8.6236 11.6667C8.54119 11.7901 8.42406 11.8862 8.28701 11.943C8.14997 11.9997 7.99917 12.0146 7.85368 11.9856C7.7082 11.9567 7.57456 11.8853 7.46967 11.7804C7.36478 11.6755 7.29335 11.5418 7.26441 11.3964C7.23547 11.2509 7.25032 11.1001 7.30709 10.963C7.36385 10.826 7.45998 10.7088 7.58332 10.6264C7.70666 10.544 7.85166 10.5 8 10.5C8.19891 10.5 8.38968 10.5791 8.53033 10.7197C8.67098 10.8604 8.75 11.0511 8.75 11.25Z"
                                            fill="#F4A316" />
                                    </svg>
                                    Only {{ item.availableSeats }} Seats Remaining
                                </span>
                                <span v-else>{{ item.availableSeats
                                }} Seats Available</span>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <div>
            </div>
        </div>

        <div class="price">
            <div>
                <h4 class="text-l text-gray-400">Total Price</h4>
                <h2 class="text-xl text-gray-800">${{ parseFloat(props.basePrice) + parseFloat(priceModifier) }}
                </h2>
            </div>
            <div>
                <span class="text-m text-gray-400">Base Price</span>
                <span class="text-m text-gray-800"> + ${{ props.basePrice }}</span>
            </div>
            <div>
                <span class="text-m text-gray-400">Session Type</span>
                <span class="text-m text-gray-800"> + ${{ priceModifier }}</span>
            </div>
            <button @click="handleEnroll" class="enroll" :class="{ 'disable': !activeButton }">
                Enroll Now
            </button>
        </div>

        <div>
            <NotifyComponent v-if="status" :status="status" />
        </div>

    </div>
</template>
<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import NotifyComponent from '../auth/notifyComponent.vue';
import { useCourseStore } from '~/stores/course';
import { useModalStore } from '~/stores/modal';

const authStore = useAuthStore();
const courseStore = useCourseStore();
const modalStore = useModalStore();
const status = computed(() => {
    if (!authStore.isLoggedIn) return 'noAuth';
    if (!authStore.user?.profileComplete) return 'noComplete';

    return null;
});
const activeButton = computed(() => {
    return steps.firstStep.value && steps.secondStep.value && steps.thirdStep.value && sessionTypes.value?.find((s: any) => s.id === steps.thirdStep.value)?.availableSeats > 0;
})
const props = defineProps<{
    courseId: string,
    basePrice: string
}>()
const config = useRuntimeConfig();
const stepTypes = ['firstStep', 'secondStep', 'thirdStep'] as const


const steps = reactive<Record<typeof stepTypes[number], { open: boolean, value: number | null }>>({
    firstStep: { open: true, value: null },
    secondStep: { open: false, value: null },
    thirdStep: { open: false, value: null },
});

const toggle = (index: number) => {
    if (index > 0) {
        const PervStepKey = stepTypes[index - 1];
        if (PervStepKey && steps[PervStepKey].value === null) {
            return;
        }
    }
    const stepKey = stepTypes[index]
    if (stepKey)
        steps[stepKey].open = !steps[stepKey].open


};


const { data: weekSchedules } = await useFetch<any>(`courses/${props.courseId}/weekly-schedules`, {
    baseURL: config.public.api,
});


const timeSlots = ref<any>(null);
const loadingSessionTypes = ref<boolean>(false);
const sessionTypes = ref<any>(null);

const stepPassed = ref<number[]>([]);

async function handleTimeSlot(selectedScheduleId: number) {
    timeSlots.value = [];

    try {
        const response = await $fetch<any>(`courses/${props.courseId}/time-slots`, {
            baseURL: config.public.api as string,
            query: {
                weekly_schedule_id: selectedScheduleId
            }
        });

        console.log('Time slots:', response);

        timeSlots.value = response.data || [];

    } catch (error) {
        console.error('Error fetching time slots:', error);
    }
}

const isAvailable = (staticId: number) => {
    if (!weekSchedules.value?.data) return false;

    return weekSchedules.value.data.some((s: any) => Number(s.id) === Number(staticId));
};
const isAvailableTimeSlot = (staticId: number) => {
    if (!timeSlots.value) return false;


    return timeSlots.value.some((s: any) => Number(s.id) === staticId);
};

function setStep(index: number, id: number) {
    const currentActiveIndex = stepTypes.findIndex(step => steps[step].open);

    if (currentActiveIndex !== -1 && !stepPassed.value.includes(currentActiveIndex)) {
        stepPassed.value.push(currentActiveIndex);
    }
    const stepName = stepTypes[index + 1];
    if (stepName) {
        steps[stepName].open = true;
    }
}
const handleScheduleSelection = (id: number) => {
    if (!isAvailable(id)) return;

    steps.secondStep.value = null;
    steps.thirdStep.value = null;
    steps.firstStep.value = id;
    setStep(0, id);
    handleTimeSlot(id);

};
const handleTimeSlotSelection = (id: number) => {
    if (!isAvailableTimeSlot(id)) return;
    steps.thirdStep.value = null;

    loadingSessionTypes.value = true;
    sessionTypes.value = [];


    setTimeout(() => {
        handleSessiontype(id);

    }, 300);


    steps.secondStep.value = id;
    setStep(1, id);
};
const handleSessiontype = async (timeslotid: number) => {
    try {
        const response = await $fetch<any>(`courses/${props.courseId}/session-types`, {
            baseURL: config.public.api as string,
            query: {
                weekly_schedule_id: steps.firstStep.value,
                time_slot_id: timeslotid
            }
        });


        sessionTypes.value = response.data || [];

    } catch (error) {
        console.error('Error fetching time slots:', error);
    } finally {
        loadingSessionTypes.value = false;

    }
}
const courseScheduleId = ref<number>();
const priceModifier = computed(() => {
    const selectedSession = sessionTypes.value?.find((s: any) => s.id === steps.thirdStep.value);
    return selectedSession ? selectedSession.priceModifier : 0;
})
const selectSessionType = (id: number, courseSchedule: number) => {
    if (!courseSchedule || !id) return;
    steps.thirdStep.value = id;
    courseScheduleId.value = courseSchedule;
    setStep(2, id);
}
const handleEnroll = () => {
    if (authStore.user?.profileComplete === false) {
        modalStore.openFeedback('profile');
    }
    if (!authStore.isLoggedIn) {
        modalStore.toggleModal('auth', true, 'login')
    }
    if (props.courseId && courseScheduleId.value) {
        courseStore.Enrollment(props.courseId, courseScheduleId.value);
    } else {
        console.warn("Missing Course ID or Schedule ID");
    }
}

</script>
<style scoped>
.arrow-icon {
    cursor: pointer;
    transition: ease-in-out 300ms;
}

.rotate-180 {
    transform: rotate(180deg);
}

h4 {
    display: flex;
    margin: 0;
    align-items: center;
}

.course-detail {
    display: flex;
    flex-direction: column;
    gap: 11px;
    width: 530px;
    min-height: 400px;
}

.detail {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.detail .step {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.detail .step header .title {
    display: flex;
    gap: 10px;
}

.detail .step header {
    display: flex;
    justify-content: space-between;
}



.week {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

}



.time-slot,
.session {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.session-first-div {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.skeleton {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 4px;
    background-size: 200% 100%;
    animation: shimmer 1.5s linear infinite;
    color: transparent !important;
    user-select: none;
}

h5.skeleton {
    width: 50px;
    height: 20px;
    margin-bottom: 8px;
}

.icon.skeleton {
    width: 26px;
    height: 26px !important;
    margin-bottom: 8px;
}

span.skeleton {
    width: 40px;
    height: 14px;
}

.seats span.skeleton {
    width: 80%;
    height: 12px;
}

.seats .warning {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #F4A316;
}

@keyframes shimmer {
    to {
        background-position-x: -200%;
    }
}

.session .type {
    color: #525252;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
}

.card:hover .type,
.card:hover .location {
    color: #4F46E5;
}

.session .location {
    color: #525252;
    font-size: 12px;
    font-weight: 400;

}

.session .added {
    font-size: 14px;
    color: #736BEA;
    font-weight: 500;
}

.session .card div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: center;

}

.gap-5 {
    gap: 5px;
}

.h-131 {
    height: 131px;
}

.h-91 {
    height: 91px;
}

.text-sm {
    font-size: 14px;
}

.text-xs {
    font-size: 10px;
}

.text-m {
    font-size: 16px;
}

.text-l {
    font-size: 20px;
}

.text-xl {
    font-size: 32px;
}

.text-gray-400 {
    color: #8A8A8A;
}

.text-gray-800 {
    color: #292929;
}

.text-gray {
    color: #666666;
}

.card:hover .text-gray {
    color: #4F46E5;
}

.session .seats {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #3D3D3D;
}

.card {
    display: flex;
    background-color: #FFFFFF;
    border: 1px solid #D1D1D1;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    color: #292929;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}

.card.disable {
    background-color: #F5F5F5;
    border: 1px solid #D1D1D1;
    color: #D1D1D1;
    cursor: not-allowed;
    pointer-events: none;
}

.disable-span {
    color: #D1D1D1 !important;
}

.active-span {
    color: #4F46E5;
}

.card.active {
    background-color: #DDDBFA;
    color: #4F46E5;
    border-color: #958FEF;
}

.card:hover {
    background-color: #DDDBFA;
    border: 1px solid #958FEF;
    color: #4F46E5;
}

.time-slot .card div {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.price {
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    border: 1px solid #F5F5F5;
    padding: 40px;
    gap: 12px;
    box-sizing: border-box;
}

.price div {
    display: flex;
    justify-content: space-between;
}

.enroll {
    line-height: 24px;
    font-size: 600;
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    height: 65px;
    border: none;
    border-radius: 12px;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 20px;
    background-color: #4F46E5;
    color: white;
    cursor: pointer;
    transition: ease-in-out 300ms;

}

.enroll:hover {
    background-color: #281ED2;
    color: white;
}

.enroll.disable {
    background-color: #EEEDFC;
    color: #B7B3F4;

}
</style>