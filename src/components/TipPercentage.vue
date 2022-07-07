<template>
  <ul>
    <li>
      <input type="radio"
        id="radio5"
        v-model.number="tipPercentage"
        value="5"
        class="radio-input"
      >
      <label for="radio5" class="radio-label">
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
      <label for="radio10" class="radio-label">
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
      <label for="radio15" class="radio-label">
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
      <label for="radio25" class="radio-label">
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
      <label for="radio50" class="radio-label">
        50%
      </label>
    </li>


    
    <li><input></li>
  </ul>
</template>

<script>
import { state, actions } from '@/store.js';

export default {
  name: 'TipPercentage',
  computed: {
    tipPercentage: {
      get() {
        return state.tipPercentage;
      },
      set(value) {
        actions.updateTipPercentage(value);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-input {
  display: none;
}

.radio-label {
  display: block;
  padding: 0.5em;
  background-color: var(--very-dark-cyan);
  color: var(--white);
  border-radius: 5px;
  font-family: "Space Mono";
  width: 100%;
  font-size: 1em;
  text-align: center;
  transition: background-color ease-out 50ms, transform ease-out 200ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: transform ease-out 200ms;
  }

  .radio-input:checked + & {
    background-color: var(--strong-cyan);
    transition: background-color ease-out 150ms 50ms;
  }
}

</style>