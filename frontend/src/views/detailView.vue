<template>
  <div class="detail">
    <detailArticle></detailArticle>
  </div>
</template>

<script>
import detailArticle from '@/components/detailArticle.vue'

  export default {
    name: 'detailView',

    components: {
      detailArticle
    },
  }
</script>