<template>
<div>
<div class="main-article" v-for="(img,i) in articles" :key="i" @click="each(img.postKey)">
  <div class="script-box">
    <div class='mainSc'>{{img.mainSc}}</div>
    <ul class="subSc">
      <li v-if="img.subSc1">{{img.subSc1}}</li>
      <li v-if="img.subSc2">{{img.subSc2}}</li>
      <li v-if="img.subSc3">{{img.subSc3}}</li>
    </ul>
    <div class="view">{{img.view}} READ</div>
  </div>
  <div class='mainImg'><img :src="img.preview" alt=""></div>
</div>
</div>
</template>
<script>
import { getDatabase, ref, onValue} from "firebase/database";
export default {
  name: 'imgArticle',
  created(){
    const db = getDatabase();
    const articleDB = ref(db,'articles');
    onValue(articleDB,(snapshot)=>{
      const data = snapshot.val()
      const articleData = Object.values(data)
      var i
      for(i=0;i<9;i++){
          this.articles.push(articleData[i])
      }
      this.articles.sort(function(a,b){
        return b.view-a.view
      })
    })
  
  },
  data(){
    return{
      articles:[],
  }},
  methods:{
  each(key){
        this.$router.push({
          name:'each',
          params:{
            postKey:key,
            jarvis:'a'
          }
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-article{display:flex;justify-content: space-between;padding:1rem 0;border-top:1px solid #121212;cursor:pointer}
.mainImg{width:100%;max-height:200px;min-height:100px}
img{width:100%;height:100%;display:block;}
.script-box{text-align:left;margin-right:1rem;display:flex;flex-direction: column;justify-content: space-between;width:100%}
.view{color:#acacac;font-size:0.5rem;}
.mainSc{color:#121212;font-family: "cheltenham";}
.subSc{text-align:left;color:#5a5a5a;padding:0;font-size:0.8rem;font-family: "imperial";}

ul{list-style: none;}
</style>