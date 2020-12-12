<template>
  <div id="Footer">
    <div id="footerContainer">
      <a href="mailto:piotr.kalman85@gmail.com"
        ><span>© Piotr Kalman 2020</span></a
      >
      <a href="https://github.com/Morswin19/vue_currency_app" target="_blank"
        ><img src="../assets/g963.png"
      /></a>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="sass" scoped>
  #Footer
    width: 100%
    height: 75px
    background-image: linear-gradient(90deg, #666, #222)
    display: flex

    box-shadow: 0px -6px 10px 3px rgba(#A2B4C6,0.4)
    #footerContainer
      width: 90%
      display: flex
      justify-content: flex-end
      align-items: center
      margin: 0 auto
      a
        text-decoration: none
      span
        margin-right: 20px
        color: #aaaaaa
        &:hover
          color: #fff
      img
        height: 35px
        width: 35px
        opacity: 0.6
        transition: 0.2s
        &:hover
          opacity: 1
</style>
