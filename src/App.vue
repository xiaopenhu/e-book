<template>
  <div id="app">
    <div id="nav">
      <p class="text">abcd</p>
      <p>abcd</p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>
<style lang="scss" scoped>
  @import "./assets/styles/global";
  .text {
    font-family: 'Days One';
    font-size: px2rem(20);
    color: orange;
  }
</style>
