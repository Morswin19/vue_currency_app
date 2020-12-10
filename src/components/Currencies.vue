<template>
  <div id="Currencies">
    <h1>My currencies</h1>
    <ul>
      <li v-bind:key="index" v-for="(item, index) in currenciesData">
        <h3>{{ item.currency }}</h3>
        <h4>{{ item.code }}</h4>
        <h2>{{ item.mid }}</h2>
        <div v-on:click="showConsole" class="remove">
          <div class="minus"></div>
        </div>
      </li>
    </ul>
    <!-- <button v-on:click="showConsole()">show console</button> -->
  </div>
</template>

<script>
  export default {
    name: 'Currencies',
    props: {
      currenciesData: Array
    },
    methods: {
      showConsole: e => console.log(e.target)
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
      margin: 50px auto
      li
        position: relative
        width: 250px
        padding: 20px
        text-align: left
        border: 2px solid lightblue
        margin: 20px
        border-radius: 20px
        .remove
          position: absolute
          top: 20px
          right: 20px
          display: flex
          justify-content: center
          align-items: center
          width: 18px
          height: 18px
          border-radius: 50%
          background-color: rgba(#FF0000, 0.7)
          cursor: pointer
          .minus
            width: 12px
            height: 3px
            background-color: #FFF
          &:hover
            background-color: #FF0000
</style>
