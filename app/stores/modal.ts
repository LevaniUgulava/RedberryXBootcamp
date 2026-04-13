
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

    return {
        modalState,
        toggleModal
    }
})