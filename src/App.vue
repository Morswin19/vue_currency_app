<template>
  <div id="app">
    <Header v-bind:date="currencies.effectiveDate" />
    <CurrencyForm
      v-bind:currenciesData="currencies.rates"
      v-bind:addCurrency="addCurrency"
    />
    <Currencies
      v-bind:currenciesToShow="currenciesToShow"
      v-bind:removeElement="removeElement"
      v-bind:removeAllElements="removeAllElements"
    />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import CurrencyForm from './components/CurrencyForm.vue';
  import Currencies from './components/Currencies.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Header,
      CurrencyForm,
      Currencies,
      Footer
    },
    data() {
      return {
        currencies: [],
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
        ]
      };
    },
    created() {
      fetch('http://api.nbp.pl/api/exchangerates/tables/A')
        .then(response => response.json())
        .then(data => {
          this.currencies = data[0];
          this.getActualRate(0, 'USD');
          this.getActualRate(1, 'EUR');
          this.getActualRate(2, 'CHF');
          this.getActualRate(3, 'GBP');
        });
    },
    methods: {
      addCurrency: function(curr) {
        const currencyToAdd = this.currencies.rates.filter(
          item => item.currency === curr
        );
        this.currenciesToShow.push(...currencyToAdd);
      },
      removeElement: function(code) {
        this.currenciesToShow = this.currenciesToShow.filter(
          item => item.code !== code
        );
      },
      removeAllElements: function() {
        this.currenciesToShow = [];
      },
      getActualRate: function(index, code) {
        this.currenciesToShow[index].mid = this.currencies.rates.filter(
          item => item.code === code
        )[0].mid;
        return 2;
      }
    },
    computed: {}
  };
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap')

  *, *:before, *:after
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Roboto', sans-serif

  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    overflow-x: hidden
    display: flex
    flex-direction: column
    justify-content: space-between
    min-height: 100vh
</style>
