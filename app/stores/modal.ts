
export const useModalStore = defineStore('modal', () => {
    const modalState = reactive({
        auth: { isOpen: false, type: null as 'login' | 'register' | null },
        profile: false,
        enrollment: false,
    });

    const toggleModal = (modalName: keyof typeof modalState, value: boolean, type?: 'login' | 'register' | null) => {
        if (modalName === 'auth') {
            modalState.auth.isOpen = value;
            if (type) modalState.auth.type = type;
        } else {
            (modalState[modalName] as boolean) = value;
        }
    };

    const feedback = reactive({
        isOpen: false,
        type: 'confirm' as 'confirm' | 'profile' | 'conflict' | 'congratulations',
        courseName: '',
        details: ''
    });
    const openFeedback = (type: typeof feedback.type, courseName = '', time = '') => {
        feedback.type = type;
        feedback.courseName = courseName;
        feedback.isOpen = true;
        feedback.details = time
    };
    const closeFeedback = () => {
        feedback.isOpen = false;
    };

    return {
        feedback,
        openFeedback,
        closeFeedback,
        modalState,
        toggleModal
    }
})