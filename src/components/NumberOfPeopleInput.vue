<template>
  <label for="numberOfPeopleInput">
    Number of people
    <input
      id="numberOfPeopleInput"
      class="number-of-people-input"
      type="number"
      v-model.number="numberOfPeople"
      min="1"
      validate
    >
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

<style lang="scss">
.number-of-people-input {
  background-image: url("../assets/icon-person.svg");
}
</style>
