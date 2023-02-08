<template>
<div class="main-article">
    <div class='mainImg'  @click="each(articles[0].postKey)">
     <img :src="articles[0].preview" alt=""> 
    <p class="caption">{{articles[0].caption}}</p>
    </div>
    <div class="subSc1"  @click="each(articles[0].postKey)">
      <p class="main">{{articles[0].mainSc}}</p>
    <ul class="sub">
      <li v-if="articles[0].subSc1">{{articles[0].subSc1}}</li>
      <li v-if="articles[0].subSc2">{{articles[0].subSc2}}</li>
      <li v-if="articles[0].subSc3">{{articles[0].subSc3}}</li>
      </ul>
      <p class="view">{{articles[0].view}} READ</p>
    </div>
    <div class="subSc2" @click="each(articles[1].postKey)">
      <p class="main">{{articles[1].mainSc}}</p>
      <ul class="sub">
      <li v-if="articles[1].subSc1">{{articles[1].subSc1}}</li>
      <li v-if="articles[1].subSc2">{{articles[1].subSc2}}</li>
      <li v-if="articles[1].subSc3">{{articles[1].subSc3}}</li>
      </ul>
      <p class="view">{{articles[1].view}} READ</p>
    </div>
    <div class="subSc3" @click="each(articles[2].postKey)">
      <p class="main">{{articles[2].mainSc}}</p>
      <p class="view">{{articles[2].view}} READ</p>
    </div>
    <div class="subSc4" @click="each(articles[3].postKey)">
      <p class="main">{{articles[3].mainSc}}</p>
      <p class="view">{{articles[3].view}} READ</p>
    </div>
    <div class="subSc5" @click="each(articles[4].postKey)">
      <p class="main">{{articles[4].mainSc}}</p>
      <p class="view">{{articles[4].view}} READ</p>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, onValue} from "firebase/database";

export default {
  name: 'mainArticle',
  data(){
    return{
      articles:[],
      beforeParams:''
  }},
  props:{
    theme:String
    },
     created(){
    if(this.$route.params.title){
    this.getData()
    }else{
      const db = getDatabase();
      const articleDB = ref(db,'articles');
      onValue(articleDB,(snapshot)=>{
      const data = snapshot.val()
      const articleData = Object.values(data)
      var i
      for(i=0;i<articleData.length;i++){
        if(articleData[i].theme == 'AI-ML'){
          this.articles.push(articleData[i])
          this.beforeParams = articleData[i].theme
        }}
        this.articles.sort(function(a,b){
            return b.view-a.view
          })
    })
    }
  },
  watch:{ 
    theme : function(){
  if(this.$route.params.title){
    if(this.beforeParams !== this.$route.params.title){
      this.articles = []
      return this.getData()
    }
  }},
  },
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
      getData(){
    const db = getDatabase();
    const articleDB = ref(db,'articles');
    onValue(articleDB,(snapshot)=>{
      const data = snapshot.val()
      const articleData = Object.values(data)
      this.nowParams=this.$route.params.title
      var i
      for(i=0;i<articleData.length;i++){
        if(this.$route.params.title == articleData[i].theme){
          this.articles.push(articleData[i])
          this.beforeParams = articleData[i].theme
          // this.preview = this.articles[0].preview
          // this.caption = this.articles[0].caption
          // this.mainSc = this.articles[0].mainSc
          // this.subSc = this.articles[0].subSc
          // this.view = this.articles[0].view
          // this.postKey = this.articles[0].postKey
        }
      }
      this.articles.sort(function(a,b){
            return b.view-a.view
          })
    })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-article{
  display:grid;
  grid-gap:1rem;
  grid-auto-rows:auto;
  grid-template-columns: repeat(3,1fr);
  grid-template-areas: 
  'a b b'
  'c b b'
  'd e f'
}
.mainImg{grid-area:b;max-height:300px;margin-bottom:1rem}
picture{width:100%;height:100%}
.mainImg img{display:block;width:100%;height:100%;overflow:clip}
.subSc1{grid-area:a;border-bottom:1px solid #dfdfdf;padding-bottom:1rem}
.sub{color:#5a5a5a;padding:0;font-size:0.8rem;font-family:"imperial"}
.main{color:#121212;font-size:1rem;font-family:"cheltenham"}
.subSc2{grid-area:c;border-bottom:1px solid #dfdfdf;padding-bottom:1rem}
.subSc3{grid-area:d;padding-right:1rem;border-right:1px solid #dfdfdf}
.subSc4{grid-area:e;padding-right:1em;border-right:1px solid #dfdfdf}
.subSc5{grid-area:f}
.main-article{text-align:left;padding-bottom:1rem}
.main-article>div{display:flex;flex-direction:column;justify-content: space-between;cursor:pointer}
.view{color:#acacac;font-size:0.5rem;}
.caption{color:#5a5a5a;text-align:right;}

ul{list-style: none;}
</style>
