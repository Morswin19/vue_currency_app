<template>
  <div id="CurrencyForm">
    <form>
      <h4>choose currency</h4>
      <select v-model="selectedCurrency">
        <option v-bind:key="index" v-for="(item, index) in currencies">{{
          item.currency
        }}</option>
      </select>
      <!-- error message only show when selected option is '' or we arleady have selected currency -->
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
    data() {
      return {
        //currency selected in select input
        selectedCurrency: ''
      };
    },
    //all methods and computed are explain in store.js file
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
      addCurrency(selectedOption) {
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
</style>
