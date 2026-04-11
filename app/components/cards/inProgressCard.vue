<template>
    <div class="progress-card" :style="props.isBlur ? 'filter: blur(10px);' : ''">
        <div class="card-content">
            <div class="img-container">
                <img :src="props.item?.course.image" alt="Lecturer" />
            </div>
            <div class="card-header">


                <div class="info-container">
                    <span class="role-label">{{ props.item?.course.instructor.name }}</span>

                    <div class="rating-badge">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 2L11.47 6.91L17 7.71L13 11.52L13.94 17L9 14.47L4.06 17L5 11.52L1 7.71L6.53 6.91L9 2Z"
                                fill="#F4A316" />
                        </svg>
                        <span class="rating-value">4.9</span>
                    </div>
                </div>
                <div class="card-name">
                    <h4 class="lecturer-name">{{ props.item?.course.title }}</h4>
                </div>
            </div>

        </div>
        <div class="card-footer">
            <div class="progress-section">
                <div class="progress">{{ props.item?.progress }}% Complete</div>

                <div class="progress-bar-wrapper">
                    <div class="progress-fill" :style="{ width: props.item?.progress + '%' }"></div>
                </div>
            </div>
            <div>
                <button @click="redirect" class="cta-button">View</button>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    isBlur: Boolean,
    item: Object
});
const redirect = () => {
    window.location.href = "/details";
}
</script>
<style scoped>
.progress-card {
    width: 506px;
    background: #FFFFFF;
    border: 1px solid #F5F5F5;
    border-radius: 12px;
    padding: 20px;
    font-family: sans-serif;
    transition: all 300ms ease-out;

}

.progress-card:hover {
    border: 1px solid #B7B3F4;
    box-shadow: 0px 0px 25px 0px #8A82D41A;
}

.progress-card:active,
.progress-card:has(.cta-button:active) {
    border: 1px solid #958FEF;
    box-shadow: 0px 0px 35px 0px #8A82D440;

}

.card-content {
    display: flex;
    gap: 16px;
}

.card-header {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}

.img-container {
    flex-shrink: 0;
}

.img-container img {
    width: 140px;
    height: 123px;
    border-radius: 12px;
    object-fit: cover;
    display: block;
}

.info-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.role-label {
    font-size: 14px;
    color: #71717A;
}

.lecturer-name {
    font-size: 18px;
    font-weight: 600;
    color: #18181B;
    margin: 0;
}

.rating-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 4px;
}

.rating-value {
    font-size: 16px;
    font-weight: 500;
    color: #525252;
}

h4 {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #141414;
    line-height: 24px;
}

.progress-section {
    display: flex;
    flex-direction: column;
    width: 336px;
    margin-top: 8px;
    gap: 4px;
}

.progress-section .progress {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: #141414;
    font-weight: 500;
}

.progress-bar-wrapper {
    display: flex;
    width: 100%;
    height: 15px;
    background: #DDDBFA;
    border-radius: 30px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    border-radius: 30px;
    background: #4F46E5;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cta-button {
    width: 90px;
    border-radius: 8px;
    border: 2px solid #958FEF;
    padding: 12px 16px;
    background-color: transparent;
    color: #958FEF;
    font-size: 16px;
    font-weight: 500;
    font-family: 'inter', sans-serif;
    cursor: pointer;
}
</style>