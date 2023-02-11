<template>

<div class="detailArticle">
  <div class="detail-left">
    <div class="detail-header">
    <p class="theme">Result of Search</p>
    <p class="detail">
      <span class="search-box">: {{this.$route.params.content}}</span>
      </p>
    <!-- <p class="sub-title">relating to or denoting the part of a computer system or application with which the user interacts directly.</p> -->
    <v-btn x-small id="btn" @click="back">
      <v-icon class="icon">mdi-arrow-left</v-icon>
    </v-btn>
  </div>
    <search-article class="basic-article" :content="this.$route.params.content"></search-article>
  </div>
  <div class="detail-right">
  <side-article class="side-article"></side-article>
  </div>
</div>

</template>

<script>
import sideArticle from '@/components/sideArticle.vue'
import SearchArticle from './searchArticle.vue'


export default {
  name: 'detailArticle',
  data(){
    return{

  }},
  methods:{
    back(){
    history.back()
  },
  },
  components:{
    sideArticle,
    SearchArticle,
  }
}
</script>


<style scoped>
.detailArticle{max-width:1000px;margin:auto;display:flex}
.detail-header{text-align:left;padding-bottom:1rem}
.sub-title{font-size:0.8rem;font-family: "imperial";}
.theme{font-size:0.6rem;font-weight:bold}
.detail{font-size:2rem;font-family: "karnakPro-condensedBlack";font-weight:bold;color:#121212;letter-spacing: 1px;}
.detail-left{display:flex;padding:1rem 1rem 0 0;flex-direction: column;width:70%;border-right:1px solid #dfdfdf}
.basic-article{width:100%}
.detail-right{width:30%;padding-left:1rem}
.side-article{width:100%}

#btn{margin-top:1rem;box-sizing: border-box;padding:1rem;background: #fff;box-shadow:none;border:1px solid #c9c9c9;border-radius:20px}

*:focus{
  outline:none
}

/* PC (해상도 1024px)*/
/* @media all and (min-width:1024px) {} */

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width:768px) and (max-width:1023px) {
  .detailArticle{flex-direction: column;}
  .detail-left{width:100%;border-right:none;padding-right:0}
  .detail-right{width:100%;padding-left:0}
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width:767px) {
  .detailArticle{flex-direction: column;}
  .detail-left{width:100%;border-right:none;padding-right:0}
  .detail-right{width:100%;padding-left:0}
}
</style>
