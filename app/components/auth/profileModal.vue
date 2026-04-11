<template>
    <Teleport to="body">
        <div class="profile-overlay">
            <div class="profile-content">
                <div class="close-btn" @click="closeModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.3 5.71022C18.2075 5.61752 18.0976 5.54397 17.9766 5.49379C17.8556 5.44361 17.7259 5.41778 17.595 5.41778C17.464 5.41778 17.3343 5.44361 17.2134 5.49379C17.0924 5.54397 16.9825 5.61752 16.89 5.71022L12 10.5902L7.10998 5.70022C7.0174 5.60764 6.90749 5.5342 6.78652 5.4841C6.66556 5.43399 6.53591 5.4082 6.40498 5.4082C6.27405 5.4082 6.1444 5.43399 6.02344 5.4841C5.90247 5.5342 5.79256 5.60764 5.69998 5.70022C5.6074 5.79281 5.53396 5.90272 5.48385 6.02368C5.43375 6.14464 5.40796 6.27429 5.40796 6.40522C5.40796 6.53615 5.43375 6.6658 5.48385 6.78677C5.53396 6.90773 5.6074 7.01764 5.69998 7.11022L10.59 12.0002L5.69998 16.8902C5.6074 16.9828 5.53396 17.0927 5.48385 17.2137C5.43375 17.3346 5.40796 17.4643 5.40796 17.5952C5.40796 17.7262 5.43375 17.8558 5.48385 17.9768C5.53396 18.0977 5.6074 18.2076 5.69998 18.3002C5.79256 18.3928 5.90247 18.4662 6.02344 18.5163C6.1444 18.5665 6.27405 18.5922 6.40498 18.5922C6.53591 18.5922 6.66556 18.5665 6.78652 18.5163C6.90749 18.4662 7.0174 18.3928 7.10998 18.3002L12 13.4102L16.89 18.3002C16.9826 18.3928 17.0925 18.4662 17.2134 18.5163C17.3344 18.5665 17.464 18.5922 17.595 18.5922C17.7259 18.5922 17.8556 18.5665 17.9765 18.5163C18.0975 18.4662 18.2074 18.3928 18.3 18.3002C18.3926 18.2076 18.466 18.0977 18.5161 17.9768C18.5662 17.8558 18.592 17.7262 18.592 17.5952C18.592 17.4643 18.5662 17.3346 18.5161 17.2137C18.466 17.0927 18.3926 16.9828 18.3 16.8902L13.41 12.0002L18.3 7.11022C18.68 6.73022 18.68 6.09022 18.3 5.71022Z"
                            fill="#ADADAD" />
                    </svg>
                </div>
                <header>
                    <h2>Profile</h2>
                    <div class="profile">
                        <div class="avatar-wrapper">
                            <img :src="authStore.user?.avatar || '/default-avatar.png'" alt="Avatar" class="avatar-img">

                            <svg class="status-icon" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="8"
                                    :fill="authStore.user.profileComplete ? '#1DC31D' : '#F4A316'" stroke="white"
                                    stroke-width="2" />
                            </svg>
                        </div>

                        <div class="detail">
                            <h4>{{ authStore.user?.username }}</h4>
                            <span class="status complete" v-if="authStore.user.profileComplete">Profile is
                                Complete</span>
                            <span class="status incomplete" v-else>Profile is Incomplete</span>
                        </div>

                    </div>
                </header>
                <div class="forms">
                    <div class="input-step">
                        <div class="form">
                            <span :class="{ 'error-span': errors.full_name }">Full Name</span>
                            <div class="input-wrapper">
                                <input :class="{ 'error-input': errors.full_name }" v-model="form.full_name"
                                    placeholder="Username">
                                <div class="input-icon">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.4898 5.99608L16.0169 8.52362M16.4388 5.56965C16.6051 5.73583 16.7371 5.93317 16.8272 6.1504C16.9172 6.36763 16.9635 6.60048 16.9635 6.83564C16.9635 7.07079 16.9172 7.30365 16.8272 7.52087C16.7371 7.7381 16.6051 7.93545 16.4388 8.10163L8.42225 16.1196L5.04688 16.9635L5.89072 13.6348L13.9106 5.57303C14.2267 5.25532 14.6507 5.06812 15.0984 5.04857C15.5461 5.02903 15.9848 5.17858 16.3274 5.46753L16.4388 5.56965Z"
                                            stroke="#ADADAD" stroke-width="0.8" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </div>
                            <span class="error-message" v-show="errors.full_name">{{ errors.full_name?.[0] }}</span>

                        </div>
                        <div class="form">
                            <span>Email</span>
                            <div class="input-wrapper">
                                <input readonly v-model="form.email" placeholder="Email@gmail.com">
                                <div class="input-icon">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.0976 8.066L9.05794 15.3988C9.01707 15.4414 8.96855 15.4752 8.91514 15.4983C8.86172 15.5213 8.80447 15.5332 8.74665 15.5332C8.68883 15.5332 8.63158 15.5213 8.57816 15.4983C8.52475 15.4752 8.47623 15.4414 8.43536 15.3988L5.3555 12.1907C5.27294 12.1047 5.22656 11.9881 5.22656 11.8664C5.22656 11.7448 5.27294 11.6282 5.3555 11.5422C5.43806 11.4562 5.55003 11.4079 5.66679 11.4079C5.78354 11.4079 5.89552 11.4562 5.97807 11.5422L8.74665 14.4266L15.4751 7.41751C15.5576 7.33151 15.6696 7.2832 15.7863 7.2832C15.9031 7.2832 16.0151 7.33151 16.0976 7.41751C16.1802 7.50351 16.2266 7.62014 16.2266 7.74176C16.2266 7.86337 16.1802 7.98001 16.0976 8.066Z"
                                            fill="#ADADAD" />
                                    </svg>

                                </div>
                            </div>

                        </div>
                        <div class="form two">
                            <div class="child-one">
                                <span :class="{ 'error-input': errors.mobile_number }">Mobile Number</span>
                                <div class="input-wrapper">
                                    <div class="prefix">
                                        +995
                                    </div>
                                    <input :class="{ 'error-input': errors.mobile_number }" v-model="form.mobile_number"
                                        style="padding-left: 45px;" placeholder="">
                                    <div v-if="isMobileValid" class="input-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.0976 8.066L9.05794 15.3988C9.01707 15.4414 8.96855 15.4752 8.91514 15.4983C8.86172 15.5213 8.80447 15.5332 8.74665 15.5332C8.68883 15.5332 8.63158 15.5213 8.57816 15.4983C8.52475 15.4752 8.47623 15.4414 8.43536 15.3988L5.3555 12.1907C5.27294 12.1047 5.22656 11.9881 5.22656 11.8664C5.22656 11.7448 5.27294 11.6282 5.3555 11.5422C5.43806 11.4562 5.55003 11.4079 5.66679 11.4079C5.78354 11.4079 5.89552 11.4562 5.97807 11.5422L8.74665 14.4266L15.4751 7.41751C15.5576 7.33151 15.6696 7.2832 15.7863 7.2832C15.9031 7.2832 16.0151 7.33151 16.0976 7.41751C16.1802 7.50351 16.2266 7.62014 16.2266 7.74176C16.2266 7.86337 16.1802 7.98001 16.0976 8.066Z"
                                                fill="#ADADAD" />
                                        </svg>

                                    </div>
                                </div>
                                <span class="error-message" v-if="errors.mobile_number">{{ errors.mobile_number?.[0]
                                    }}</span>


                            </div>

                            <div class="child-two">
                                <span :class="{ 'error-input': errors.age }">Age</span>
                                <div class="input-wrapper">
                                    <input :class="{ 'error-input': errors.age }" v-model="form.age" type="number"
                                        placeholder="Age">
                                    <div v-if="isValidAge" class="input-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.0976 8.066L9.05794 15.3988C9.01707 15.4414 8.96855 15.4752 8.91514 15.4983C8.86172 15.5213 8.80447 15.5332 8.74665 15.5332C8.68883 15.5332 8.63158 15.5213 8.57816 15.4983C8.52475 15.4752 8.47623 15.4414 8.43536 15.3988L5.3555 12.1907C5.27294 12.1047 5.22656 11.9881 5.22656 11.8664C5.22656 11.7448 5.27294 11.6282 5.3555 11.5422C5.43806 11.4562 5.55003 11.4079 5.66679 11.4079C5.78354 11.4079 5.89552 11.4562 5.97807 11.5422L8.74665 14.4266L15.4751 7.41751C15.5576 7.33151 15.6696 7.2832 15.7863 7.2832C15.9031 7.2832 16.0151 7.33151 16.0976 7.41751C16.1802 7.50351 16.2266 7.62014 16.2266 7.74176C16.2266 7.86337 16.1802 7.98001 16.0976 8.066Z"
                                                fill="#ADADAD" />
                                        </svg>

                                    </div>
                                </div>
                                <span class="error-message" v-show="errors.age">{{ errors.age?.[0] }}</span>
                            </div>
                        </div>
                        <div class="form">
                            <span>Upload Avatar</span>
                            <input type="file" ref="fileInput" style="display: none"
                                accept="image/jpeg, image/png, image/webp" @change="handleFileChange" />
                            <div class="upload-ref" :class="{ 'active-img': imageUrl }" @click="triggerFileInput">
                                <div v-if="imageUrl" class="preview-container">
                                    <img :src="imageUrl" alt="Preview" class="preview-img" />
                                    <div class="detail" @click.stop>
                                        <span class="file-name">{{ fileName }}</span>
                                        <span class="file-size">size - {{ fileSize }}</span>

                                        <span @click.stop="triggerFileInput" class="file-change">
                                            Change
                                        </span>
                                    </div>
                                </div>
                                <template v-else>
                                    <div class="icon">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M29.75 21.25V26.9167C29.75 27.6681 29.4515 28.3888 28.9201 28.9201C28.3888 29.4515 27.6681 29.75 26.9167 29.75H7.08333C6.33189 29.75 5.61122 29.4515 5.07986 28.9201C4.54851 28.3888 4.25 27.6681 4.25 26.9167V21.25"
                                                stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M24.0837 11.3333L17.0003 4.25L9.91699 11.3333" stroke="#ADADAD"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17 4.25V21.25" stroke="#ADADAD" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <span class="link">Drag and drop or <span> Upload file</span></span>
                                    <span class="format">JPG, PNG or WebP</span>
                                </template>
                            </div>
                        </div>
                        <button @click="updateProfile" class="next-button">
                            <div v-if="loading" class="spinner"></div>

                            <span v-else>
                                Update Profile
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const { status } = await useAsyncData('me', () => authStore.me());

const loading = ref(false);

const selectedFile = ref<File | null>(null);
const imageUrl = ref<string | null>(null);
const fileName = ref('');
const fileSize = ref('');
const fileInput = ref<HTMLInputElement | null>(null);

const triggerFileInput = () => {
    if (fileInput.value) {
        fileInput.value.value = '';
        fileInput.value.click();
    }
};

const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files[0]) {
        selectedFile.value = target.files[0];

        fileName.value = target.files[0].name;
        imageUrl.value = URL.createObjectURL(target.files[0]);
        const sizeInMB = (target.files[0].size / (1024 * 1024)).toFixed(2);
        fileSize.value = `${sizeInMB} MB`;
    }
};

const form = reactive({
    full_name: authStore.user?.fullName || '',
    email: authStore.user?.email || '',
    mobile_number: authStore.user?.mobileNumber || '',
    age: authStore.user?.age || null,
    profileComplete: authStore.user?.profileComplete || false,
});
const rawMobileNumber = computed(() => {
    return form.mobile_number.replace(/\D/g, '');
});
const isMobileValid = computed(() => {
    const num = rawMobileNumber.value;
    return /^5\d{8}$/.test(num);
});
const ageError = computed(() => {
    const age = form.age;

    if (age === null || age === '') return "Age is required";

    const ageNum = Number(age);
    if (isNaN(ageNum)) return "Age must be a number";
    if (ageNum < 16) return "You must be at least 16 years old to enroll";
    if (ageNum > 120) return "Please enter a valid age";

    return null;
});
const isValidAge = computed(() => ageError.value === null);

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
}
const errors = ref<Record<string, string[]>>({});

const updateProfile = async () => {
    errors.value = {};

    if (!form.full_name || !form.mobile_number || !form.age) {
        errors.value = {
            isMobileValid: !isMobileValid.value ? ['Please enter a valid Georgian number (e.g., 555 123 456)'] : [],
            full_name: !form.full_name ? ['Full Name is required'] : [],
            age: !isValidAge.value ? [ageError.value || 'Age is invalid'] : [],
        };
        return;
    }
    loading.value = true;
    try {
        const formData = new FormData();
        formData.append('full_name', form.full_name);
        formData.append('mobile_number', rawMobileNumber.value);
        formData.append('age', String(form.age));
        if (selectedFile.value) {
            formData.append('avatar', selectedFile.value);
        }

        await authStore.updateProfile(formData);
        closeModal();

    } catch (error: any) {
        const data = error.data;
        if (data && data.errors) {
            errors.value = data.errors;
        } else {
            console.error('An unexpected error occurred:', error);
        }
    } finally {
        loading.value = false;
    }
}
</script>
<style scoped>
.error-span {
    color: #F4161A;
}

.error-message {
    color: #F4161A;
    font-size: 10px !important;
}

.error-input {
    color: #F4161A;
    border-color: #F4161A;
}

.error-input::placeholder {
    color: #F4161A;
    opacity: 1;
}

.profile-overlay {
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

.close-btn {
    position: absolute;
    top: 25px;
    right: 25px;
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1;
    transition: color 0.2s;

}

.profile-content {
    max-width: 460px;
    max-height: fit-content;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 50px;
    border-radius: 12px;
    background-color: #FFFFFF;
}

header {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

.profile {
    display: flex;
    align-items: center;
    gap: 10px;
}

.avatar-wrapper {
    position: relative;
    width: 56px;
    height: 56px;
    display: inline-block;
}

.avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.status-icon {
    position: absolute;
    bottom: -2px;
    right: -2px;
}

h2 {
    display: flex;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-weight: 600;
    margin: 10px;
}

.detail h4 {
    margin: 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
}

.detail span {
    font-weight: 400;
    font-size: 10px;

}

input {
    display: flex;
    font-family: 'inter', sans-serif;
    font-weight: 500;
    height: 48px;
    width: 100%;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1.5px solid #D1D1D1;
    padding: 12px 40px 12px 12px;
    font-size: 14px;

}

.input-step {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.input-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
}

.prefix {
    position: absolute;
    left: 12px;
    color: #D1D1D1;
    font-size: 14px;
}

.input-icon {
    position: absolute;
    right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}


.two {
    display: flex;
    flex-direction: row;
}

.child-one {
    display: flex;
    flex-direction: column;
    flex: 3;
    gap: 10px;

}

.child-two {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;

}

.form span {
    font-size: 14px;
    font-weight: 500;
}

.upload-ref {
    height: 142px;

    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    gap: 12px;
    width: 100%;
    border: 1.5px solid #D1D1D1;
    border-radius: 12px;
    padding: 40px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: #F9FAFB;
}

.upload-ref:hover {
    border-color: #4F46E5;
    background-color: #F5F3FF;
}

.upload-ref .icon {
    margin-bottom: 4px;
}

.link {
    color: #666;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
}

.link span {
    color: #281ED2;
    font-size: 14px;
    text-decoration: underline;
    margin-left: 4px;
}

.upload-ref .format {
    color: #ADADAD;
    font-size: 12px;
}

.next-button {
    font-family: 'inter', sans-serif;
    font-weight: 500;
    width: 100%;
    height: 47px;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #4F46E5;
    color: #FFFFFF;
    border: none;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.next-button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
}

.spinner {
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.status {
    font-size: 10px;
    font-weight: 400;
}

.status.complete {
    color: #1DC31D;
}

.status.incomplete {
    color: #F4A316;
}

.preview-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.active-img {
    background-color: #EEEDFC !important;
}

.preview-img {
    max-width: 54px;
    max-height: 54px;
    border-radius: 40px;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.file-name {
    font-size: 12px;
    font-weight: 400;
    color: #525252;
}

.file-size {
    font-size: 10px;
    font-weight: 400;
    color: #ADADAD;
}

.file-change {
    font-size: 10px;
    font-weight: 500;
    color: #4F46E5;
    text-decoration: underline;
}

.detail {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
</style>