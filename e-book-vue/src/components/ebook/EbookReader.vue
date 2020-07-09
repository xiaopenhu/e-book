<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Epub from 'epubjs'
global.ePub = Epub
export default {
  computed: {
    ...mapGetters(['fileName'])
  },
  methods: {
    initEpub: function () {
      const url = 'http://localhost:9000/epub/' + this.fileName + '.epub'
      this.book = new Epub(url)
      this.rendition = this.book.renderTo('read', {
        width: innerWidth,
        height: innerHeight
      })
      this.rendition.display()
      console.log(this.book)
      console.log(this.rendition)
    }
  },
  mounted () {
    this.$store.dispatch('setFileName', this.$route.params.fileName.split('|').join('/')).then(() => {
      this.initEpub()
    })
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global.scss";
</style>
