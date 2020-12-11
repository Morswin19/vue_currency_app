<template>
  <div id="Currencies">
    <h1 ref="title">My favourite currencies</h1>
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
    <button v-on:click="showModal('all')">Remove All</button>
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
      currenciesToShow: Array,
      removeElement: Function,
      removeAllElements: Function
    },
    data() {
      return {
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
        if (this.currencyToRemove !== 'all') {
          this.removeElement(this.currencyToRemove);
        } else {
          this.removeAllElements();
        }
      },
      cancelModal: function() {
        this.modalToggle = false;
      }
    }
  };
</script>

<style lang="sass" scoped>
  #Currencies
    button
        display: block
        width: 280px
        height: 40px
        font-weight: 700
        background: lightblue
        border: 0px
        border-radius: 20px
        font-size: 20px
        color: #666
        cursor: pointer
        margin: 20px auto
        outline: none
        &:hover
          color: #000
    ul
      display: flex
      flex-wrap: wrap
      list-style: none
      justify-content: center
      max-width: 600px
      margin: 20px auto 20px
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
