<template>
  <div id="Header">
    <h1>Currency App</h1>
    <h2>Exchange Rate Date: {{ date }}</h2>
  </div>
</template>

<script>
  export default {
    computed: {
      date() {
        return this.$store.state.currencies.effectiveDate;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  #Header
    width: 100vw
    height: 200px
    background-color: #666666
    color: #ffffff
    display: flex
    flex-direction: column
    padding: 20px
    h1
      margin: auto
      font-size: 72px
    h2
      width: 100%
      text-align: right
      padding-right: 20px
</style>
