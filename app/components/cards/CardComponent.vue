<template>
    <div class="card-container">
        <div class="card-content">
            <div class="card-img">
                <img :src="props.item.image" alt="Card Image" />
            </div>
            <div class="card-info">
                <div class="detail">
                    <div class="name">
                        {{ props.item.instructor.name }}
                    </div>
                    <div class="rate">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.9022 5.5116C12.0439 5.81356 12.3268 6.02501 12.6565 6.07537L15.9462 6.57786C16.7508 6.70077 17.0794 7.68216 16.5109 8.26475L14.0682 10.7683C13.8466 10.9955 13.7459 11.3144 13.797 11.6276L14.3647 15.1085C14.4991 15.9324 13.6244 16.5486 12.8939 16.1446L10.0463 14.57C9.74524 14.4035 9.37969 14.4035 9.07858 14.5699L6.23001 16.1448C5.49945 16.5487 4.62483 15.9326 4.7592 15.1087L5.32695 11.6276C5.37803 11.3144 5.27742 10.9955 5.05583 10.7683L2.6136 8.26466C2.04529 7.68205 2.37386 6.70078 3.17842 6.57787L6.4676 6.07537C6.79726 6.025 7.08012 5.81362 7.22182 5.51174L8.65706 2.454C9.01701 1.68714 10.1078 1.68722 10.4676 2.45414L11.9022 5.5116Z"
                                fill="#F4A316" />

                        </svg>
                        {{ props.item.avgRating }}
                    </div>
                </div>
                <div>
                    <h3> {{ props.item.title }}
                    </h3>
                </div>
                <div class="card-desc">
                    {{ props.item.description }}
                </div>

            </div>
        </div>
        <div class="card-detail">
            <div class="price">
                starting from
                <h2>${{ props.item.basePrice }}</h2>
            </div>
            <div class="button">
                <button @click="redirect" class="cta-button">Details</button>
            </div>
        </div>



    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    item: any
}>();

const redirect = () => {
    window.location.href = "/course/" + props.item.id;
}
</script>
<style scoped>
.rate{
    display: flex;
    gap: 4px;
    color: #525252;
    font-size: 14px;
    font-weight: 500;
    align-items: center;
}
.card-container {
    display: flex;
    flex-direction: column;
    width: 506px;
    box-sizing: border-box;
    border: 1px solid #F5F5F5;
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 12px;
    transition: all 300ms ease-out;

}

.card-container:active,
.card-container:has(.cta-button:active) {
    border: 1px solid #958FEF;
    box-shadow: 0px 0px 35px 0px #8A82D440;
}

.card-container:hover {
    border: 1px solid #B7B3F4;
    box-shadow: 0px 0px 25px 0px #8A82D41A;

}

.card-content {
    display: flex;
    flex-direction: column;
    width: 466px;
    gap: 10px;

}

.card-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 466px;
    height: 262px;
    background-color: #f5f5f5;
    border-radius: 10px;
    overflow: hidden;
}

.card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    opacity: 1;
}

.card-info .detail {
    display: flex;
    justify-content: space-between;
}

.detail .name {
    font-family: 'inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #525252;
}

.detail h3 {
    font-family: 'inter', sans-serif;
    font-size: 24px;
    font-style: semi-bold;
    font-weight: 600;
    color: #141414;
}

.card-desc {
    width: 412px;
    font-family: 'inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    font-style: Medium;
    color: #666666;
}

.card-detail {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    width: 466px;

}

.card-detail .price {
    display: flex;
    align-items: center;
    color: #8A8A8A;
    gap: 8px;


}

.card-detail h2 {
    font-family: 'inter', sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #141414;
    align-items: right;
}

.button {
    display: flex;
    align-items: center;
}

.cta-button {
    border-radius: 8px;
    padding: 17px 25px;
    background-color: #4F46E5;
    border: none;
    font-size: 20px;
    font-family: 'inter', sans-serif;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    font-style: Medium;
    color: #FFFFFF;
    cursor: pointer;
    transition: all 300ms ease-out;

}


.cta-button:hover {
    background-color: #281ED2;
}

.cta-button:active {
    background-color: #1E169D;
}
</style>