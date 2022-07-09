<template>
  <button
    type="reset"
    class="c-button c-button--reset"
    @click="reset()"
    :disabled="active"
  >
    Reset
  </button>
</template>

<script>
import { EventBus, } from '@/event-bus.js';
import { state, actions } from '@/store.js';

export default {
  name: 'ResetButton',
  computed: {
    active() {
      if (state.bill > 0 || state.numberOfPeople > 1) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    reset() {
      actions.reset();
      EventBus.$emit('reset', {
        isCustom: false
      });
    }
  }

}
</script>

<style lang="scss">

.c-button {
  &[type=reset] {
    background-color: var(--strong-cyan);
    color: var(--very-dark-cyan);
    text-transform: uppercase;
    font-weight: bolder;

    &:disabled {
      background-color: var(--cyan-300);
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: var(--cyan-500);
    }
  }
}
</style>