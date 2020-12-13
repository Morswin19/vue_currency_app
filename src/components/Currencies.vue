<template>
  <div id="Currencies">
    <h1 ref="title">My favourite currencies</h1>
    <ul>
      <!-- loop of favourite currencies -->
      <li v-bind:key="index" v-for="(item, index) in currenciesToShow">
        <h3>{{ item.currency }}</h3>
        <h4>{{ item.code }}</h4>
        <h2>{{ item.mid }}</h2>
        <!-- button to show modal, one item is removed after accept -->
        <div v-on:click="showModal(item.code)" class="remove">
          <div class="minus"></div>
        </div>
      </li>
    </ul>
    <!-- button to show modal, all items are removed after accept -->
    <button v-on:click="showModal('all')">Remove All</button>
    <!-- on start modal is not visible -->
    <Modal v-if="modalToggle" />
  </div>
</template>

<script>
  import Modal from './Modal.vue';

  export default {
    components: {
      Modal
    },
    //all methods and computed are explain in store.js file
    methods: {
      showModal(code) {
        this.$store.commit('showModal', code);
      }
    },
    computed: {
      modalToggle() {
        return this.$store.state.modalToggle;
      },
      currenciesToShow() {
        return this.$store.state.currenciesToShow;
      }
    }
  };
</script>

<style lang="sass" scoped>
  #Currencies
    margin-bottom: 50px
    ul
      display: flex
      justify-content: center
      flex-wrap: wrap
      max-width: 600px
      margin: 0px auto 0px
      list-style: none
      li
        position: relative
        width: 250px
        margin: 20px
        padding: 20px
        text-align: left
        border: 2px solid #FFCA3A
        border-radius: 20px
        box-shadow: -6px -6px 10px 3px white, 6px 6px 10px 3px rgba(#A2B4C6,0.4)
        background-color: #fff
        animation: show-li 0.5s
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
          transition: 0.3s
          .minus
            width: 12px
            height: 3px
            background-color: #FFF
            margin: auto
          &:hover
            background-color: #FF0000
            transform: scale(1.2)
  @keyframes show-li
    from
      transform: scale(0)
    to
      transform: scale(1)
</style>
