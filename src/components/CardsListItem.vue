<template>
  <li class="card">
    <header class="header">
      <div class="row">
        <span class="name">{{ name }}</span>
        <span :class="`status ${status}`">{{ status }}</span>
      </div>
      <div class="row">
        <span>{{ gender }}</span>
        <span>{{ location }}</span>
      </div>
    </header>
    <img class="image" :src="image" alt="" />
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Status, Gender } from '../types/characteristic';

export default defineComponent({
  name: 'CardsListItem',
  props: {
    name: { type: String, required: true },
    status: { type: String as PropType<Status>, required: true },
    gender: { type: String as PropType<Gender>, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: #8d8d8d;
}

.name {
  font-weight: 700;
  color: #333333;
}

.status {
  font-weight: 700;
  color: #7b7b7b;

  &.Alive {
    color: #00bd4c;
  }

  &.Dead {
    color: #e60000;
  }
}

.image {
  width: 300px;
  height: 300px;
  background: rgba(141, 141, 141, 0.3);

  @media screen and (max-width: 400px) {
    max-width: 300px;
    max-height: 300px;
    width: 100%;
    height: 100%;
  }
}
</style>
