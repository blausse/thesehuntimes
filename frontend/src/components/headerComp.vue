<template>
<div class="header-wrap">
  <div class="upper-header">
    <div class="top-header">
      <div class="search-box">
        <svg class="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg><input type="text" class="search-txt" placeholder="Search">
        </div>
      <div class="date-box"><p class="date">{{todayDate()}}</p><p class="user">User Counts : {{getData()}}</p>
      <!-- <p class="user">Article Counts : {{getArticle()}}</p> -->
      </div>
      <div class="account-box">
        <accountComp v-if="!userInfo"/>
        <myComp v-else/>
        </div>
    </div>
    <div class="mid-header">
      <div class="btn-box"><svg @click="gnb" class="left-bar-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></div>
      <div class="logo-box"><router-link :to="home.href" class="logo-link" exact><img src="@/assets/images/logo.svg" alt="the sehun times" class="logo"></router-link></div>
      <div class="jarvis-box">
        <router-link :to="jarvis.href">
        <img src="@/assets/images/jarvis.png" alt="chatbot ai" class="jarvis">
        </router-link>
        </div>
    </div>
  </div>
  <div class="lower-header">
    <nav class="nav-box">
      <div v-for="nav in navigators" :key="nav.name" class="nav-item">
        <router-link :to ="{name:'theme',params:{title:nav.href}}" class="nav-link">{{nav.name}}</router-link>
      </div>
    </nav>
  </div>
  <gnbComp></gnbComp>
</div>
</template>

<script>
import { getDatabase, ref, onValue} from "firebase/database";
import accountComp from "@/components/accountComp.vue";
import myComp from "@/components/myComp.vue";
import gnbComp from "@/components/gnbComp.vue";
export default {
  name: 'headerView',
  data(){
    return{
    home:{name:'home',href:'/'},
    jarvis:{name:'jarvis',href:'/jarvis'},
    navigators:[
      {name: 'Web',href:'WEB'},
      {name: 'Security',href:'SECURITY'},
      {name: 'Global Trend',href:'GLOBAL TREND'},
      {name: 'Block Chain',href:'BLOCK CHAIN'},
      {name: 'AI-ML',href:'AI-ML'},
  ],
  userInfo: this.$session.get('userInfo') ? this.$session.get('userInfo') : '',
  userCount:''
  }},
  methods:{
    todayDate: function(){
      var date = new Date();
      var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      var month = ['January','Febrary','March','Aprill','May','June','July','August','September','October','November','December'];
      return weekday[date.getDay()]+", "+month[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()
    },
    gnb(){
        var side = document.querySelector('.side-box');
        return side.classList.toggle('on');
    },
    getData(){
          const db = getDatabase();
          const userDB = ref(db, 'users/');
          onValue(userDB, (snapshot) => {
          const data = snapshot.val();
          const userData = Object.values(data)
          this.userCount = userData.length
        });
      return this.userCount
    },
    // getArticle(){
    //       const db = getDatabase();
    //       const userDB = ref(db, 'articles/');
    //       onValue(userDB, (snapshot) => {
    //       const data = snapshot.val();
    //       const userData = Object.values(data)
    //       this.userCount = userData.length
    //     });
    //   return this.userCount
    // },
  },
  components:{
    accountComp,
    gnbComp,
    myComp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{display:flex;justify-content: space-between;margin:auto;max-width:1000px}
.logo{max-width:430px}
.nav-link{font-size:0.8rem;}
.lower-header{border-bottom:1px solid #000;border-top:1px solid rgb(235,235,235);margin:0 auto 2px;padding: 0.5rem 1rem}
.upper-header{max-width:1024px;margin:auto;padding:0.5rem 1rem}
.header-wrap{border-bottom:1px solid #000;margin:0 auto 1rem;box-sizing: border-box;width:100%}
.date{font-size:0.5rem;margin-bottom:0.5rem}
.jarvis{width:80px;height:50px;cursor:pointer;position: relative;top:10px}
.logo-box{width:430px;margin:auto}
.mid-header{display:flex;align-items: center;}
.btn-box{width:80px;text-align: left;padding-top:0.5rem; box-sizing: border-box;}

.top-header{display:flex;align-items:center}
.account-box{display:flex;width:80px;align-items:center;cursor: pointer;}
.search-box{display:flex;align-items: center;width:80px;position: relative;}
.search{width:15px;height:15px;cursor:pointer}
.search-txt{position: absolute;border-bottom:1px solid black;padding-left:20px;box-sizing: border-box;transition:.4s;width:80px;height:25px}
.search-txt:focus{outline:none;width:180px;font-size:0.5rem;height:25px}

.date-box{margin:auto}
.account{margin-left:auto;}
.header-wrap .logo-link{color:#2c3e50}
.left-bar-btn{width:20px;height:20px;cursor:pointer;fill:#2c3e50}
.on{left:0;}

.user{
  text-align: center;
  font-size:0.5rem
  }
  .welcome{
    font-size:0.5rem
  }
</style>
