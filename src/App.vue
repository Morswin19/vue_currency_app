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
    //fetching data when component is created
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

  #App
    overflow-x: hidden
    display: flex
    flex-direction: column
    justify-content: space-between
    min-height: 100vh
    font-family: 'Roboto', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    background-color: #F7f9FC
    button
        display: block
        width: 280px
        height: 40px
        margin: 20px auto
        font-weight: 700
        background: #FFCA3A
        border: 0px
        border-radius: 20px
        font-size: 20px
        color: #666
        cursor: pointer
        outline: none
        transition: 0.2s
        &:hover
          color: #FFCA3A
          background-image: linear-gradient(90deg, #666, #222)
</style>
