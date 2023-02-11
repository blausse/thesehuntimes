<template>
<div class="footer-wrap">
  <div class="footer-box">
  <div class="logo-box"><img :src="require(`@/assets/images/logo.png`)" alt=""></div>
  <div class="mid-footer">
    <nav class="nav-box">
      <div v-for="nav in navigators" :key="nav.name" class="nav-item">
        <router-link :to ="{name:'theme',params:{title:nav.name}}" class="nav-link">{{nav.name}}</router-link>
        <ul class="sub-menu">
<li v-if="nav.sub1"><router-link :to="{name:'detail',params:{subject:nav.sub1,title:nav.name}}">{{nav.sub1}}</router-link></li>
          <li v-if="nav.sub2"><router-link :to="{name:'detail',params:{subject:nav.sub2,title:nav.name}}">{{nav.sub2}}</router-link></li>
          <li v-if="nav.sub3"><router-link :to="{name:'detail',params:{subject:nav.sub3,title:nav.name}}">{{nav.sub3}}</router-link></li>
          <li v-if="nav.sub4"><router-link :to="{name:'detail',params:{subject:nav.sub4,title:nav.name}}">{{nav.sub4}}</router-link></li>
          <li v-if="nav.sub5"><router-link :to="{name:'detail',params:{subject:nav.sub5,title:nav.name}}">{{nav.sub5}}</router-link></li>
          <li v-if="nav.sub6"><router-link :to="{name:'detail',params:{subject:nav.sub6,title:nav.name}}">{{nav.sub6}}</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="side-footer">
      <div class="side-top">
        <p>SHTCo</p>
        <p>Help</p>
        <p>Contact Us</p>
        <p>Advertise</p>
        <p>Site Map</p>
      </div>
      <div class="side-btm">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Subscription</p>
        <p>Work with us</p>
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
    {name: 'WEB',sub1:'Front',sub2:'Back',sub3:'Devops',sub4:'Reference',sub5:'To Be Done',sub6:''},
    {name: 'SECURITY',sub1:'System',sub2:'Method',sub3:'Type',sub4:'',sub5:'',sub6:''},
    {name: 'GLOBAL TREND',sub1:'Rank of Programming Languages',sub2:'Must do it',sub3:'',sub4:'',sub5:'',sub6:''},
    {name: 'BLOCK CHAIN',sub1:'Definition',sub2:'Crypto',sub3:'Block',sub4:'Hash',sub5:'Mine',sub6:'Bitcoin'},
    {name: 'AI-ML',sub1:'Jarvis',sub2:'Tech',sub3:'Open AI',sub4:'',sub5:'',sub6:''},
    {name: 'MORE',sub1:'System',sub2:'',sub3:'',sub4:'',sub5:'',sub6:''},
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
.footer-wrap{border-top:1px solid #121212;padding:1rem 0;margin-top:1rem}
.footer-box{margin:auto;max-width:1000px}

.logo-box{width:100%;max-width:1000px;margin:auto;text-align: left;}
.logo-box img{width:30%;margin-right:auto}

.mid-footer{width:100%;max-width:1000px;display:flex;justify-content: space-between;border-bottom:1px solid #dfdfdf;padding-bottom:1rem}

.nav-box{width:84%;display:flex;border-right:1px solid #dfdfdf;padding-right:1rem;box-sizing: border-box;justify-content: space-between;}
.nav-item{text-align: left;}
.nav-link{font-size:0.8rem;}

.side-footer{width:16%;display:flex;flex-direction:column;justify-content: space-between;padding-left:1rem;text-align:left;font-size:0.8rem}
.side-top{border-bottom:1px solid #dfdfdf;width:100%;font-size:0.5rem;display:flex;flex-direction:column;gap:0.3rem;padding: 0.3rem 0}
.side-top p,.side-btm p{cursor:pointer}
.side-top p:hover,.side-btm p:hover{color:#42b983}
.side-btm{width:100%;font-size:0.5rem;display:flex;flex-direction: column;gap:0.3rem;padding:0.3rem 0}


ul{list-style: none;padding:0}
.sub-menu{font-size:0.6rem}
.sub-menu li{padding:0.1rem 0}
.footer-script{font-size:0.8rem}
</style>
