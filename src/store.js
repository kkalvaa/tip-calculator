import Vue from 'vue';

const state = Vue.observable({
  bill: 0,
  tipPercentage: 5,
  numberOfPeople: 1,
  perPerson: 0,
  tipPerPerson: 0,
  totalPerPerson: 0,
})

const actions = {
  updateBill(newValue) {
    state.bill = newValue;
    this.updateState();
  },
  updateTipPercentage(newValue) {
    state.tipPercentage = newValue;
    this.updateState();
  },
  updateNumberOfPeople(newValue) {
    state.numberOfPeople = newValue;
    this.updateState();
  },
  updatePerPerson() {
    state.perPerson = Math.round( state.bill / state.numberOfPeople * 100 ) / 100;
  },
  updateTipPerPerson() {
    state.tipPerPerson = Math.round( state.perPerson * state.tipPercentage ) / 100;
  },
  updateTotalPerPerson() {
    state.totalPerPerson = Math.round( (state.perPerson + state.tipPerPerson) * 100 ) / 100
  },
  updateState() {
    this.updatePerPerson();
    this.updateTipPerPerson();
    this.updateTotalPerPerson();
  },
  reset() {
    state.bill = 0;
    state.tipPercentage = 5;
    state.numberOfPeople = 1;
    state.perPerson = 0;
    state.tipPerPerson = 0;
    state.totalPerPerson = 0;
  }
}

export {
  state,
  actions,
}