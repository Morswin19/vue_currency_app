<template>
  <div id="CurrencyForm">
    <form>
      <h4>choose currency</h4>
      <select v-model="selectedCurrencyToAdd">
        <option v-bind:key="index" v-for="(item, index) in currenciesData">{{
          item.currency
        }}</option>
      </select>
      <button v-on:click.prevent="addCurrency(selectedCurrencyToAdd)">
        Add
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'CurrencyForm',
    props: {
      currenciesData: Array,
      addCurrency: Function
    },
    data() {
      return {
        selectedCurrencyToAdd: ''
      };
    }
  };
</script>

<style lang="sass" scoped>
  #CurrencyForm
    margin: 50px auto
    width: 280px
    form
      select
        width: 280px
        height: 30px
        margin: 10px 0
        font-size: 16px
      button
        display: block
        width: 100%
        height: 40px
        font-weight: 700
        background: lightblue
        border: 0px
        border-radius: 20px
        font-size: 20px
        color: #666
        cursor: pointer
        margin: 20px 0
        &:hover
          color: #000
</style>
