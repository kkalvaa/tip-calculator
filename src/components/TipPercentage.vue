<template>
  <ul>
    <li>
      <input type="radio"
        id="radio5"
        v-model.number="tipPercentage"
        value="5"
        class="radio-input"
      >
      <label
        for="radio5"
        class="c-button"
        @click="setFalse()"
      >
        5%
      </label>
    </li>
    <li>
      <input type="radio"
        id="radio10"
        v-model.number="tipPercentage"
        value="10"
        class="radio-input"
      >
      <label
        for="radio10"
        class="c-button"
        @click="setFalse()"
      >
        10%
      </label>
    </li>
    <li>
      <input type="radio"
        id="radio15"
        v-model.number="tipPercentage"
        value="15"
        class="radio-input"
      >
      <label
        for="radio15"
        class="c-button"
        @click="setFalse()"
      >
        15%
      </label>
    </li>
    <li>
      <input type="radio"
        id="radio25"
        v-model.number="tipPercentage"
        value="25"
        class="radio-input"
      >
      <label
        for="radio25"
        class="c-button"
        @click="setFalse()"
      >
        25%
      </label>
    </li>
    <li>
      <input type="radio"
        id="radio50"
        v-model.number="tipPercentage"
        value="50"
        class="radio-input"
      >
      <label
        for="radio50"
        class="c-button"
        @click="setFalse()"
      >
        50%
      </label>
    </li>

    <li>
      <custom-input
        v-if="isCustom"
      />
      <button
        v-else
        class="c-button c-button--custom"
        @click="setTrue()"
      >
        Custom
      </button>
    </li>
  </ul>
</template>

<script>
import { EventBus, } from '@/event-bus.js';
import { state, actions } from '@/store.js';

import CustomInput from '@/components/CustomInput.vue';

export default {
  name: 'TipPercentage',
  components: {
    CustomInput,
  },
  data() {
    return {
      isCustom: false,
    }
  },
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
  created() {
    EventBus.$on('reset', reset => {
      this.isCustom = reset.isCustom;
    })
  },
  methods: {
    setTrue() {
      this.isCustom = true;
      actions.updateTipPercentage('');
    },
    setFalse() {
      this.isCustom = false;
    }
  }
}
</script>

<style lang="scss">
.radio-input {
  display: none;
}

.c-button {
  .radio-input:checked + & {
    background-color: var(--strong-cyan);
    transition: background-color ease-out 150ms 50ms;
  }

  &--custom {
    &#{&} {
      background-color: var(--cyan-600);
      color: var(--cyan-300);
      transition: all ease-out 200ms;
  
      &:hover {
        background-color: var(--cyan-500);
        color: var(--very-dark-cyan);
      }
    }
  }
}

</style>