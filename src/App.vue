<template>
  <div id="app">
    <section>
      <div>
        <bill-input />

        <p>Select tip %</p>
        <tip-percentage />

        <number-of-people-input />
      </div>
      <div class="div2">
        <div>
          <p>Tip Amount <span>/ person</span></p>
          <p>${{ tipPerPerson }}</p>
        </div>
        <div>
          <p>Total <span>/ person</span></p>
          <p>${{ totalPerPerson }}</p>
        </div>
        <button type="reset">Reset</button>

      </div>
    </section>
  </div>
</template>

<script>
import { state } from '@/store.js';
import BillInput from '@/components/BillInput.vue';
import NumberOfPeopleInput from '@/components/NumberOfPeopleInput.vue';
import TipPercentage from '@/components/TipPercentage.vue';

export default {
  name: 'App',
  components: {
    BillInput,
    NumberOfPeopleInput,
    TipPercentage,
  },
  computed: {
    tipState() {
      return state;
    },
    tipPercentage() {
      return state.tipPercentage;
    },
    tipPerPerson() {
      return this.tipState.bill / this.tipState.
numberOfPeople * this.tipState.
tipPercentage / 100;
    },
    totalPerPerson() {
      return this.tipState.bill / this.tipState.numberOfPeople + this.tipPerPerson;
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

button {
  padding: 0.5em;
  background-color: var(--very-dark-cyan);
  color: var(--white);
  border-radius: 5px;
  font-family: "Space Mono";
  border: solid 1px var(--very-dark-cyan);
  width: 100%;
  font-size: 1em;
}

input {
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  border-color: transparent;
  background-color: var(--cyan-600);
  border-radius: 5px;
  text-align: right;
}

.div2 {
  background-color: var(--very-dark-cyan);
  padding: 2em;
  color: var(--white);
  border-radius: 10px;

  button {
    background-color: var(--cyan-300);
    color: var(--very-dark-cyan);
  }
}
</style>
