<template>
  <label for="billInput">Bill
    <input id="billInput" type="number" v-model.number="bill">
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
