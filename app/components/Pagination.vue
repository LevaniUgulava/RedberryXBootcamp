<template>
    <div class="pagination-wrapper">
        <button class="nav-btn" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
            <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.24077 4.78977L8.2635 5.80114L4.71236 9.35227L13.6328 9.35227L13.6328 10.8295L4.71236 10.8295L8.26349 14.375L7.24077 15.392L1.93963 10.0909L7.24077 4.78977Z"
                    fill="currentcolor" />
            </svg>

        </button>

        <div class="pages">
            <button class="page-btn" :class="{ active: currentPage === 1 }" @click="changePage(1)">1</button>

            <span v-if="showLeftDots" class="dots">...</span>

            <button v-for="page in middlePages" :key="page" class="page-btn" :class="{ active: page === currentPage }"
                @click="changePage(page)">
                {{ page }}
            </button>

            <span v-if="showRightDots" class="dots">...</span>

            <button v-if="totalPages > 1" class="page-btn" :class="{ active: currentPage === totalPages }"
                @click="changePage(totalPages)">{{ totalPages }}</button>
        </div>

        <button class="nav-btn" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
            <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.75923 18.2102L6.73651 17.1989L10.2876 13.6477H1.36719V12.1705H10.2876L6.73651 8.625L7.75923 7.60795L13.0604 12.9091L7.75923 18.2102Z"
                    fill="currentcolor" />
            </svg>

        </button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    currentPage: number;
    totalPages: number;
}>();

const emit = defineEmits(['update:page']);

const changePage = (page: number) => {
    if (page >= 1 && page <= props.totalPages) {
        emit('update:page', page);
    }
};

const middlePages = computed(() => {
    const range = [];
    let start = props.currentPage - 1;
    let end = props.currentPage + 1;

    if (props.currentPage <= 2) {
        start = 2;
        end = Math.min(3, props.totalPages - 1);
    }

    if (props.currentPage >= props.totalPages - 1) {
        start = Math.max(2, props.totalPages - 3);
        end = props.totalPages - 1;
    }

    for (let i = Math.max(2, start); i <= Math.min(props.totalPages - 1, end); i++) {
        range.push(i);
    }
    return range;
});

const showLeftDots = computed(() => props.currentPage > 3);
const showRightDots = computed(() => props.currentPage < props.totalPages - 2);
</script>

<style scoped>
.pagination-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 40px;
}

.pages {
    display: flex;
    gap: 12px;
    align-items: center;
}

.page-btn,
.nav-btn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid #E5E5E5;
    background-color: #FFFFFF;
    color: #5D5FEF;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 500ms ease-out,
        color 500ms ease-out,
        border-color 500ms ease-out,
        transform 200ms ease-out;
}

.page-btn:hover:not(.active),
.nav-btn:hover:not(:disabled) {
    background-color: #DDDBFA;
    border-color: #D1D1D1;

}

.page-btn.active {
    background-color: #281ED2;
    color: #FFFFFF;
    border-color: #281ED2;
    transform: scale(0.95);
}

.nav-btn:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    color: #D1D1D1;
}

.dots {
    color: #5D5FEF;
    letter-spacing: 2px;
    font-weight: bold;
}

.nav-btn svg {
    stroke: #5D5FEF;
}

.nav-btn:disabled svg {
    stroke: #D1D1D1;
}
</style>