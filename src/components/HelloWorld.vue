<template>
  <div class="hello">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from 'epubjs'

global.ePub = Epub
export default {
  name: 'HelloWorld',
  mounted () {
    this.book = new Epub('/2016.epub')
    this.book.renderTo('read', {
      width: window.innerWidth,
      height: window.innerHeight
    }).display()
    console.log(this.book)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
