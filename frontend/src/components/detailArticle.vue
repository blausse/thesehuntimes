<template>
<div class="detailArticle">
  <div class="detail-left">
  <div class="detail-header">
    <p class="theme">{{$route.params.title}}</p>
    <p class="detail">
      <span>{{$route.params.subject}}</span>
      </p>
    <p class="sub-title">relating to or denoting the part of a computer system or application with which the user interacts directly.</p>
    <v-btn x-small id="btn" @click="back">
      <v-icon class="icon">mdi-arrow-left</v-icon>
    </v-btn>
  </div>
  <basic-article class="basic-article" :subject="$route.params.subject"></basic-article>
  </div>
  <div class="detail-right">
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
    back(){
    history.back()
  },
  },
  components:{
    basicArticle,
    sideArticle,
  }
}
</script>


<style scoped>
.detailArticle{max-width:1000px;margin:auto;display:flex;padding-bottom:1rem}
.detail-header{text-align:left;padding-bottom:1rem}
.sub-title{font-size:0.8rem;font-family: "imperial";}
.theme{font-size:0.6rem;font-weight:bold}
.detail{font-size:2rem;font-family: "karnakPro-condensedBlack";font-weight:bold;color:#121212;letter-spacing: 1px;}
.detailArticle{max-width:1000px;margin:auto;display:flex;padding-top:1rem}
.basic-article{padding-right:1rem;width:100%}

.detail-left{width:70%;display:flex;flex-direction: column;border-right:1px solid #dfdfdf}

.detail-right{width:30%;padding-left:1rem}

.side-article{width:100%}

#btn{margin-top:1rem;box-sizing: border-box;padding:1rem;background: #fff;box-shadow:none;border:1px solid #c9c9c9;border-radius:20px}

/* PC (해상도 1024px)*/
/* @media all and (min-width:1024px) {} */

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width:768px) and (max-width:1023px) {
  .detailArticle{flex-direction: column;}
  .detail-left{width:100%;border-right:none;}
  .detail-right{padding-left:0;width:100%}
  .basic-article{width:100%;padding-right:0}
  .side-article{width:100%}
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width:767px) {
  .detailArticle{flex-direction: column;}
  .detail-left{width:100%;border-right:none;}
  .detail-right{padding-left:0;width:100%}
  .basic-article{width:100%;padding-right:0}
  .side-article{width:100%}
}
</style>
