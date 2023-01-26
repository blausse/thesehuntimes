<template>
  <div class="each">
    <eachArticle></eachArticle>
  </div>
</template>

<script>
import eachArticle from '@/components/eachArticle.vue'

  export default {
    name: 'eachView',

    components: {
      eachArticle
    },
  }
</script>