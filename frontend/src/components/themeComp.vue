<template>
<div class="themeArticle">
  <div class="theme-header">
    <p class="theme">{{$route.params.title}}</p>
    <div class="header-box">
    <div v-for="nav in navigators" :key="nav.name" class="nav-item">
        <ul class="sub-menu">
          <li v-if="$route.params.title == nav.name && nav.sub1"><router-link :to="{name:'detail',params:{subject:nav.sub1,theme:nav.name}}" class="link">{{nav.sub1}}</router-link></li>
          <li v-if="$route.params.title == nav.name && nav.sub2"><router-link :to="{name:'detail',params:{subject:nav.sub2,theme:nav.name}}" class="link">{{nav.sub2}}</router-link></li>
          <li v-if="$route.params.title == nav.name && nav.sub3"><router-link :to="{name:'detail',params:{subject:nav.sub3,theme:nav.name}}" class="link">{{nav.sub3}}</router-link></li>
          <li v-if="$route.params.title == nav.name && nav.sub4"><router-link :to="{name:'detail',params:{subject:nav.sub4,theme:nav.name}}" class="link">{{nav.sub4}}</router-link></li>
          <li v-if="$route.params.title == nav.name && nav.sub5"><router-link :to="{name:'detail',params:{subject:nav.sub5,theme:nav.name}}" class="link">{{nav.sub5}}</router-link></li>
          <li v-if="$route.params.title == nav.name && nav.sub6"><router-link :to="{name:'detail',params:{subject:nav.sub6,theme:nav.name}}" class="link">{{nav.sub6}}</router-link></li>
        </ul>
      </div>
      </div>
  </div>
  <div class="theme-body">
    <div  class="img-article">
    <main-article :theme="$route.params.title"></main-article>
    <basic-article :theme="$route.params.title"></basic-article>
    </div>
    <side-article class="side-article" :theme="$route.params.title"></side-article>
  </div>
</div>
</template>

<script>
import basicArticle from '@/components/basicArticle.vue'
import sideArticle from '@/components/sideArticle.vue'
import mainArticle from '@/components/mainArticle.vue'


export default {
  name: 'themeArticle',
  data(){
    return{
      navigators:[
    {name: 'WEB',href:'/web',sub1:'Front',sub2:'Back',sub3:'Devops',sub4:'Reference',sub5:'To Be Done',theme:''},
    {name: 'SECURITY',href:'/security',sub1:'System',sub2:'Method',sub3:'Type',sub4:'',sub5:'',sub6:''},
    {name: 'GLOBAL TREND',href:'/global',sub1:'Rank of programming language',sub2:'Must do it',sub3:'',sub4:'',sub5:'',sub6:''},
    {name: 'BLOCK CHAIN',href:'/blockchain',sub1:'Definition',sub2:'Crypto',sub3:'Block',sub4:'Hash',sub5:'Mine',sub6:'Bitcoin'},
    {name: 'AI-ML',href:'/aiml',sub1:'Jarvis',sub2:'Tech',sub3:'Open AI',sub4:'',sub5:'',sub6:''},
    {name: 'MORE',href:'/more',sub1:'System',sub2:'',sub3:'',sub4:'',sub5:'',sub6:''},]
  }},
  methods:{
  },
  components:{
    basicArticle,
    sideArticle,
    mainArticle
  }
}
</script>


<style scoped>
.themeArticle{max-width:1000px;margin:auto}
.theme-header{text-align:left;padding-bottom:1rem}
.sub-title{font-size:0.8rem;font-family: "imperial";}
.theme{font-size:2rem;font-family: "karnakPro-condensedBlack";font-weight:bold;color:#121212;letter-spacing: 1px;text-align:left}
.theme-body{max-width:1000px;margin:auto;display:flex;padding-top:1rem}
.img-article{padding-right:1rem;width:70%;border-right:1px solid #dfdfdf}

.side-article{width:30%;padding-left:1rem}

ul{list-style:none;padding:0}
a{text-decoration:none;}
.sub-menu{display:flex;}
.sub-menu li{margin-right:1rem}
.header-box{border-top:1px solid #ededed;border-bottom:1px solid #121212}
.sub-menu .link{color:#2e3e50}
.sub-menu .link:hover{color:#42b983}

/* PC (해상도 1024px)*/
/* @media all and (min-width:1024px) {} */

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width:768px) and (max-width:1023px) {
  .theme-body{flex-direction: column;}
  .img-article{width:100%}
  .side-article{width:100%}
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width:767px) {
  .theme-body{flex-direction: column;}
  .img-article{width:100%}
  .side-article{width:100%}
}
</style>
