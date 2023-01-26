<template>
  <div class="themeView">
    <theme-article></theme-article>
  </div>
</template>

<script>
import themeArticle from '@/components/themeArticle.vue'


  export default {
    name: 'themeView',

    components: {
      themeArticle,
    },
  }
</script>
<style scoped>
.themeView{max-width:1000px;margin:auto;padding-top:12px}
</style>