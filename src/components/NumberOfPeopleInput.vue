<template>
  <label for="numberOfPeople">
    Number of people
    <input id="numberOfPeople" type="number" v-model.number="numberOfPeople">
  </label>
</template>

<script>
import { state, actions } from '@/store.js';

export default {
  name: 'NumberOfPeopleInput',
  computed: {
    numberOfPeople: { 
      get() {
        return state.numberOfPeople;
      },
      set(value) {
        actions.updateNumberOfPeople(value);
      }
    },
  }
}
</script>