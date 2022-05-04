<template>
  <ul class="cards">
    <CardListItem
      v-for="card in cards"
      :key="card.id"
      :name="card.name"
      :status="card.status"
      :gender="card.gender"
      :location="card.location.name"
      :image="card.image"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CardListItem from './CardsListItem.vue';
import { Characteristic } from '../types/characteristic';

export default defineComponent({
  name: 'CardsList',
  components: { CardListItem },
  props: { cards: { type: Array as PropType<Characteristic[]>, required: true } },
});
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 650px;
  width: 100%;
  padding: 15px 10px;
}
</style>
