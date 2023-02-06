<template>
<div>
<div class="main-article" v-for="basic,i in articles" :key="i" @click="each(basic.postKey)">
  <div class="date">{{basic.date}}</div>
  <div class="script-box">
    <div class='mainSc'>{{basic.mainSc}}</div>
    <ul class="subSc">
      <li>{{basic.subSc}}</li>
    </ul>
    <div class="view">{{basic.view}} READ</div>
  </div>
  <div class='mainImg'><img :src="basic.preview" alt=""></div>
</div>
</div>
</template>
<script>
import { getDatabase, ref, onValue} from "firebase/database";

export default {
  name: 'imgArticle',
  data(){
    return{
      articles:[],
      beforeSub:''
  }},
  props:{
    theme:String,
    subject:String
  },
  created(){
      this.getData()
      }
      ,
  watch:{ 
  theme :
  function(){
  if(this.$route.params.title){
      this.articles = []
      return this.getData()
  }},
  subject : 
  function(){
    this.articles=[]
    return this.getData()
  }
  },
  methods:{
  getData(){
    if(!this.$route.params.subject){
    const db = getDatabase();
    const articleDB = ref(db,'articles');
    onValue(articleDB,(snapshot)=>{
      const data = snapshot.val()
      const articleData = Object.values(data)
      var i
      for(i=0;i<articleData.length;i++){
        if(this.$route.params.title == articleData[i].theme){
          this.articles.push(articleData[i])
        }
      }
    })
    }else{
    const db = getDatabase();
    const articleDB = ref(db,'articles');
    onValue(articleDB,(snapshot)=>{
      const data = snapshot.val()
      const articleData = Object.values(data)
      var i
      for(i=0;i<articleData.length;i++){
        if(this.$route.params.title == articleData[i].theme && this.$route.params.subject == articleData[i].detail){
          this.articles.push(articleData[i])
        }
      }
    })
    }
      },
      each(key){
        this.$router.push({
          name:'each',
          params:{
            postKey:key
          }
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-article{display:flex;justify-content: space-between;padding:1rem 0;border-top:1px solid #121212;cursor:pointer}
.mainImg{width:100%;max-width:200px;}
img{width:100%;height:100%;display:block;}
.script-box{text-align:left;margin-right:1rem;display:flex;flex-direction: column;justify-content: space-between;width:50%}
.view{color:#acacac;font-size:0.5rem;}
.mainSc{color:#121212;font-family: "cheltenham";font-weight:bold;font-size:0.9rem;}
.subSc{text-align:left;color:#5a5a5a;padding:0;font-size:0.8rem;font-family: "imperial";}

ul{list-style: none;}

.date{padding:0.2rem 1rem 0 0;font-size:0.7rem;}
</style>