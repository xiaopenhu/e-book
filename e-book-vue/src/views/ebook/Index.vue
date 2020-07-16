<template>
  <div class="ebook">
    <EbookTitle/>
    <EbookReader/>
  </div>
</template>
<script>
import EbookReader from '../../components/ebook/EbookReader'
import EbookTitle from '../../components/ebook/EbookTitle'
export default {
  components: {
    EbookReader,
    EbookTitle
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global.scss";
</style>
