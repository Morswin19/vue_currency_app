<template>
  <div id="CurrencyForm">
    <form>
      <h4>choose currency</h4>
      <select v-model="selectedCurrency">
        <option v-bind:key="index" v-for="(item, index) in currencies">{{
          item.currency
        }}</option>
      </select>
      <div v-if="toggleErrorMessage" id="addError">
        {{ errorMessageText }}
      </div>
      <button v-on:click.prevent="addCurrency(selectedCurrency)">
        Add
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'CurrencyForm',
    data() {
      return {
        selectedCurrency: ''
      };
    },
    computed: {
      currencies() {
        return this.$store.state.currencies.rates;
      },
      errorMessageText() {
        return this.$store.state.errorMessageText;
      },
      toggleErrorMessage() {
        return this.$store.state.toggleErrorMessage;
      }
    },
    methods: {
      addCurrency: function(selectedOption) {
        this.$store.commit('addCurrency', selectedOption);
      }
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
        margin: 10px 0 0
        font-size: 16px
      #addError
        padding: 20px
        color: red
        background-color: #fff
        border: 2px solid red
      button
        display: block
        width: 100%
        height: 40px
        margin: 20px 0
        font-weight: 700
        background: lightblue
        border: 0px
        border-radius: 20px
        font-size: 20px
        color: #666
        cursor: pointer
        outline: none
        transition: 0.5s
        &:hover
          color: #000
</style>
