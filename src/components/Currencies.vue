<template>
  <div id="Currencies">
    <h1 ref="title">My currencies</h1>
    <ul>
      <li
        v-bind:ref="item.code"
        v-bind:key="index"
        v-for="(item, index) in currenciesToShow"
      >
        <h3>{{ item.currency }}</h3>
        <h4>{{ item.code }}</h4>
        <h2>{{ item.mid }}</h2>
        <div v-on:click="showModal(item.code)" class="remove">
          <div class="minus"></div>
        </div>
      </li>
    </ul>
    <Modal
      v-if="modalToggle"
      v-bind:currencyToRemove="currencyToRemove"
      v-bind:accept="acceptModal"
      v-bind:cancel="cancelModal"
    />
  </div>
</template>

<script>
  import Modal from './Modal.vue';

  export default {
    name: 'Currencies',
    components: {
      Modal
    },
    props: {
      currenciesData: Array
    },
    data() {
      return {
        currenciesToShow: this.currenciesData,
        modalToggle: false
      };
    },
    methods: {
      showModal: function(code) {
        this.modalToggle = true;
        this.currencyToRemove = code;
      },
      acceptModal: function() {
        this.modalToggle = false;
        this.removeElement(this.currencyToRemove);
      },
      cancelModal: function() {
        this.modalToggle = false;
      },
      removeElement: function(code) {
        this.currenciesToShow = this.currenciesToShow.filter(
          item => item.code !== code
        );
      }
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
