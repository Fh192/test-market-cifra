import { computed, Ref, toRefs } from 'vue';

interface Params {
  currentPage: Ref<number>;
  totalPagesCount: Ref<number>;
  maxVisiblePages: number;
}

export const usePagination = (params: Params) => {
  const { currentPage, totalPagesCount, maxVisiblePages } = toRefs(params);

  const startPage = computed<number>(() => {
    if (currentPage.value === 1 || currentPage.value === 2) {
      return 2;
    }

    if (
      currentPage.value === totalPagesCount.value ||
      currentPage.value === totalPagesCount.value - 1
    ) {
      return totalPagesCount.value - maxVisiblePages.value;
    }

    return currentPage.value - 1;
  });

  const pages = computed<number[]>(() => {
    const range = [];
    const end = Math.min(startPage.value + maxVisiblePages.value - 1, totalPagesCount.value);

    for (let i = startPage.value; i <= end; i++) {
      range.push(i);
    }

    return range;
  });

  const isActive = (page: number): boolean => page === currentPage.value;

  return { pages, isActive };
};
