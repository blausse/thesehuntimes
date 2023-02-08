<template>

<div class="detailArticle">
  <div class="detail-left">
  <div class="detail-header">
    <p class="theme">{{this.$session.get('userInfo').name}}</p>
    <p class="detail">
      <span>My List</span>
      </p>
    <p class="sub-title">relating to or denoting the part of a computer system or application with which the user interacts directly.</p>
    <div class="btn-box">
    <v-btn x-small id="btn" @click="myList">
      <v-icon class="icon">mdi-account</v-icon>
    </v-btn>
    <v-btn x-small id="btn" @click="like">
      <v-icon class="icon" color="red">mdi-cards-heart</v-icon>
    </v-btn>
    <v-btn x-small id="btn" @click="save">
      <v-icon class="icon">mdi-bookmark</v-icon>
    </v-btn>
    <!-- <v-btn x-small id="btn" @click="back">
      <v-icon class="icon">mdi-arrow-left</v-icon>
    </v-btn> -->
    </div>
  </div>
    <my-list-article class="basic-article" v-if="List"></my-list-article>
    <my-like-article class="basic-article" v-if="Like"></my-like-article>
    <my-save-article class="basic-article" v-if="Save"></my-save-article>
    </div>
  <div class="detail-right">
    <side-article class="side-article"></side-article>
  </div>
</div>

</template>

<script>
import sideArticle from '@/components/sideArticle.vue'
import MyListArticle from './myListArticle.vue';
import MyLikeArticle from './myLikeArticle.vue';
import MySaveArticle from './mySaveArticle.vue';


export default {
  name: 'myList',
  data(){
    return{
      articles:[],
      List:true,
      Like:false,
      Save:false
  }},
  methods:{
    // back(){
    //   history.back()
    // },
    myList(){
      this.List = true,
      this.Like = false,
      this.Save = false
    },
    like(){
      this.List = false,
      this.Like = true,
      this.Save = false
    },
    save(){
      this.List = false,
      this.Like = false,
      this.Save = true
    },
  },
  components:{
    sideArticle,
    MyListArticle,
    MyLikeArticle,
    MySaveArticle,
  }
}
</script>


<style scoped>
.detailArticle{max-width:1000px;margin:auto;display:flex;}
.detail-header{text-align:left;padding-bottom:1rem}
.sub-title{font-size:0.8rem;font-family: "imperial";}
.theme{font-size:0.6rem;font-weight:bold}
.detail{font-size:2rem;font-family: "karnakPro-condensedBlack";font-weight:bold;color:#121212;letter-spacing: 1px;}
.detail-body{max-width:1000px;margin:auto;display:flex;padding-top:1rem;width:100%}
.basic-article{padding-right:1rem;width:100%}

.detail-left{width:70%;display:flex;flex-direction:column;border-right:1px solid #dfdfdf}
.detail-right{width:30%;padding-left:1rem}

.btn-box{display:flex;gap:1rem}


.side-article{width:100%;}

#btn{margin-top:1rem;box-sizing: border-box;padding:1rem;background: #fff;box-shadow:none;border:1px solid #c9c9c9;border-radius:20px}

/* PC (해상도 1024px)*/
/* @media all and (min-width:1024px) {} */

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width:768px) and (max-width:1023px) {
  .detail-body{flex-direction: column;}
  .basic-article{width:100%}
  .side-article{width:100%}
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width:767px) {
  .detail-body{flex-direction: column;}
  .basic-article{width:100%}
  .side-article{width:100%}
}
</style>
