<template>
<div class="main-article">
  <article class="article-a">
    <img :src="require(`@/assets/images/${sideTop.src}.png`)" alt="">
    <div class="main">{{sideTop.mainSc}}</div>
    <div class="sub">{{sideTop.subSc1}}</div>
    <p class="view">{{sideTop.view}}</p>
  </article>
  <div class="article-box">
  <article class="article-b">
  <img :src="require(`@/assets/images/${sideRow1.src}.png`)" alt="">
    <div class="main">{{sideRow1.mainSc}}</div>
    <div class="view">{{sideRow1.view}}</div>
  </article>
  <article class="article-c">
    <img :src="require(`@/assets/images/${sideRow2.src}.png`)" alt="">
    <div class="main">{{sideRow2.mainSc}}</div>
    <div class="view">{{sideRow2.view}}</div>
  </article>
</div>
<h2>Opinion</h2>
<article v-for="box,i in opinion" :key="i" class="article-d">
<div class="opinion-box">
<div class="main">{{box.mainSc}}</div>
<div class="view">{{box.view}}</div>
</div>
<img :src="require(`@/assets/images/${box.src}.png`)" alt="">
</article>
<div class="slide-box">
<p>slide 제작 예정</p>
</div>
</div>
</template>

<script>


export default {
  name: 'sideArticle',
  data(){
    return{
      opinion:[
        {mainSc:'Why You Should Choose TypeScript Over JavaScript?',subSc1:'',subSc2:'',subSc3:'',subSc4:'',view:'10m READ',src:'typescript',date:'',caption:"",subject:'front'},
        {mainSc:'Remix로 쉽게 하는 리액트 서버사이드 렌더링',subSc1:'',subSc2:'',subSc3:'',subSc4:'',view:'3m READ',src:'remix',date:'',caption:"",subject:'front'},
        {mainSc:'Automate your workflow from idea to production',subSc1:'',subSc2:'',subSc3:'',subSc4:'',view:'6m READ',src:'git',date:'',caption:"",subject:''},
        {mainSc:'Why you should care about Docker?',subSc1:'',subSc2:'',subSc3:'',subSc4:'',view:'7m READ',src:'docker',date:'',caption:"",subject:'to be done'},
        {mainSc:'How Flutter improved your App development process',subSc1:'',subSc2:'',subSc3:'',subSc4:'',view:'10m READ',src:'flutter',date:'',caption:"",subject:''},
        {mainSc:'Why Now Is The Time To Invest In Crypto And Blockchain',subSc1:'',subSc2:'',subSc3:'',subSc4:'',view:'10m READ',src:'blockchain',date:'',caption:"",subject:'back'},
      ],
      sideTop:{mainSc:"The React Framework for Production",subSc1:"Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",subSc2:'',subSc3:'',subSc4:'',view:"10m READ",src:"next",date:'',caption:'',subject:'front'},
      sideRow1:{mainSc:"VIM: a free and open-source, screen-based text editor program",subSc1:"",subSc2:'',subSc3:'',subSc4:'',view:"10m READ",src:"vim",date:'',caption:'',subject:'reference'},
      sideRow2:{mainSc:"Why Spring?",subSc1:"",subSc2:'',subSc3:'',subSc4:'',view:"10m READ",src:"spring",date:'',caption:'',subject:'back'}
  }},
  methods:{
  
    },
    components:{
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-article{padding-left:1rem;border-left:1px solid #dfdfdf;display:flex;flex-direction:column}
img{display:block;width:100%;height:100%;max-height:200px}
.main{text-align:left;font-size:0.8rem;color:#121212;font-family: "cheltenham";}
.sub{text-align:left;font-size:0.6rem;color:#5a5a5a;font-family:"imperial"}
.view{text-align:left;color:#acacac;font-size:0.5rem}
h2{text-align: left;font-weight:bold}
.article-box{display:flex;padding: 1rem 0;border-bottom:1px solid #121212}

.article-a{border-bottom:1px solid #dfdfdf;display:flex;flex-direction:column;justify-content: space-between;}

.article-b{display:flex;flex-direction: column;justify-content: space-between;max-height:250px;width:50%;padding-right:1rem}
.article-b img{height:100px;}

.article-c{display:flex;flex-direction: column;justify-content: space-between;max-height:250px;border-left:1px solid #dfdfdf;padding-left:1rem;width:50%}
.article-c img{height:100px;}

.article-d{padding: 1rem 0;border-bottom:1px solid #dfdfdf;display:flex;justify-content: flex-end;}
.article-d img{width:50%}
.opinion-box{margin-right:1rem;display:flex;flex-direction:column;justify-content: space-between;}

.slide-box{padding:1rem 0;border:1px solid black;display:flex;width:100%}
</style>
