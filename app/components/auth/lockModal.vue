<template>
    <div class="lock-container">
        <div class="lock-content">
            <div class="title-group">
                <svg class="icon" width="74" height="77" viewBox="0 0 74 77" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="74" height="77" rx="37" fill="#DDDBFA" />
                    <path
                        d="M47.8889 37H26.1111C24.3929 37 23 38.4652 23 40.2727V51.7273C23 53.5347 24.3929 55 26.1111 55H47.8889C49.6071 55 51 53.5347 51 51.7273V40.2727C51 38.4652 49.6071 37 47.8889 37Z"
                        stroke="#4F46E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M29 37V30.3333C29 28.1232 29.8429 26.0036 31.3431 24.4408C32.8434 22.878 34.8783 22 37 22C39.1217 22 41.1566 22.878 42.6569 24.4408C44.1571 26.0036 45 28.1232 45 30.3333V37"
                        stroke="#4F46E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <circle cx="37" cy="45" r="2" fill="#4F46E5" />
                </svg>
                <p class="lock-text">Sign in to track your learning progress</p>
            </div>
            <div class="button-wrapper">
                <button class="cta-button">Log In</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.lock-container {
    width: 418px;
    height: 233px;
    border-radius: 12px;
    border: 1px solid #ADADAD;
    background-color: #ffffff;
    padding: 32px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}

.lock-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}

.title-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.lock-text {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #1F2937;
    text-align: center;
}

.button-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
}

p {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #0A0836;
    font-weight: 500;
    text-align: center;
}

.cta-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 83px;
    height: 42px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #4F46E5;
    color: #ffffff;
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.2s ease;
}

.cta-button:hover {
    background-color: #281ED2;
}

.cta-button:active {
    background-color: #1E169D;
}
</style>