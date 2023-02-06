<template>

<div class="detailArticle">
  <div class="detail-header">
    <p class="theme">{{$route.params.title}}</p>
    <p class="detail">
      <span>{{$route.params.subject}}</span>
      </p>
    <p class="sub-title">relating to or denoting the part of a computer system or application with which the user interacts directly.</p>
    <v-btn x-small id="btn" @click="back">
      <v-icon class="icon">mdi-arrow-left</v-icon>
    </v-btn>
  </div>
  <div class="detail-body">
    <basic-article class="basic-article" :subject="$route.params.subject"></basic-article>
    <side-article class="side-article"></side-article>
  </div>
</div>

</template>

<script>
import basicArticle from '@/components/basicArticle.vue'
import sideArticle from '@/components/sideArticle.vue'


export default {
  name: 'detailArticle',
  data(){
    return{

  }},
  methods:{
    back(){
    history.back()
  },
  },
  components:{
    basicArticle,
    sideArticle,
  }
}
</script>


<style scoped>
.detailArticle{max-width:1000px;margin:auto}
.detail-header{text-align:left;padding-bottom:1rem}
.sub-title{font-size:0.8rem;font-family: "imperial";}
.theme{font-size:0.6rem;font-weight:bold}
.detail{font-size:2rem;font-family: "karnakPro-condensedBlack";font-weight:bold;color:#121212;letter-spacing: 1px;}
.detail-body{max-width:1000px;margin:auto;display:flex;padding-top:1rem}
.basic-article{padding-right:1rem;width:70%}

.side-article{width:30%}

#btn{margin-top:1rem;box-sizing: border-box;padding:1rem;background: #fff;box-shadow:none;border:1px solid #c9c9c9;border-radius:20px}
</style>
