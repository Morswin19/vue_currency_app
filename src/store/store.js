import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const myLocalCurrencies = JSON.parse(localStorage.getItem('mycurrencies'));
const startingCurrencies = [
  {
    currency: 'dolar amerykański',
    code: 'USD',
    mid: 1
  },
  {
    currency: 'euro',
    code: 'EUR',
    mid: 1
  },
  {
    currency: 'frank szwajcarski',
    code: 'CHF',
    mid: 1
  }
];

const myCurrencies =
  myLocalCurrencies.length > 0 ? myLocalCurrencies : startingCurrencies;

export const store = new Vuex.Store({
  state: {
    currencies: [],
    modalToggle: false,
    currenciesToShow: myCurrencies,
    errorMessageText: 'you already follow this currency',
    toggleErrorMessage: false,
    currencyToRemove: ''
  },
  mutations: {
    removeAllElements: state => {
      state.currenciesToShow = [];
      localStorage.setItem(
        'mycurrencies',
        JSON.stringify(state.currenciesToShow)
      );
    },
    removeElement: (state, code) => {
      if (code !== 'all') {
        state.currenciesToShow = state.currenciesToShow.filter(
          item => item.code !== code
        );
      }
      localStorage.setItem(
        'mycurrencies',
        JSON.stringify(state.currenciesToShow)
      );
    },
    getActualRate: (state, payload) => {
      state.currenciesToShow[payload[0]].mid = state.currencies.rates.filter(
        item => item.code === payload[1]
      )[0].mid;
    },
    addCurrency: (state, curr) => {
      if (curr !== '') {
        const currencyToAdd = state.currencies.rates.filter(
          item => item.currency === curr
        );
        const currencyToCheck = state.currenciesToShow.filter(
          item => item.currency === curr
        );
        if (currencyToCheck.length > 0) {
          state.toggleErrorMessage = true;
          state.errorMessageText = 'you already follow this currency';
          setTimeout(() => (state.toggleErrorMessage = false), 3000);
          return;
        }
        state.currenciesToShow.push(...currencyToAdd);
        localStorage.setItem(
          'mycurrencies',
          JSON.stringify(state.currenciesToShow)
        );
      } else {
        state.toggleErrorMessage = true;
        state.errorMessageText = 'you have to choose one from the list';
        setTimeout(() => (state.toggleErrorMessage = false), 3000);
        return;
      }
    }
  }
});
