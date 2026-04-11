<template>
    <Teleport to="body">
        <div class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <div @click="closeModal" class="close-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.3 5.71022C18.2075 5.61752 18.0976 5.54397 17.9766 5.49379C17.8556 5.44361 17.7259 5.41778 17.595 5.41778C17.464 5.41778 17.3343 5.44361 17.2134 5.49379C17.0924 5.54397 16.9825 5.61752 16.89 5.71022L12 10.5902L7.10998 5.70022C7.0174 5.60764 6.90749 5.5342 6.78652 5.4841C6.66556 5.43399 6.53591 5.4082 6.40498 5.4082C6.27405 5.4082 6.1444 5.43399 6.02344 5.4841C5.90247 5.5342 5.79256 5.60764 5.69998 5.70022C5.6074 5.79281 5.53396 5.90272 5.48385 6.02368C5.43375 6.14464 5.40796 6.27429 5.40796 6.40522C5.40796 6.53615 5.43375 6.6658 5.48385 6.78677C5.53396 6.90773 5.6074 7.01764 5.69998 7.11022L10.59 12.0002L5.69998 16.8902C5.6074 16.9828 5.53396 17.0927 5.48385 17.2137C5.43375 17.3346 5.40796 17.4643 5.40796 17.5952C5.40796 17.7262 5.43375 17.8558 5.48385 17.9768C5.53396 18.0977 5.6074 18.2076 5.69998 18.3002C5.79256 18.3928 5.90247 18.4662 6.02344 18.5163C6.1444 18.5665 6.27405 18.5922 6.40498 18.5922C6.53591 18.5922 6.66556 18.5665 6.78652 18.5163C6.90749 18.4662 7.0174 18.3928 7.10998 18.3002L12 13.4102L16.89 18.3002C16.9826 18.3928 17.0925 18.4662 17.2134 18.5163C17.3344 18.5665 17.464 18.5922 17.595 18.5922C17.7259 18.5922 17.8556 18.5665 17.9765 18.5163C18.0975 18.4662 18.2074 18.3928 18.3 18.3002C18.3926 18.2076 18.466 18.0977 18.5161 17.9768C18.5662 17.8558 18.592 17.7262 18.592 17.5952C18.592 17.4643 18.5662 17.3346 18.5161 17.2137C18.466 17.0927 18.3926 16.9828 18.3 16.8902L13.41 12.0002L18.3 7.11022C18.68 6.73022 18.68 6.09022 18.3 5.71022Z"
                            fill="#8A8A8A" />
                    </svg>

                </div>
                <div @click="backStep" v-if="current_step != 1" class="back-step">
                    <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.7307 8.77332L11.316 7.35999L3.61068 15.0627C3.48648 15.1861 3.38791 15.3328 3.32064 15.4945C3.25338 15.6562 3.21875 15.8296 3.21875 16.0047C3.21875 16.1798 3.25338 16.3531 3.32064 16.5148C3.38791 16.6765 3.48648 16.8232 3.61068 16.9467L11.316 24.6533L12.7294 23.24L5.49735 16.0067L12.7307 8.77332Z"
                            fill="#8A8A8A" />
                    </svg>
                </div>


                <div class="forms">
                    <header class="modal-header">
                        <h2>{{ ui.title }}</h2>
                        <span>{{ ui.titlespanelement }}</span>
                    </header>
                    <div v-if="ui.steps" class="steps">
                        <div v-for="n in 3" :key="n" class="step-wrapper">
                            <div class="step" :class="{
                                'complete_step': complete_steps.includes(n),
                                'current_step': current_step === n
                            }"></div>
                        </div>
                    </div>
                    <div v-if="ui.isLogin" class="input">
                        <div class="input-step">
                            <div class="form">
                                <span :class="{ 'error-input': errors.email }">Email*</span>
                                <input :class="{ 'error-input': errors.email }" v-model="form.email"
                                    placeholder="you@example.com">
                                <span v-if="errors.email" class="error-message">{{ errors.email[0] }}</span>
                            </div>
                            <div class="form">
                                <span :class="{ 'error-input': errors.password }">Password*</span>
                                <div class="input-wrap">
                                    <input :class="{ 'error-input': errors.password }"
                                        :type="showPassword ? 'text' : 'password'" v-model="form.password"
                                        placeholder="Password">
                                    <div class="icon-container" :class="{ 'icon-error': errors.password }"
                                        @click="showPassword = !showPassword">
                                        <svg class="icon" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.05938 11.348C0.980208 11.1235 0.980208 10.8765 1.05938 10.652C1.83045 8.68365 3.13931 7.00069 4.82002 5.81644C6.50073 4.6322 8.47759 4 10.5 4C12.5224 4 14.4993 4.6322 16.18 5.81644C17.8607 7.00069 19.1695 8.68365 19.9406 10.652C20.0198 10.8765 20.0198 11.1235 19.9406 11.348C19.1695 13.3163 17.8607 14.9993 16.18 16.1836C14.4993 17.3678 12.5224 18 10.5 18C8.47759 18 6.50073 17.3678 4.82002 16.1836C3.13931 14.9993 1.83045 13.3163 1.05938 11.348Z"
                                                stroke="currentColor" stroke-width="1.3" stroke-linecap="round"
                                                stroke-linejoin="round" />

                                            <path
                                                d="M10.5001 14.0005C12.0741 14.0005 13.35 12.6573 13.35 11.0003C13.35 9.34326 12.0741 8 10.5001 8C8.92619 8 7.65027 9.34326 7.65027 11.0003C7.65027 12.6573 8.92619 14.0005 10.5001 14.0005Z"
                                                stroke="currentColor" stroke-width="1.3" stroke-linecap="round"
                                                stroke-linejoin="round" />

                                            <line v-if="!showPassword" x1="3" y1="3" x2="19" y2="19"
                                                stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
                                        </svg>
                                    </div>

                                </div>


                                <span v-if="errors.password" class="error-message">{{ errors.password[0] }}</span>
                            </div>
                        </div>
                        <button @click="handleLogin" :disabled="loading" class="next-button">
                            <div v-if="loading" class="spinner"></div>

                            <span v-else>
                                Log In
                            </span>
                        </button>
                    </div>
                    <div v-else class="input">
                        <div class="input-step" v-if="current_step == 1">
                            <div class="form">
                                <span :class="{ 'error-input': errors.email }">Email*</span>
                                <input :class="{ 'error-input': errors.email }" v-model="form.email"
                                    placeholder="you@example.com">
                                <span v-if="errors.email" class="error-message">{{ errors.email[0] }}</span>
                            </div>
                        </div>
                        <div class="input-step" v-if="current_step == 2">
                            <div class="form">
                                <span :class="{ 'error-input': errors.password }">Password*</span>
                                <div class="input-wrap">
                                    <input :class="{ 'error-input': errors.password }"
                                        :type="showPassword ? 'text' : 'password'" v-model="form.password"
                                        placeholder="Password">
                                    <div class="icon-container" :class="{ 'icon-error': errors.password }"
                                        @click="showPassword = !showPassword">
                                        <svg class="icon" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.05938 11.348C0.980208 11.1235 0.980208 10.8765 1.05938 10.652C1.83045 8.68365 3.13931 7.00069 4.82002 5.81644C6.50073 4.6322 8.47759 4 10.5 4C12.5224 4 14.4993 4.6322 16.18 5.81644C17.8607 7.00069 19.1695 8.68365 19.9406 10.652C20.0198 10.8765 20.0198 11.1235 19.9406 11.348C19.1695 13.3163 17.8607 14.9993 16.18 16.1836C14.4993 17.3678 12.5224 18 10.5 18C8.47759 18 6.50073 17.3678 4.82002 16.1836C3.13931 14.9993 1.83045 13.3163 1.05938 11.348Z"
                                                stroke="currentColor" stroke-width="1.3" stroke-linecap="round"
                                                stroke-linejoin="round" />

                                            <path
                                                d="M10.5001 14.0005C12.0741 14.0005 13.35 12.6573 13.35 11.0003C13.35 9.34326 12.0741 8 10.5001 8C8.92619 8 7.65027 9.34326 7.65027 11.0003C7.65027 12.6573 8.92619 14.0005 10.5001 14.0005Z"
                                                stroke="currentColor" stroke-width="1.3" stroke-linecap="round"
                                                stroke-linejoin="round" />

                                            <line v-if="!showPassword" x1="3" y1="3" x2="19" y2="19"
                                                stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                </div>
                                <span v-if="errors.password" class="error-message">{{ errors.password[0] }}</span>
                            </div>
                            <div class="form">
                                <span :class="{ 'error-input': errors.password_confirmation }">Confirm
                                    Password*</span>
                                <div class="input-wrap">
                                    <input :class="{ 'error-input': errors.password_confirmation }"
                                        :type="showPassword_confirmation ? 'text' : 'password'" v-model="form.password_confirmation"
                                        placeholder="Confirm Password">
                                    <div class="icon-container" :class="{ 'icon-error': errors.password_confirmation }"
                                        @click="showPassword_confirmation = !showPassword_confirmation">
                                        <svg class="icon" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.05938 11.348C0.980208 11.1235 0.980208 10.8765 1.05938 10.652C1.83045 8.68365 3.13931 7.00069 4.82002 5.81644C6.50073 4.6322 8.47759 4 10.5 4C12.5224 4 14.4993 4.6322 16.18 5.81644C17.8607 7.00069 19.1695 8.68365 19.9406 10.652C20.0198 10.8765 20.0198 11.1235 19.9406 11.348C19.1695 13.3163 17.8607 14.9993 16.18 16.1836C14.4993 17.3678 12.5224 18 10.5 18C8.47759 18 6.50073 17.3678 4.82002 16.1836C3.13931 14.9993 1.83045 13.3163 1.05938 11.348Z"
                                                stroke="currentColor" stroke-width="1.3" stroke-linecap="round"
                                                stroke-linejoin="round" />

                                            <path
                                                d="M10.5001 14.0005C12.0741 14.0005 13.35 12.6573 13.35 11.0003C13.35 9.34326 12.0741 8 10.5001 8C8.92619 8 7.65027 9.34326 7.65027 11.0003C7.65027 12.6573 8.92619 14.0005 10.5001 14.0005Z"
                                                stroke="currentColor" stroke-width="1.3" stroke-linecap="round"
                                                stroke-linejoin="round" />

                                            <line v-if="!showPassword_confirmation" x1="3" y1="3" x2="19" y2="19"
                                                stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                </div>
                                <span v-if="errors.password_confirmation" class="error-message">{{
                                    errors.password_confirmation[0] }}</span>
                            </div>

                        </div>
                        <div class="input-step" v-if="current_step == 3">
                            <div class="form">
                                <span :class="{ 'error-input': errors.username }">Username*</span>
                                <input :class="{ 'error-input': errors.username }" v-model="form.username"
                                    placeholder="Username">
                                <span v-if="errors.username" class="error-message">{{ errors.username[0] }}</span>
                            </div>
                            <div class="form">
                                <span>Upload Avatar</span>
                                <div class="upload-ref" :class="{ 'active-img': imageUrl }" @click="triggerFileInput">
                                    <div v-if="imageUrl" class="preview-container">
                                        <img :src="imageUrl" alt="Preview" class="preview-img" />
                                        <div class="detail">
                                            <span class="file-name">{{ fileName }}</span>
                                            <span class="file-size">size - {{ fileSize }}</span>
                                            <span class="file-change">Change</span>

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
                                            <input type="file" ref="fileInput" style="display: none"
                                                accept="image/jpeg, image/png, image/webp" @change="handleFileChange" />
                                        </div>
                                        <span class="link">Drag and drop or <span> Upload file</span></span>
                                        <span class="format">JPG, PNG or WebP</span>
                                    </template>
                                </div>
                            </div>
                        </div>


                        <button @click="current_step === 3 ? handleSignUp() : next()" :disabled="loading"
                            class="next-button">
                            <div v-if="loading" class="spinner"></div>

                            <span v-else>
                                {{ current_step === 3 ? "Sign Up" : "Next" }}
                            </span>
                        </button>
                    </div>

                </div>
                <div class="seperator">
                    <div class="line"></div>
                    <span>or</span>
                    <div class="line"></div>
                </div>
                <div class="login">
                    <span class="message">{{ ui.footer }}</span>
                    <span @click="changeType" class="redirect">{{ ui.link }}</span>
                </div>

                <div class="modal-body">
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const current_step = ref(1);
const loading = ref(false);
const complete_steps = ref<number[]>([]);
const authStore = useAuthStore();
const showPassword = ref(false);
const showPassword_confirmation = ref(false);
const props = defineProps<{
    modal: {
        isOpen: boolean;
        type: 'login' | 'register' | null;
    }
}>();
function changeType(){
    if(props.modal.type === "login"){
        props.modal.type = "register";
    } else {
        props.modal.type = "login";
    }
}

const ui = computed(() => {
    const isLogin = props.modal.type === 'login';

    return {
        isLogin,
        title: isLogin ? 'Welcome Back' : 'Create Account',
        titlespanelement: isLogin ? 'Log in to continue your learning' : 'Join and start learning today',
        steps: isLogin ? false : true,
        footer: isLogin ? "Don't have an account?" : "Already have an account?",
        link: isLogin ? 'Sign Up' : 'Log In'
    };
});
const errors = ref<Record<string, string[]>>({});
const form = reactive({
    email: '',
    password: '',
    password_confirmation: '',
    username: '',
    avatar: null as File | null
});

const next = () => {
    errors.value = {};

    if (current_step.value === 1 && !form.email) {
        errors.value.email = ['Email is required'];
    } else if (current_step.value === 2 && (!form.password || form.password !== form.password_confirmation)) {
        if (!form.password) errors.value.password = ['Password is required'];
        else if (form.password !== form.password_confirmation) {
            errors.value.password = ['Passwords do not match'];
        } else if (!form.password_confirmation) errors.value.password_confirmation = ['Password confirmation is required'];
    }

    if (Object.keys(errors.value).length > 0) return;

    if (current_step.value < 3) {
        if (!complete_steps.value.includes(current_step.value)) {
            complete_steps.value.push(current_step.value);
        }
        current_step.value++;
    } else if (current_step.value === 3) {
        if (!complete_steps.value.includes(3)) {
            complete_steps.value.push(3);
        }
    }
}
const handleLogin = async () => {
    errors.value = {};
    if (!form.email) errors.value.email = ['Email is required'];
    if (!form.password) errors.value.password = ['Password is required'];
    if (Object.keys(errors.value).length > 0) return;

    loading.value = true;
    try {
        await authStore.login({
            email: form.email,
            password: form.password
        });

        closeModal();
    } catch (error: any) {
        const data = error.data;

        if (data && data.errors) {
            errors.value = data.errors;
        } else if (data && data.message) {
            errors.value = {
                email: [data.message],
                password: [data.message]
            };
        } else {
            errors.value = { email: ["Something went wrong. Please try again."] };
        }
    } finally {
        loading.value = false;
    }
}
const handleSignUp = async () => {
    if (!form.email || !form.password || !form.password_confirmation || !form.username) return;
    loading.value = true;
    try {
        await authStore.register({
            email: form.email,
            password: form.password,
            password_confirmation: form.password_confirmation,
            username: form.username,
            avatar: form.avatar
        });
    } catch (error) {
        console.error("რეგისტრაციის შეცდომა:", error);
    } finally {
        loading.value = false;
    }

}
const backStep = () => {
    complete_steps.value.pop();
    current_step.value--
}
const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
}
const selectedFile = ref<File | null>(null);
const imageUrl = ref<string | null>(null);
const fileName = ref('');
const fileSize = ref('');
const fileInput = ref<HTMLInputElement | null>(null);

const triggerFileInput = () => {
    fileInput.value?.click();
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

</script>

<style scoped>
.input-wrap {
    position: relative;
    width: 100%;
}

.icon-container {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.icon-container {
    color: #8A8A8A;
    transition: color 0.2s ease;
}

.icon-error {
    color: #F4161A !important;
}

.input-wrap .error-input {
    border-color: #F4161A;
}

.icon-container svg path {
    transition: stroke 0.2s ease;
}

.icon-container:hover svg path {
    stroke: #333;
}

.error-span {
    color: #F4161A;
}

.error-input {
    color: #F4161A;
    border-color: #F4161A;
}

.error-input::placeholder {
    color: #F4161A;
    opacity: 1;
}

.error-message {
    font-size: 12px;
    font-weight: 400;
    color: #F4161A;
}

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

.modal-content {
    background: #FFFFFF;
    width: 100%;
    max-width: 460px;
    padding: 50px;
    border-radius: 12px;

    position: relative;
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

.back-step {
    position: absolute;
    top: 25px;
    left: 25px;
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1;
    transition: color 0.2s;
}

.modal-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    gap: 10px;
}


.modal-header h2 {
    display: flex;
    justify-content: center;
    font-family: 'inter', sans-serif;
    font-size: 32px;
    font-weight: 600;
    margin: 0;
    color: #141414
}

.modal-header span {
    display: flex;
    justify-content: center;
    font-family: 'inter', sans-serif;
    font-size: 14px;
    font-weight: 500;

    color: #666666
}

.steps {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
}

.step-wrapper {
    background-color: #EEEDFC;
    height: 8px;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
}

.step {
    height: 100%;
    border-radius: 30px;
    background-color: transparent;
    transition: all 0.3s ease;
}

.step.current_step {
    background-color: #B7B3F4;
    width: 100%;
}

.step.complete_step {
    background-color: #4F46E5;
    width: 100%;
}


.input {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 10px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.input-step {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    padding: 12px 15px;
    font-size: 14px;
}

.next-button {
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

.seperator {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 20px;
    width: 100%;
}

.seperator .line {
    flex: 1;
    height: 1px;
    background-color: #D1D1D1;
}

.seperator span {
    color: #8A8A8A;
    font-family: 'inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
}

.login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 8px;

}

.login .redirect {
    color: #141414;
    font-family: 'inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
}

.login .message {
    color: #666666;
    font-family: 'inter', sans-serif;
    font-weight: 400;
    font-size: 12px;
}

.active-img {
    background-color: #EEEDFC !important;
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

.hidden {
    display: none;
}

.preview-container {
    display: flex;
    align-items: center;
    gap: 10px;
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