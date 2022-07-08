<template>
  <label for="billInput">Bill
    <input
      id="billInput"
      class="bill-input"
      type="number"
      v-model.number="bill"
      min="0"
    >
  </label>
</template>

<script>
import { state, actions } from '@/store.js';

export default {
  name: "BillInput",
  computed: {
    bill: {
      get() {
        return state.bill;
      },
      set(value) {
        actions.updateBill(value);
      }
    },
  }
};
</script>

<style lang="scss">
.bill-input {
  background-image: url('../assets/icon-dollar.svg');
}
</style>