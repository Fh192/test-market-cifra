<template>
  <div class="app">
    <CardsPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardsPage from './pages/CardsPage.vue';

export default defineComponent({
  name: 'App',
  components: { CardsPage },
});
</script>

<style lang="scss" scoped>
.app {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}
</style>
