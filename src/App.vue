<template>
  <div id="app">
    <Header v-bind:date="currencies.effectiveDate" />
    <CurrencyForm />
    <Currencies v-bind:currenciesData="currencies.rates" />
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
        currencies: []
      };
    },
    created() {
      fetch('http://api.nbp.pl/api/exchangerates/tables/A')
        .then(response => response.json())
        .then(data => (this.currencies = data[0]));
    },
    methods: {
      currency: () => {
        return 'hello guinea pig';
      }
    }
  };
</script>

<style lang="sass">
  *, *:before, *:after
    margin: 0
    padding: 0
    box-sizing: border-box

  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
</style>
