<template>
  <div id="App">
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
    components: {
      Header,
      CurrencyForm,
      Currencies,
      Footer
    },
    created() {
      this.$store.dispatch('getCurrencyData');
    }
  };
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap')

  *, *:before, *:after
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Roboto', sans-serif

  #App
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    overflow-x: hidden
    display: flex
    flex-direction: column
    justify-content: space-between
    min-height: 100vh

  button
    outline: none
</style>
