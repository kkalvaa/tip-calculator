<template>
  <div id="app">
    <section>
      <div class="div1">
        <bill-input />

        <div>
          <p>Select tip %</p>
          <tip-percentage />
        </div>

        <number-of-people-input />
      </div>
      <div class="div2">
        <div>
          <p>Tip Amount <br><span>/ person</span></p>
          <output-number>{{ tipPerPerson }}</output-number>
        </div>
        <div>
          <p>Total <br><span>/ person</span></p>
          <output-number>{{ totalPerPerson }}</output-number>
        </div>
        <reset-button />

      </div>
    </section>
  </div>
</template>

<script>
import { state } from '@/store.js';
import BillInput from '@/components/BillInput.vue';
import NumberOfPeopleInput from '@/components/NumberOfPeopleInput.vue';
import TipPercentage from '@/components/TipPercentage.vue';
import ResetButton from '@/components/ResetButton.vue';
import OutputNumber from './components/OutputNumber.vue';


export default {
  name: 'App',
  components: {
    BillInput,
    NumberOfPeopleInput,
    TipPercentage,
    ResetButton,
    OutputNumber,

  },
  computed: {
    tipState() {
      return state;
    },
    perPerson() {
      return Math.round( this.tipState.bill / this.tipState.numberOfPeople * 100 ) / 100;
    },
    tipPerPerson() {
      return Math.round( this.perPerson * this.tipState.tipPercentage ) / 100;
    },
    totalPerPerson() {
      return Math.round( (this.perPerson + this.tipPerPerson) * 100) / 100;
    }
  }
}
</script>

<style lang="scss">
@import
url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;700;900&family=Space+Mono:wght@400;700&display=swap');

:root {
  --strong-cyan: hsl(172, 67%, 45%);
  --very-dark-cyan: hsl(183, 100%, 15%);
  --cyan-300: hsl(186, 14%, 43%);
  --cyan-400: hsl(184, 14%, 56%);
  --cyan-500: hsl(185, 41%, 84%);
  --cyan-600: hsl(189, 41%, 97%);
  --white: hsl(0, 0%, 100%);

  --primary-color: var(--strong-cyan);

}

* {
  box-sizing: border-box;
  font-family: "Space Mono";
  font-weight: bolder;
}

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--cyan-500);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  width: 760px;
  background-color: var(--white);
  border-radius: 15px;
  padding: 1.5em;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5em;
}

.c-button {
  display: block;
  padding: 0.5em;
  background-color: var(--very-dark-cyan);
  color: var(--white);
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: 1em;
  text-align: center;
  transition: background-color ease-out 50ms, transform ease-out 200ms;
  cursor: pointer;

  &:not(:disabled):hover {
    transform: scale(1.05); transition: transform ease-out 200ms;
  }
}

input {
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  font-weight: bolder;
  border-color: transparent;
  background-color: var(--cyan-600);
  border-radius: 5px;
  text-align: right;
  accent-color: var(--strong-cyan);
  background-repeat: no-repeat;
  background-position: 1em 50%;
  background-size: 0.75em;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
}

.div1 {
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  p {
    margin: 0;
  }
}

.div2 {
  background-color: var(--very-dark-cyan);
  padding: 2em;
  color: var(--white);
  border-radius: 10px;

  > div {
    display: flex;
    align-items: center;
    gap: 1em;
    justify-content: space-between;
  }

  span {
    font-size: 0.75em;
    color: var(--cyan-400);
  }
  
}
</style>
