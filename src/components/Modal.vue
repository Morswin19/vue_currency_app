<template>
  <div id="Modal">
    <div id="modalContainer">
      <h2>Do you want to remove {{ currencyToRemove }}?</h2>
      <div id="buttons">
        <!-- buttons for accept or cancel currency removal -->
        <button class="modalButton" v-on:click="acceptModal">YES</button>
        <button class="modalButton" v-on:click="cancelModal">NO</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    //all methods and computed are explain in store.js file
    computed: {
      currencyToRemove() {
        return this.$store.state.currencyToRemove;
      }
    },
    methods: {
      acceptModal() {
        this.$store.state.modalToggle = false;
        if (this.$store.state.currencyToRemove !== 'all') {
          this.$store.commit(
            'removeElement',
            this.$store.state.currencyToRemove
          );
        } else {
          this.$store.commit('removeAllElements');
        }
      },
      cancelModal() {
        this.$store.state.modalToggle = false;
      }
    }
  };
</script>

<style lang="sass" scoped>
  #Modal
      position: fixed
      top: 0
      left: 0
      display: flex
      justify-content: center
      align-items: center
      width: 100vw
      height: 100vh
      background: rgba(#000000, 0.3)
      #modalContainer
          display: flex
          flex-direction: column
          justify-content: space-around
          height: 80%
          width: 80%
          min-width: 250px
          min-height: 250px
          max-width: 400px
          max-height: 400px
          padding: 20px
          background-color: #ffffff
          border-radius: 20px
          border: 2px solid lightblue
          #buttons
            display: flex
            margin: 0 auto
            .modalButton
                width: 100px
                height: 40px
                margin: 10px 20px
                border-radius: 20px
                border: 2px solid #ffffff
                background: #666666
                color: #ffffff
                font-weight: 700
                font-size: 17px
                letter-spacing: 3px
                transition: 0.3s
                cursor: pointer
                outline: none
                &:hover
                    border: 2px solid #FFCA3A
                    background-color: #ffffff
                    color: #000000
</style>
