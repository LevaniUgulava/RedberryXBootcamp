<template>
    <div class="listing-card-container">
        <div class="card-content">
            <div class="card-top">
                <div class="card-img">
                    <img :src="props.item?.image" alt="Card Image" />
                </div>
                <div class="card-title">
                    <div class="card-title-name">
                        {{ props.item?.instructor.name }} | {{ props.item?.durationWeeks }} weeks
                    </div>
                    <div v-if="props.item?.avgRating" class="rate">
                        <svg width="20" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.9022 5.5116C12.0439 5.81356 12.3268 6.02501 12.6565 6.07537L15.9462 6.57786C16.7508 6.70077 17.0794 7.68216 16.5109 8.26475L14.0682 10.7683C13.8466 10.9955 13.7459 11.3144 13.797 11.6276L14.3647 15.1085C14.4991 15.9324 13.6244 16.5486 12.8939 16.1446L10.0463 14.57C9.74524 14.4035 9.37969 14.4035 9.07858 14.5699L6.23001 16.1448C5.49945 16.5487 4.62483 15.9326 4.7592 15.1087L5.32695 11.6276C5.37803 11.3144 5.27742 10.9955 5.05583 10.7683L2.6136 8.26466C2.04529 7.68205 2.37386 6.70078 3.17842 6.57787L6.4676 6.07537C6.79726 6.025 7.08012 5.81362 7.22182 5.51174L8.65706 2.454C9.01701 1.68714 10.1078 1.68722 10.4676 2.45414L11.9022 5.5116Z"
                                fill="#F4A316" />
                        </svg>
                        <div>{{ props.item?.avgRating ? Number(props.item.avgRating).toFixed(1) : '0.0' }}</div>
                    </div>
                </div>
                <div class="card-name">
                    <h3>{{ props.item?.title }}</h3>
                </div>
                <div class="card-categories">
                    <div class="card-category">
                        <div v-if="props.item?.category.icon" style="display: flex;"
                            v-html="SvgMap[props.item.category.icon]"></div>

                        {{ props.item?.category.name }}

                    </div>
                </div>
            </div>
            <div class="cta-section">
                <div class="price">
                    <div>started from</div>
                    <h3>${{ props.item?.basePrice }}</h3>
                </div>
                <div class="button">
                    <button class="enroll-btn" @click="redirect">
                        Details
                    </button>
                </div>
            </div>

        </div>

    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        required: false
    }
})
const redirect = () => {
    window.location.href = "/courses/" + props.item?.id;
}

</script>
<style scoped>
.listing-card-container {
    width: 373px;
    border: 1px solid #F5F5F5;
    border-radius: 12px;
    padding: 20px;
    background-color: #FFFFFF;
    box-sizing: border-box;

    transition-property: background-color, border-color, box-shadow;
    transition-duration: 300ms;
    transition-timing-function: ease-out;
}

.listing-card-container:hover {
    border: 1px solid #B7B3F4;
    box-shadow: 0px 0px 15px 0px #8A82D433;

}

.listing-card-container:active,
.listing-card-container:has(.enroll-btn:active) {
    box-shadow: 0px 0px 45px 0px #8A82D426;
}

.card-title-name {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
}

.card-content {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    gap: 10px;
}

.card-content img {
    width: 100%;
    height: 181px;
    object-fit: cover;
    border-radius: 10px;
}

.card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #8A8A8A;
}

.card-name h3 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: #000000;

}

.card-categories {
    width: 100%;
}

.card-category {
    display: flex;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    border-radius: 12px;
    width: fit-content;
    padding: 8px 12px;
    gap: 6px;
    color: #525252;
    background-color: #F5F5F5;
}

.cta-section {
    display: flex;
    justify-content: space-between;
}

.cta-section>div {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #8A8A8A;
}

.cta-section h3 {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: #000000;
}

.enroll-btn {
    display: flex;
    border: none;
    border-radius: 8px;
    background-color: #4F46E5;
    padding: 17px 25px;
    color: #FFFFFF;
    font-size: 16px;
    align-items: center;
    height: 48px;
    line-height: 24px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    transition: all 300ms ease-out;
    cursor: pointer;

}

.enroll-btn:hover {
    background-color: #281ED2;
}

.enroll-btn:active {
    background-color: #1E169D;
}

.rate {
    display: flex;
}
</style>