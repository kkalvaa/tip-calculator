<template>
  <div class="c-output">
    <p class="c-output__title">Tip Amount <br><span class="c-output__subtitle">/ person</span></p>
    <output-number :amount="tipAmount">{{ tipAmount }}</output-number>
  </div>
</template>

<script>
import { state } from '@/store.js';
import OutputNumber from '@/components/OutputNumber.vue';


export default {
  name: 'TipAmount',
  components: {
    OutputNumber
  },
  computed: {
    tipAmount() {
      return state.tipPerPerson;
    }
  }
}
</script>

<style lang="scss">
.c-output {
  display: flex;
  align-items: center;
  gap: 1em;
  justify-content: space-between;
  margin-bottom: 1em;

  &__title {
    margin: 0;
  }

  &__subtitle {
    font-size: 0.75em;
    color: var(--cyan-400);
  }
}
</style>