<template>
  <div id="Currencies">
    <h1>My currencies</h1>
    <ul>
      <li v-bind:key="index" v-for="(item, index) in currenciesData">
        <h3>{{ item.currency }}</h3>
        <h4>{{ item.code }}</h4>
        <h2>{{ item.mid }}</h2>
      </li>
    </ul>
    <button v-on:click="showConsole()">show console</button>
  </div>
</template>

<script>
  export default {
    name: 'Currencies',
    props: {
      currenciesData: Array
    },
    methods: {
      showConsole: () => console.log(this.data)
    }
  };
</script>

<style lang="sass" scoped>
  #Currencies
    ul
      display: flex
      flex-wrap: wrap
      list-style: none
      justify-content: center
      max-width: 600px
      margin: 0 auto
      li
        width: 250px
        padding: 20px
        text-align: left
        border: 2px solid lightblue
        margin: 20px
</style>
