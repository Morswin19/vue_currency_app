<template>
  <div id="app">
    <h3>{{ currencies.effectiveDate }}</h3>
    <h2>{{ currencies.rates[0].currency }}</h2>
    <h2>{{ currencies.rates[0].code }}</h2>
    <h2>{{ currencies.rates[0].mid }}</h2>
    <Header />
    <CurrencyForm />
    <Currencies />
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
        // .then(data => console.log(data[0].rates));
        .then(data => (this.currencies = data[0]));
    },
    methods: {
      currency: () => {
        return 'hello guinea pig';
      }
    }
  };
</script>

<style lang="sass" scoped>
  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
</style>
