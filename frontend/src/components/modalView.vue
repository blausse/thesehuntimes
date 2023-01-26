<template>
  <v-row justify="center" class="account-wrap">
    <v-dialog
      v-model="dialog"
      transition="dialog-on-leave"
      width="30%"
      height="auto"
    >
      <template v-slot:activator="{ on, attrs }">
          <div class="account-sub-box" color="dark" dark v-bind="attrs" v-on="on"><span class="account">Account</span><svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></div>
      </template>
      <v-card class="modal">
        <v-toolbar dark color="dark">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Account</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">
              Log-In
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>User Login</v-subheader>
          <v-list-item>
            <v-list-item-content class="login-box">
                  <v-text-field label="ID" :rules="rules" hide-details="auto" class="login"></v-text-field>
                  <v-text-field label="Password" :rules="pwRules" class="login" type="password"></v-text-field>
            </v-list-item-content>
          </v-list-item>
          <v-btn x-small><v-icon x-small class="google">mdi-google</v-icon>구글 간편 로그인</v-btn>
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
              <v-btn class="account-btn">회원가입</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'modalView',
  data(){
    return{
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
  
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.arrow{width:10px;height:10px;margin-left:5px;}
.account-sub-box{display:flex;align-items:center;}
.account-btn{margin:auto;}
.sub-title{margin-bottom:0.5rem;font-size:0.5rem}
.login-box{display:flex;flex-direction: column;}
.login{width:50%}
*:focus{outline:none}
.modal{width:100%;margin:auto}
.google{margin-right:1rem}
</style>
