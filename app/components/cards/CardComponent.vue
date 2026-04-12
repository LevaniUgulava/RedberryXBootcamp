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
                    <div>
                        <svg width="44" height="18" viewBox="0 0 44 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.9022 5.5116C12.0439 5.81356 12.3268 6.02501 12.6565 6.07537L15.9462 6.57786C16.7508 6.70077 17.0794 7.68216 16.5109 8.26475L14.0682 10.7683C13.8466 10.9955 13.7459 11.3144 13.797 11.6276L14.3647 15.1085C14.4991 15.9324 13.6244 16.5486 12.8939 16.1446L10.0463 14.57C9.74524 14.4035 9.37969 14.4035 9.07858 14.5699L6.23001 16.1448C5.49945 16.5487 4.62483 15.9326 4.7592 15.1087L5.32695 11.6276C5.37803 11.3144 5.27742 10.9955 5.05583 10.7683L2.6136 8.26466C2.04529 7.68205 2.37386 6.70078 3.17842 6.57787L6.4676 6.07537C6.79726 6.025 7.08012 5.81362 7.22182 5.51174L8.65706 2.454C9.01701 1.68714 10.1078 1.68722 10.4676 2.45414L11.9022 5.5116Z"
                                fill="#F4A316" />
                            <path
                                d="M22.7656 12.5114V11.2685L27.1655 4.31818H28.1449V6.14773H27.5234L24.3764 11.1293V11.2088H30.407V12.5114H22.7656ZM27.593 14.5V12.1335L27.603 11.5668V4.31818H29.0597V14.5H27.593ZM32.756 14.5945C32.4843 14.5945 32.2506 14.4983 32.055 14.3061C31.8595 14.1106 31.7617 13.8752 31.7617 13.6001C31.7617 13.3284 31.8595 13.0964 32.055 12.9041C32.2506 12.7086 32.4843 12.6108 32.756 12.6108C33.0278 12.6108 33.2615 12.7086 33.457 12.9041C33.6526 13.0964 33.7504 13.3284 33.7504 13.6001C33.7504 13.7824 33.704 13.9498 33.6112 14.1023C33.5217 14.2514 33.4023 14.3707 33.2532 14.4602C33.104 14.5497 32.9383 14.5945 32.756 14.5945ZM38.9842 4.17898C39.4383 4.18229 39.8857 4.26515 40.3265 4.42756C40.7673 4.58996 41.1651 4.85511 41.5197 5.22301C41.8777 5.59091 42.1627 6.08807 42.3748 6.71449C42.5903 7.33759 42.6996 8.11316 42.7029 9.04119C42.7029 9.93276 42.6135 10.7266 42.4345 11.4226C42.2555 12.1153 41.9986 12.7003 41.6639 13.1776C41.3324 13.6548 40.9297 14.0178 40.4558 14.2663C39.9818 14.5149 39.4482 14.6392 38.8549 14.6392C38.2484 14.6392 37.7098 14.5199 37.2392 14.2812C36.7685 14.0426 36.3857 13.7128 36.0907 13.2919C35.7958 12.8677 35.6118 12.3804 35.5389 11.8303H37.0552C37.1547 12.2678 37.3568 12.6224 37.6618 12.8942C37.97 13.1626 38.3677 13.2969 38.8549 13.2969C39.6007 13.2969 40.1824 12.9721 40.6 12.3224C41.0176 11.6695 41.228 10.758 41.2314 9.58807H41.1518C40.9795 9.87311 40.764 10.1184 40.5055 10.3239C40.2503 10.5294 39.9636 10.6884 39.6454 10.8011C39.3272 10.9138 38.9875 10.9702 38.6262 10.9702C38.0396 10.9702 37.506 10.826 37.0254 10.5376C36.5448 10.2493 36.162 9.85322 35.877 9.34943C35.5919 8.84564 35.4494 8.2706 35.4494 7.62429C35.4494 6.9813 35.5952 6.39796 35.8869 5.87429C36.1819 5.35062 36.5929 4.93632 37.1199 4.63139C37.6502 4.32315 38.2716 4.17235 38.9842 4.17898ZM38.9892 5.47159C38.6014 5.47159 38.2517 5.56771 37.9402 5.75994C37.6319 5.94886 37.3883 6.20573 37.2093 6.53054C37.0304 6.85204 36.9409 7.20999 36.9409 7.6044C36.9409 7.99882 37.027 8.35677 37.1994 8.67827C37.3751 8.99645 37.6137 9.25 37.9153 9.43892C38.2202 9.62453 38.5682 9.71733 38.9593 9.71733C39.251 9.71733 39.5228 9.66098 39.7747 9.5483C40.0266 9.43561 40.247 9.27983 40.4359 9.08097C40.6248 8.87879 40.7723 8.65009 40.8784 8.39489C40.9844 8.13968 41.0375 7.87121 41.0375 7.58949C41.0375 7.21496 40.948 6.86695 40.769 6.54545C40.5933 6.22396 40.3514 5.96544 40.0431 5.76989C39.7349 5.57102 39.3836 5.47159 38.9892 5.47159Z"
                                fill="#525252" />
                        </svg>
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