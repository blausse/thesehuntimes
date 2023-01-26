<template>
<div>
<div class="main-article" v-for="img,i in articles" :key="i">
  <div class="date">{{img.date}}</div>
  <div class="script-box">
    <div class='mainSc'>{{img.mainSc}}</div>
    <ul class="subSc">
      <li v-if="img.subSc1">{{img.subSc1}}</li>
      <li v-if="img.subSc2">{{img.subSc2}}</li>
      <li v-if="img.subSc3">{{img.subSc3}}</li>
      <li v-if="img.subSc4">{{img.subSc4}}</li>
    </ul>
    <div class="view">{{img.view}}</div>
  </div>
  <div class='mainImg'><img :src="require(`@/assets/images/${img.src}.png`)" alt=""></div>
</div>
</div>
</template>
<script>
export default {
  name: 'imgArticle',
  data(){
    return{
      articles:[
        {mainSc:"SvelteKit is a framework for rapidly developing robust, performant web applications using Svelte.",subSc1:"npm create svelte@latest my-app",subSc2:"",subSc3:"",subSc4:"",src:"sveltekit",view:"10m READ",date:"January 17, 2023",caption:"",subject:''},
        {mainSc:"What is JSON Web Token?",subSc1:"Header",subSc2:"",subSc3:"",subSc4:"",src:"jwt",view:"10m READ",date:'January 17, 2023',caption:"",subject:''},
        {mainSc:"How to build a real-time chatroom with Firebase and React (Hooks)",subSc1:"Scaffolding",subSc2:"",subSc3:"",subSc4:"",src:"firebase",view:"10m READ",date:'January 17, 2023',caption:"",subject:''},
        {mainSc:"What is JSON Web Token?",subSc1:"Header",subSc2:"",subSc3:"",subSc4:"",src:"aws",view:"10m READ",date:'January 17, 2023',caption:"",subject:''},
        {mainSc:"What is Postman?",subSc1:"Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.",subSc2:"",subSc3:"",subSc4:"",src:"postman",view:"10m READ",date:'January 17, 2023',caption:"",subject:''},
        
      ],
  }},
  methods:{
  
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-article{display:flex;justify-content: space-between;padding:1rem 0;border-top:1px solid #121212}
.mainImg{width:100%;max-width:200px;}
img{width:100%;height:100%;display:block;}
.script-box{text-align:left;margin-right:1rem;display:flex;flex-direction: column;justify-content: space-between;width:50%}
.view{color:#acacac;font-size:0.5rem;}
.mainSc{color:#121212;font-family: "cheltenham";font-weight:bold;font-size:0.9rem;}
.subSc{text-align:left;color:#5a5a5a;padding:0;font-size:0.8rem;font-family: "imperial";}

ul{list-style: none;}

.date{padding:0.2rem 1rem 0 0;font-size:0.7rem;}
</style>