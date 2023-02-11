<template>
<div class="container">
  <div class="upper_article">
    <div class="main">
      <main-article />
      <img-article />
    </div>
    <side-article class="side" />
  </div>
  <div class="lower_article">
    <line-article/>
    <more-article/>
  </div>
</div>
</template>

<script>
  import mainArticle from '@/components/mainArticle.vue'
  import sideArticle from '@/components/sideArticle.vue'
  import imgArticle from '@/components/imgArticle.vue'
  import moreArticle from '@/components/moreArticle.vue'
  import lineArticle from '@/components/lineArticle.vue'

  export default {
    name: 'HomeView',

    components: {
      mainArticle,
      sideArticle,
      imgArticle,
      moreArticle,
      lineArticle
    },
  }
</script>
<style scoped>
.upper_article{
  display:grid;
  grid-auto-columns: repeat(4,1fr);
  grid-template-areas:
  'a a a b';
  grid-gap:1rem;
  margin-bottom:1rem
}
.main{grid-area: a; border-right:1px solid #dfdfdf;padding-right:1rem}
.side{grid-area:b}
.container{max-width:1024px}
h2{text-align:left;padding:1rem 0;font-weight:bold}

/* PC (해상도 1024px)*/
/* @media all and (min-width:1024px) {} */

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width:768px) and (max-width:1023px) {
  .upper_article{
    display:flex;flex-direction: column;
  }
  .main{
    border-right:none;padding-right:0
  }
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width:767px) {
  .upper_article{
    display:flex;flex-direction: column;
  }
  .main{
    border-right:none;padding-right:0
  }
}

</style>