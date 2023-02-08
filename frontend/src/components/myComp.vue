<template>
  <v-row justify="center" class="account-wrap">
    <v-dialog
      v-model="dialog"
      transition="dialog-on-leave"
      width="100%"
      height="auto"
      max-width="350"
    >
      <template v-slot:activator="{ on, attrs }">
          <div class="account-sub-box" color="dark" dark v-bind="attrs" v-on="on"><span class="account">My Account</span><svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></div>
      </template>
      <v-card class="modal">
        <v-toolbar dark color="dark">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="title">My Account</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="logOut">
              Log-Out
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>User Info</v-subheader>
          <v-list-item>
            <v-list-item-content class="login-box">
                  <v-text-field label="Name" :rules="rules" hide-details="auto" class="login" v-model="name"></v-text-field>
                  <v-text-field label="ID" :rules="rules" hide-details="auto" class="login" :value="userInfo.id" disabled></v-text-field>
                  <v-text-field label="Mobile" :rules="rules" hide-details="auto" class="login" v-model="phone"></v-text-field>
                  <v-text-field label="Email" :rules="rules" hide-details="auto" class="login" v-model="email"></v-text-field>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>Subscription</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle class="sub-title">내가 쓴 글을 보고싶다면?</v-list-item-subtitle>
              <v-btn class="account-btn" @click="myList">My List</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle class="sub-title">회원 정보를 수정하시겠습니까?</v-list-item-subtitle>
              <v-btn class="account-btn" @click="update">UPDATE</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle class="sub-title">계정을 삭제하시겠습니까?</v-list-item-subtitle>
              <v-btn class="account-btn" @click="signOff">Sign Off</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { getDatabase, ref, onValue, update,remove} from "firebase/database";

export default {
  name: 'modalView',
  components:{
  },
  data(){
    return{
        name: this.$session.get('userInfo').name,
        phone: this.$session.get('userInfo').phone,
        email: this.$session.get('userInfo').email,
        userInfo: this.$session.get('userInfo') ? this.$session.get('userInfo') : undefined,
        dialog: false,
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
  update(){
    if(confirm("수정하시겠습니까?")){
          const db = getDatabase();
          const userDB = ref(db, 'users/');
          onValue(userDB, (snapshot) => {
          const data = snapshot.val();
          const userData = Object.values(data)
          var i
          for(i=0;i < userData.length;i++){
            if(userData[i].id == this.userInfo.id){
                const postData = {
                id:this.userInfo.id,
                password:this.userInfo.password,
                name:this.name,
                phone:this.phone,
                email:this.email
              };
              const userKey = Object.keys(data)
              const updates={};
              updates['users/'+userKey[i]] = postData;
              update(ref(db),updates)
              return this.$session.set('userInfo',postData)
            }
          }
        });
    alert("수정 완료")
    this.dialog = false
    }
    },
    logOut(){
      this.$session.destroy('userInfo')
      this.dialog = false
      window.location.reload()
    },
    signOff(){
      if(confirm("정말 삭제하시겠습니까?")){
        const db = getDatabase();
        const userDB = ref(db,'users/');
        onValue(userDB,(snapshot)=>{
          const data = snapshot.val()
          const userData = Object.values(data)
          var i
          for(i=0;i<userData.length;i++){
            if(userData[i].id == this.userInfo.id){
              const userKey = Object.keys(data)
              remove(ref(db,'users/'+userKey[i]))
              this.$session.destroy('userInfo')
              this.dialog = false
              window.location.reload()
            }
          }
        })
      }
    },
    myList(){
      this.$router.push({
        name:'myList'
      })
      this.dialog = false
    }
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
.login{width:70%}
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
