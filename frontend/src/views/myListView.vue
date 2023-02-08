<template>
  <div class="myListView">
    <myListComp></myListComp>
  </div>
</template>

<script>
import myListComp from '@/components/myListComp.vue'
  export default {
    name: 'javisView',

    components: {
      myListComp
    },
  }
</script>