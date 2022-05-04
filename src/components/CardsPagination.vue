<template>
  <div class="pagination">
    <ul class="pages">
      <li :class="`page ${isActive(1) ? 'active' : ''}`" @click="setCurrentPage(1)">
        <button>1</button>
      </li>
      <li class="dots" v-if="currentPage > 3">...</li>

      <li
        v-for="page in pages"
        :class="`page ${isActive(page) ? 'active' : ''}`"
        :key="page"
        @click="setCurrentPage(page)"
      >
        <button>{{ page }}</button>
      </li>

      <li class="dots" v-if="currentPage < totalPagesCount - 2">...</li>
      <li
        :class="`page ${isActive(totalPagesCount) ? 'active' : ''}`"
        @click="setCurrentPage(totalPagesCount)"
      >
        <button>{{ totalPagesCount }}</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { usePagination } from '../hooks';

export default defineComponent({
  name: 'CardsPagination',
  emits: ['setCurrentPage'],
  props: {
    currentPage: { type: Number, required: true },
    totalPagesCount: { type: Number, required: true },
  },
  setup(props, { emit }) {
    const { currentPage, totalPagesCount } = toRefs(props);
    const { pages, isActive } = usePagination({ currentPage, totalPagesCount, maxVisiblePages: 3 });

    const setCurrentPage = (page: number) => {
      emit('setCurrentPage', page);
    };

    return { pages, isActive, setCurrentPage };
  },
});
</script>

<style lang="scss" scoped>
.pagination {
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  background: #000000;
  opacity: 0.9;
}

.pages {
  display: flex;
  align-items: center;
  justify-content: center;
}

.page {
  color: #ffffff;

  button {
    padding: 7.5px;
  }

  &.active {
    font-weight: 700;
    font-size: 18px;
    transform: translateY(-2px);
  }
}

.dots {
  color: #ffffff;
  padding: 7.5px;
}
</style>
