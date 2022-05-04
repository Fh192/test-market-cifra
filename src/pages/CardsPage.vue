<template>
  <div class="cardsPage">
    <CardsList :cards="cards" />
    <CardsPagination
      :currentPage="currentPage"
      :totalPagesCount="totalPagesCount"
      @set-current-page="setCurrentPage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { Characteristic } from '../types/characteristic';
import { characterApi } from '../api/character';
import CardsList from '../components/CardsList.vue';
import CardsPagination from '../components/CardsPagination.vue';

export default defineComponent({
  name: 'CardsPage',
  components: { CardsList, CardsPagination },
  setup() {
    const cards = ref<Characteristic[]>([]);
    const currentPage = ref(1);
    const totalPagesCount = ref(1);

    const setCurrentPage = (page: number) => {
      currentPage.value = page;
    };

    const scrollToTop = () => {
      const rootElement = document.getElementById('app');
      rootElement?.scrollIntoView({ behavior: 'smooth' });
    };

    const fetchCards = async () => {
      const { results, info } = await characterApi.getCharacter(currentPage.value);

      cards.value = results;
      totalPagesCount.value = info.pages;

      scrollToTop();
    };

    watch(() => currentPage.value, fetchCards);

    onMounted(() => {
      fetchCards();
    });

    return { cards, currentPage, totalPagesCount, setCurrentPage };
  },
});
</script>

<style lang="scss" scoped>
.cardsPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
