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
    prevPage: function () {
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    nextPage: function () {
      if (this.rendition) {
        this.rendition.next()
      }
    },
    toggleTitleAndMenu: function () {},
    initEpub: function () {
      const url = 'http://localhost:9000/epub/' + this.fileName + '.epub'
      this.book = new Epub(url)
      this.rendition = this.book.renderTo('read', {
        // 原生epubjs分页配置
        // flow: 'paginated',
        // manager: 'continuous',
        // snap: true,
        // 原生epubjs分页配置
        methods: 'default',
        width: innerWidth,
        height: innerHeight
      })
      this.rendition.display()
      this.rendition.on('touchstart', event => {
        this.touchStartX = event.changedTouches[0].clientX
        this.touchStartTime = event.timeStamp
      })
      this.rendition.on('touchend', event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX
        const time = event.timeStamp - this.touchStartTime
        if (time < 500 && offsetX > 40) {
          this.prevPage()
        } else if (time < 500 && offsetX < -40) {
          this.nextPage()
        } else {
          this.toggleTitleAndMenu()
        }
        event.stopPropagation()
      }, false)
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
