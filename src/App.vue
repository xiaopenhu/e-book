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

<style scoped>
.text {
  font-family: 'Days One';
  font-size: 20px;
  color: orange;
}
</style>
