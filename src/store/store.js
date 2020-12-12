import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currencies: [],
    modalToggle: false,
    currenciesToShow: [
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
      },
      {
        currency: 'funt szterling',
        code: 'GBP',
        mid: 1
      }
    ],
    errorMessageText: 'you already follow this currency',
    toggleErrorMessage: false
  },
  mutations: {
    removeAllElements: state => {
      state.currenciesToShow = [];
    },
    removeElement: (state, code) => {
      if (code !== 'all') {
        state.currenciesToShow = state.currenciesToShow.filter(
          item => item.code !== code
        );
      }
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
      } else {
        state.toggleErrorMessage = true;
        state.errorMessageText = 'you have to choose one from the list';
        setTimeout(() => (state.toggleErrorMessage = false), 3000);
        return;
      }
    }
  }
});
