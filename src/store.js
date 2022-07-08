import Vue from 'vue';

const state = Vue.observable({
  bill: 100,
  tipPercentage: 5,
  numberOfPeople: 1,
  tipPerPerson: 0,
  totalPerPerson: 0,
})

const actions = {
  updateBill(newValue) {
    state.bill = newValue;
  },
  updateTipPercentage(newValue) {
    state.tipPercentage = newValue;
  },
  updateNumberOfPeople(newValue) {
    state.numberOfPeople = newValue;
  },
  reset() {
    state.bill = 0;
    state.tipPercentage = 5;
    state.numberOfPeople = 1;
  }
}

export {
  state,
  actions,
}