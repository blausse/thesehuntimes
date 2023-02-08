<template>
  <div class="themeView">
    <theme-comp></theme-comp>
  </div>
</template>

<script>
import themeComp from '@/components/themeComp.vue'


  export default {
    name: 'themeView',

    components: {
      themeComp,
    },
  }
</script>
<style scoped>
.themeView{max-width:1000px;margin:auto;padding-top:12px}
</style>