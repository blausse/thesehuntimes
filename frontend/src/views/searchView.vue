<template>
  <div class="searchView">
    <searchComp></searchComp>
  </div>
</template>

<script>
import searchComp from '@/components/searchComp.vue'
  export default {
    name: 'searchView',

    components: {
      searchComp
    },
  }
</script>