<template>
  <div id="Header">
    <h1>Currency App</h1>
    <h2>
      <span>Exchange Rate Date: </span> <span> {{ date }}</span>
    </h2>
  </div>
</template>

<script>
  export default {
    //all methods and computed are explain in store.js file
    computed: {
      date() {
        return this.$store.state.currencies.effectiveDate;
      }
    }
  };
</script>

<style lang="sass" scoped>
  #Header
    width: 100vw
    height: 200px
    background-image: linear-gradient(90deg, #666, #222)
    color: #ffffff
    display: flex
    flex-direction: column
    padding-bottom: 20px
    margin-bottom: 50px
    box-shadow: 0px 6px 10px 3px rgba(#A2B4C6,0.4)
    h1
      margin: auto
      font-size: 72px
    h2
      width: 90%
      margin: 0 auto
      text-align: right
  @media(max-width: 500px)
    #Header
      h1
        font-size: 50px
      h2
        font-size: 20px
        text-align: center
        display: flex
        flex-wrap: wrap
        justify-content: center
        span
          margin-right: 2px
          margin-left: 2px
</style>
