<template>
    <div class="courses-container">
        <div class="breadcrumb">
            <span>Home</span>
            <span class="seperator">
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M-0.000161171 1.0607L1.06084 0.000703812L6.83984 5.7777C6.93299 5.87027 7.00692 5.98035 7.05737 6.1016C7.10782 6.22285 7.13379 6.35288 7.13379 6.4842C7.13379 6.61553 7.10782 6.74556 7.05737 6.86681C7.00692 6.98806 6.93299 7.09813 6.83984 7.1907L1.06084 12.9707L0.000838757 11.9107L5.42484 6.4857L-0.000161171 1.0607Z"
                        fill="#666666" />
                </svg>
            </span>
            <span class="active">Browse</span>
        </div>
        <div class="main-container">
            <div class="filter-container">

                <header>
                    <h1>Filters</h1>
                    <span @click="clearFilters">Clear All Filters
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.75 5.75L0.75 0.75M5.75 5.75L10.75 10.75M5.75 5.75L10.75 0.75M5.75 5.75L0.75 10.75"
                                stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                    </span>
                </header>
                <div class="filter-content">
                    <div class="filters">
                        <div class="filter-name">Categories</div>
                        <div class="filter-list">
                            <div class="list-container"
                                :class="{ 'active-list': filters.category_ids?.includes(filter.id) }"
                                v-for="(filter, index) in categories" :key="index"
                                @click="selectFilter(filter, 'category_ids')">
                                <div v-if="filter.icon" style="display: flex;" v-html="SvgMap[filter.icon]"></div>
                                <div class="category-name">
                                    {{ filter.name }}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="filters">
                        <div class="filter-name">Topics</div>
                        <div class="filter-list">
                            <div class="list-container"
                                :class="{ 'active-list': filters.topic_ids?.includes(filter.id) }"
                                v-for="(filter, index) in filteredTopics" :key="index"
                                @click="selectFilter(filter, 'topic_ids')">
                                <div class="category-name">
                                    {{ filter.name }}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="filters">
                        <div class="filter-name">Instructor</div>
                        <div class="filter-list">
                            <div class="list-container"
                                :class="{ 'active-list': filters.instructors?.includes(filter.id) }"
                                v-for="(filter, index) in instructors" :key="index"
                                @click="selectFilter(filter, 'instructors')">
                                <img :src="filter.avatar" alt="avatar" class="avatar" />
                                <div class="category-name">
                                    {{ filter.name }}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="footer">
                    <span>{{ activeFiltersCount }} Filters Active</span>
                </div>


            </div>
            <div class="catalog-container">
                <div class="filter">
                    <div class="text">
                        Showing {{ courses.length }} out of {{ totalCourses }}
                    </div>
                    <div @click="isOpen = !isOpen" class="custom-select">
                        <span>Sort By:</span>
                        <span>{{ selectedSort.name }}</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.4443 7.50122L11.1501 12.7952C11.0282 12.9171 10.8835 13.0138 10.7243 13.0798C10.565 13.1457 10.3943 13.1797 10.222 13.1797C10.0496 13.1797 9.87891 13.1457 9.71966 13.0798C9.56041 13.0138 9.41571 12.9171 9.29384 12.7952L3.99984 7.50097"
                                stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div v-if="isOpen" class="select">
                            <span v-for="(item, index) in SortSelectMap" :key="index"
                                :class="[selectedSort.name == item.name ? 'active' : '']"
                                @click.stop="selectOption(item)">
                                {{ item.name }}
                            </span>
                        </div>

                    </div>

                </div>
                <div class="course-list">
                    <ListingCard v-for="(item, index) in courses" :item="item" :key="index" />
                </div>
                <div>
                    <Pagination :current-page="currentPage" :total-pages="totalPages" @update:page="handlePageChange" />
                </div>



            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import ListingCard from '~/components/cards/ListingCard.vue';

const config = useRuntimeConfig();
interface SortOption {
    name: string;
    value: string;
}

interface CourseFilters {
    category_ids: number[] | null;
    topic_ids: number[] | null;
    instructors: number[] | null;
    sort: string;
    page: number;
}

const filters = ref<CourseFilters>({
    category_ids: [],
    topic_ids: [],
    instructors: [],
    sort: 'newest',
    page: 1
});

const SortSelectMap: SortOption[] = [
    { name: 'Newest First', value: 'newest' },
    { name: 'Price: Low to High', value: 'price_asc' },
    { name: 'Price: High to Low', value: 'price_desc' },
    { name: 'Title: A-Z', value: 'title_asc' }
];

const clearFilters = () => {
    filters.value = {
        category_ids: [],
        topic_ids: [],
        instructors: [],
        sort: 'newest',
        page: 1
    };
};
const activeFiltersCount = computed(() => {
    let count = 0;
    if (filters.value.category_ids) count += filters.value.category_ids.length;
    if (filters.value.topic_ids) count += filters.value.topic_ids.length;
    if (filters.value.instructors) count += filters.value.instructors.length;
    return count;
});

const selectFilter = (filter: { id: number }, name: 'category_ids' | 'topic_ids' | 'instructors') => {
    const targetArray = filters.value[name];

    if (!Array.isArray(targetArray)) return;

    const index = targetArray.indexOf(filter.id);

    if (index !== -1) {
        targetArray.splice(index, 1);
    } else {
        targetArray.push(filter.id);
    }

    filters.value.page = 1;
};

const router = useRouter();

watch(filters, (newFilters) => {
    router.push({
        query: {
            ...newFilters,
            category_ids: newFilters.category_ids?.length ? newFilters.category_ids : undefined,
            topic_ids: newFilters.topic_ids?.length ? newFilters.topic_ids : undefined,
        }
    });
}, { deep: true });

const selectedSort = ref<SortOption>(SortSelectMap[0]!);
const isOpen = ref(false);

const selectOption = (item: SortOption) => {
    selectedSort.value = item;
    filters.value.sort = item.value;
    isOpen.value = false;
};



const [{ data: categories }, { data: topics }, { data: instructors }] = await Promise.all([
    useFetch('/categories', { baseURL: config.public.api, transform: (res: any) => res.data || res }),
    useFetch('/topics', { baseURL: config.public.api, transform: (res: any) => res.data || res }),
    useFetch('/instructors', { baseURL: config.public.api, transform: (res: any) => res.data || res })
])

const currentPage = ref(1);
const totalPages = ref(1);
const totalCourses = ref(0);

const { data: responseData, pending, refresh } = await useFetch('/courses', {
    baseURL: config.public.api as string,
    query: computed(() => {
        const queryParams: any = {
            sort: filters.value.sort,
            page: filters.value.page
        };
        filters.value.category_ids?.forEach((id, index) => {
            queryParams[`categories[${index}]`] = id;
        });
        filters.value.topic_ids?.forEach((id, index) => {
            queryParams[`topics[${index}]`] = id;
        });
        filters.value.instructors?.forEach((id, index) => {
            queryParams[`instructors[${index}]`] = id;
        });
        return queryParams;
    }),
    transform: (res: any) => res,
    watch: [filters]
});

const courses = computed(() => responseData.value?.data || []);

watch(responseData, (newVal) => {
    if (newVal && newVal.meta) {
        totalPages.value = newVal.meta.lastPage;
        totalCourses.value = newVal.meta.total;
    }
}, { immediate: true });

const handlePageChange = (page: number) => {
    currentPage.value = page;
    filters.value.page = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const filteredTopics = computed(() => {
    if (!filters.value.category_ids?.length) {
        return topics.value;
    }
    return topics.value.filter((topic: any) => {
        return filters.value.category_ids?.includes(topic.categoryId);
    });
});

</script>
<style scoped>
.courses-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 177px;
    box-sizing: border-box;
}

.main-container {
    display: flex;
    gap: 50px;
}

.filter-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
    height: 100vh;
}

.catalog-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 3;
}

.breadcrumb {
    padding: 50px 0;
    font-size: 18px;
    color: #666666;
    font-weight: 500;
    display: flex;
    align-items: center;

}

.breadcrumb .active {
    color: #736BEA;
}

.breadcrumb span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 4px;

}

.filter-container header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.filter-container header h1 {
    margin: 0;
    font-size: 40px;
    font-weight: 600;
    color: #0A0A0A;

}

.filter-container header span {
    font-size: 16px;
    font-weight: 500;
    color: #8A8A8A;
    cursor: pointer;
}

.filter-container header span:hover {
    color: #4F46E5;
}

.filter-content {
    display: flex;
    flex-direction: column;
    gap: 54px;
}

.filters {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
}

.filter-name {
    font-size: 18px;
    font-weight: 500;
    color: #666666;
}

.filter-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.list-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    box-sizing: border-box;
    gap: 5px;
    height: 39px;
    border-radius: 12px;
    border: none;
    padding: 8px 12px;
    background-color: #FFFFFF;
    cursor: pointer;
    transition: all 300ms ease-out;
    border: 1px solid transparent;

}

.avatar {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    object-fit: cover;
}

.list-container:hover {
    background-color: #DDDBFA;
}

.list-container.active-list {
    background-color: #EEEDFC;
    border: 1px solid #281ED2;
    color: #281ED2;
}

.list-container.active-list .category-name {
    color: #281ED2;
}

.category-name {
    color: #666666;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

}

.footer {
    height: 20px;
    font-size: 14px;
    color: #8A8A8A;
    font-weight: 500;
}

.catalog-container .filter .text {
    color: #666666;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    font-weight: 500;
}

.catalog-container .filter {
    display: flex;
    justify-content: space-between;
}

.catalog-container .filter .custom-select {
    display: flex;
    gap: 5px;
    height: 49px;
    align-items: center;
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding: 7px 20px;
    border-radius: 10px;
    border: 1px solid #F5F5F5;
    position: relative;
    cursor: pointer;


}

.select {
    position: absolute;
    top: 110%;
    overflow: hidden;
    left: 0;
    width: 100%;
    left: -1px;
    width: calc(100% + 2px);
    background-color: #FFFFFF;
    border: 1px solid #F5F5F5;
    border-radius: 10px;
    box-sizing: border-box;
    z-index: 99;
    display: flex;
    flex-direction: column;
    cursor: pointer;

}

.select span {
    padding: 10px 20px;
    color: #666666;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}

.select span:hover {
    background-color: #DDDBFA;
}

.select .active {
    color: #4F46E5;
    background-color: #DDDBFA;
}


.select .custom-select span {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}

.custom-select>span:first-child {
    color: #666666;
}

.custom-select>span:nth-child(2) {
    color: #4F46E5;
}

.course-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}
</style>