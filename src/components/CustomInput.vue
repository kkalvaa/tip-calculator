<template>
  <input
    ref="customTip"
    type="number"
    v-model.number="tipPercentage"
    class="c-button c-button--input"
  >
</template>

<script>
import { state, actions } from '@/store.js';

export default {
  name: 'CustomInput',
  computed: {
    tipPercentage: {
      get() {
        return state.tipPercentage;
      },
      set(value) {
        actions.updateTipPercentage(value);
      }
    }
  },
  mounted() {
    this.focusInput();
  },
  methods: {
    focusInput() {
      this.$refs.customTip.focus()
    }
  }
}
</script>

<style lang="scss">
.c-button {
  &--input {
    background-color: var(--cyan-600);
    color: currentColor;
  }
}
</style>