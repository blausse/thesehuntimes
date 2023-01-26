<template>
<div class="footer-wrap">
  <div class="footer-box">
  <div class="logo-box"><img :src="require(`@/assets/images/logo.svg`)" alt=""></div>
  <div class="mid-footer">
    <nav class="nav-box">
      <div v-for="nav in navigators" :key="nav.name" class="nav-item">
        <router-link :to ="{name:'theme',params:{title:nav.name}}" class="nav-link">{{nav.name}}</router-link>
        <ul class="sub-menu">
<li v-if="nav.sub1"><router-link :to="{name:'detail',params:{subject:nav.sub1,theme:nav.name}}">{{nav.sub1}}</router-link></li>
          <li v-if="nav.sub2"><router-link :to="{name:'detail',params:{subject:nav.sub2,theme:nav.name}}">{{nav.sub2}}</router-link></li>
          <li v-if="nav.sub3"><router-link :to="{name:'detail',params:{subject:nav.sub3,theme:nav.name}}">{{nav.sub3}}</router-link></li>
          <li v-if="nav.sub4"><router-link :to="{name:'detail',params:{subject:nav.sub4,theme:nav.name}}">{{nav.sub4}}</router-link></li>
          <li v-if="nav.sub5"><router-link :to="{name:'detail',params:{subject:nav.sub5,theme:nav.name}}">{{nav.sub5}}</router-link></li>
          <li v-if="nav.sub6"><router-link :to="{name:'detail',params:{subject:nav.sub6,theme:nav.name}}">{{nav.sub6}}</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="side-footer">
      <div class="side-top">
        <p>SUPPORT</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
      <div class="side-btm">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
    </div>
    </div>
    <div class="footer-script">
      <p>&copy;The Se Hun Times</p>
      <p v-for="footerSc,i in footerScs" :key="i">{{footerSc.name}}</p>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'footerView',
  data(){
    return{
    home:{name:'home',href:'/'},
    jarvis:{name:'jarvis',href:'/jarvis'},
    navigators:[
    {name: 'WEB',href:'/web',sub1:'Front',sub2:'Back',sub3:'Devops',sub4:'Reference',sub5:'To Be Done',sub6:''},
    {name: 'SECURITY',href:'/security',sub1:'System',sub2:'Method',sub3:'Type',sub4:'',sub5:'',sub6:''},
    {name: 'GLOBAL TREND',href:'/global',sub1:'Rank of Programming Languages',sub2:'Must do it',sub3:'',sub4:'',sub5:'',sub6:''},
    {name: 'BLOCK CHAIN',href:'/blockchain',sub1:'Definition',sub2:'Crypto',sub3:'Block',sub4:'Hash',sub5:'Mine',sub6:'Bitcoin'},
    {name: 'AI-ML',href:'/aiml',sub1:'Jarvis',sub2:'Tech',sub3:'Open AI',sub4:'',sub5:'',sub6:''},
    {name: 'MORE',href:'/more',sub1:'System',sub2:'',sub3:'',sub4:'',sub5:'',sub6:''},
  ],
    footerScs:[
    ]
  }},
  methods:{
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-wrap{border-top:1px solid #121212;padding:1rem 0;}
.footer-box{margin:auto;max-width:1000px}

.logo-box{width:100%;max-width:1000px;margin:auto;text-align: left;}
.logo-box img{width:30%;}

.mid-footer{width:100%;max-width:1000px;display:flex;justify-content: space-between;border-bottom:1px solid #dfdfdf;padding-bottom:1rem}

.nav-box{width:84%;display:flex;border-right:1px solid #dfdfdf;padding-right:1rem;box-sizing: border-box;justify-content: space-between;}
.nav-item{text-align: left;}
.nav-link{font-size:0.8rem;}

.side-footer{width:16%;display:flex;flex-direction:column;justify-content: space-between;padding-left:1rem;text-align:left;font-size:0.8rem}
.side-top{border-bottom:1px solid #dfdfdf;width:100%}
.side-btm{width:100%}

ul{list-style: none;padding:0}
.sub-menu{font-size:0.6rem}
.sub-menu li{padding:0.1rem 0}
.footer-script{font-size:0.8rem}
</style>
