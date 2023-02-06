<template>
<div class="side-box">
    <nav class="nav-box">
      <div v-for="nav in navigators" :key="nav.name" class="nav-item">
        <div @click="sideOff"><router-link :to ="{name:'theme',params:{title:nav.name}}" class="nav-link">{{nav.name}}</router-link></div>
        <ul class="sub-menu">
          <li v-if="nav.sub1" @click="sideOff"><router-link :to="{name:'detail',params:{subject:nav.sub1,title:nav.name}}">{{nav.sub1}}</router-link></li>
          <li v-if="nav.sub2" @click="sideOff"><router-link :to="{name:'detail',params:{subject:nav.sub2,title:nav.name}}">{{nav.sub2}}</router-link></li>
          <li v-if="nav.sub3" @click="sideOff"><router-link :to="{name:'detail',params:{subject:nav.sub3,title:nav.name}}">{{nav.sub3}}</router-link></li>
          <li v-if="nav.sub4" @click="sideOff"><router-link :to="{name:'detail',params:{subject:nav.sub4,title:nav.name}}">{{nav.sub4}}</router-link></li>
          <li v-if="nav.sub5" @click="sideOff"><router-link :to="{name:'detail',params:{subject:nav.sub5,title:nav.name}}">{{nav.sub5}}</router-link></li>
          <li v-if="nav.sub6" @click="sideOff"><router-link :to="{name:'detail',params:{subject:nav.sub6,title:nav.name}}">{{nav.sub6}}</router-link></li>
        </ul>
      </div>
    </nav>
    <p class="off" @click="sideOff"><v-icon class="icon">mdi-close</v-icon></p>
</div>
</template>

<script>
export default {
  name: 'sideView',
  data(){
    return{
    navigators:[
    {name: 'WEB',href:'/web',sub1:'Front',sub2:'Back',sub3:'Devops',sub4:'Reference',sub5:'To Be Done',sub6:''},
    {name: 'SECURITY',href:'/security',sub1:'System',sub2:'Method',sub3:'Type',sub4:'',sub5:'',sub6:''},
    {name: 'GLOBAL TREND',href:'/global',sub1:'Rank of programming language',sub2:'Must do it',sub3:'',sub4:'',sub5:'',sub6:''},
    {name: 'BLOCK CHAIN',href:'/blockchain',sub1:'Definition',sub2:'Crypto',sub3:'Block',sub4:'Hash',sub5:'Mine',sub6:'Bitcoin'},
    {name: 'AI-ML',href:'/aiml',sub1:'Jarvis',sub2:'Tech',sub3:'Open AI',sub4:'',sub5:'',sub6:''},
    {name: 'MORE',href:'/more',sub1:'',sub2:'',sub3:'',sub4:'',sub5:'',sub6:''},
    ]
    }},
  methods:{
    sideOff(){
      var side = document.querySelector('.side-box');
      return side.classList.toggle('on')
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-item{display:flex;flex-direction: column;text-align:left;padding:1rem 0 0 1rem}
.side-link{padding:0.5rem 0}
.side-box{position: fixed;left:-150px;top: 0;transition:.3s;width:150px;z-index:5;background:#fff;height:100%;border-right:1px solid #121212}
.off{cursor:pointer;margin-top:1rem;position:absolute;top:-0.7rem;right:0.5rem}
.off .icon{color:#2c3e50}
.off .icon:hover{color:#42b983;}
ul{list-style-type: none;padding:0}
.nav-link{align-items:flex-start}
.sub-menu{font-size:0.6rem;padding-left:1rem}
</style>
