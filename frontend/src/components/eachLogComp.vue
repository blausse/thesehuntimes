<template>
  <v-row justify="center" class="account-wrap">
    <v-dialog
      v-model="dialog"
      height="auto"
      width="100%"
      max-width="350"
    >
      <template v-slot:activator="{ on, attrs }">
          <div class="account-sub-box" color="dark" dark v-bind="attrs" v-on="on"><span class="account">Account</span><svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></div>
      </template>
      <v-card class="modal">
        <v-toolbar dark color="dark">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="title">Account</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="logIn">
              Log-In
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>User Login</v-subheader>
          <v-list-item>
            <v-list-item-content class="login-box">
                  <v-text-field label="ID" :rules="rules" hide-details="auto" class="login" v-model="id" @keyup.enter="logIn"></v-text-field>
                  <v-text-field label="Password" :rules="pwRules" class="login" type="password" v-model="pw" @keyup.enter="logIn"></v-text-field>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>Subscription</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle class="sub-title">App을 다운받아 최신 소식을 받아보세요</v-list-item-subtitle>
              <v-btn class="account-btn">App Download</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle class="sub-title">아이디/비밀번호를 잊어버리셨나요?</v-list-item-subtitle>
              <v-btn class="account-btn">ID/PW 찾기</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle class="sub-title">아직 회원이 아니신가요?</v-list-item-subtitle>
              <signup-comp class="account-btn"></signup-comp>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { getDatabase, ref, onValue} from "firebase/database";

import signupComp from './signupComp.vue'
export default {
  name: 'modalView',
  components:{
    signupComp
  },
  created(){
    if(!this.$session.get('userInfo')){
      alert('PLZ LOG IN...')
      this.dialog = true
    }
  },
  data(){
    return{
        id:'',
        pw:'',
        userInfo:undefined,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        rules: [
        value => !!value || '입력해주세요!',
        value => (value && value.length >= 4) || '최소 4글자입니다!',
        idCheck => !!idCheck || '다시 확인해주세요!',
      ],
        pwRules: [
        value => !!value || '입력해주세요!',
        idCheck => !!idCheck || '다시 확인해주세요!',
      ],
  }}, 
  methods:{
  logIn(){
          const db = getDatabase();
          const userDB = ref(db, 'users/');
          onValue(userDB, (snapshot) => {
          const data = snapshot.val();
          const userData = Object.values(data)
          var i
          for(i=0;i<userData.length;i++){
            if(this.id == userData[i].id && this.pw == userData[i].password){
              this.userInfo = userData[i]
              this.$session.set('userInfo',this.userInfo)
              alert(this.userInfo.name+"님, 환영합니다!")
              this.dialog = false
              window.location.reload()
            }
          }
          console.log(this.userInfo)
          this.userInfo = userData
        });
    },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog{width:30%}
.arrow{width:10px;height:10px;margin-left:5px;}
.account-sub-box{display:flex;align-items:center;}
.account-btn{margin:auto;}
.sub-title{margin-bottom:0.5rem;font-size:0.5rem}
.login-box{display:flex;}
*:focus{outline:none}
.modal{width:100%;margin:auto}
.google{margin-right:1rem}
.title{font-size:1rem !important}

/* PC (해상도 1024px)*/
/* @media all and (min-width:1024px) {} */

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width:768px) and (max-width:1023px) {
  
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width:767px) {
  .account{font-size:0.6rem}
}
</style>
