import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//loading data from local storage
const myLocalCurrencies = JSON.parse(localStorage.getItem('mycurrencies'));

//starting data if local storage is empty
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

//list of starting currencies
const myCurrencies = myLocalCurrencies ? myLocalCurrencies : startingCurrencies;

export const store = new Vuex.Store({
  state: {
    //variables for fetching list of all available currencies with values
    currencies: [],
    //toggle to show or hide modal
    modalToggle: false,
    //list of starting currencies
    currenciesToShow: myCurrencies,
    //starting error message
    errorMessageText: 'you already follow this currency',
    //toggle to show error message
    toggleErrorMessage: false,
    //currency selected to remove
    currencyToRemove: ''
  },
  mutations: {
    //remove all elements from list and local storage
    removeAllElements: state => {
      state.currenciesToShow = [];
      localStorage.setItem(
        'mycurrencies',
        JSON.stringify(state.currenciesToShow)
      );
    },
    //remove one element from list and local storage
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
    //add element to list and local storage if we don't have it already
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
    },
    //exchange rates in local storage are out of date, getActualRate function loading actual rates from NBP api
    getActualRate: (state, payload) => {
      state.currenciesToShow[payload[0]].mid = state.currencies.rates.filter(
        item => item.code === payload[1]
      )[0].mid;
    },
    //show modal when user choose to remove one or all currencies
    showModal: (state, code) => {
      state.modalToggle = true;
      state.currencyToRemove = code;
    }
  },
  actions: {
    //fetching data from NBP api
    getCurrencyData: () =>
      fetch('https://api.nbp.pl/api/exchangerates/tables/A')
        .then(response => response.json())
        .then(data => {
          store.state.currencies = data[0];
          for (let i = 0; i < store.state.currenciesToShow.length; i++) {
            store.commit('getActualRate', [
              i,
              store.state.currenciesToShow[i].code
            ]);
          }
        })
  }
});
