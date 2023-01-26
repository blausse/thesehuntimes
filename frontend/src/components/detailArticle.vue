<template>
<div class="detailArticle">
  <div class="detail-header">
    <p class="theme">{{$route.params.theme}}</p>
    <p class="detail">{{$route.params.subject}}</p>
    <p class="sub-title">relating to or denoting the part of a computer system or application with which the user interacts directly.</p>
  </div>
  <div class="detail-body">
    <basic-article class="img-article"></basic-article>
    <side-article class="side-article"></side-article>
  </div>
</div>
</template>

<script>
import basicArticle from '@/components/basicArticle.vue'
import sideArticle from '@/components/sideArticle.vue'


export default {
  name: 'detailArticle',
  data(){
    return{

  }},
  methods:{
  },
  components:{
    basicArticle,
    sideArticle,
  }
}
</script>


<style scoped>
.detailArticle{max-width:1000px;margin:auto}
.detail-header{text-align:left;padding-bottom:1rem}
.sub-title{font-size:0.8rem;font-family: "imperial";}
.theme{font-size:0.6rem;font-weight:bold}
.detail{font-size:2rem;font-family: "karnakPro-condensedBlack";font-weight:bold;color:#121212;letter-spacing: 1px;}
.detail-body{max-width:1000px;margin:auto;display:flex;border-top:1px solid #dfdfdf;padding-top:1rem}
.img-article{padding-right:1rem;width:70%}

.side-article{width:30%}
</style>
