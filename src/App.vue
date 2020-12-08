<template>
  <div id="app">
    <Header />
    <Form />
    <Currencies />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Form from './components/Header.vue';
  import Currencies from './components/Header.vue';
  import Footer from './components/Header.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Form,
      Currencies,
      Footer
    }
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
