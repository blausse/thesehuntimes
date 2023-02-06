<template>
<div class="main-article">
  <article class="article-a" @click="each(articles[0].postKey)">
    <img :src="articles[0].preview" alt="">
    <div class="main">{{articles[0].mainSc}}</div>
    <div class="sub">{{articles[0].subSc}}</div>
    <p class="view">{{articles[0].view}} READ</p>
  </article>
  <div class="article-box">
  <article class="article-b">
  <img :src="articles[1].preview" alt="" @click="each(articles[1].postKey)">
    <div class="main">{{articles[1].mainSc}}</div>
    <div class="view">{{articles[1].view}} READ</div>
  </article>
  <article class="article-c">
    <img :src="articles[2].preview" alt="" @click="each(articles[2].postKey)">
    <div class="main">{{articles[2].mainSc}}</div>
    <div class="view">{{articles[2].view}} READ</div>
  </article>
</div>
<h2>Opinion</h2>
<article v-for="box,i in articles" :key="i" class="article-d" @click="each(box.postKey)">
<div class="opinion-box" v-if="i <= 10">
<div class="main">{{box.mainSc}}</div>
<div class="view">{{box.view}} READ</div>
</div>
<img class="preview" :src="box.preview" alt="" v-if="i <= 10">
</article>
<div class="slide-box">
  <h2>Today's Study</h2>
  <div class="study-card">
    <img :src="articles[0].preview" class="host-img">
    {{slides[0]}}
  </div>
</div>
</div>
</template>

<script>
import { getDatabase, ref, onValue} from "firebase/database";
export default {
  name: 'sideArticle',
  created(){
    const db = getDatabase();
    const articleDB = ref(db,'articles');
    onValue(articleDB,(snapshot)=>{
      const data = snapshot.val()
      const articleData = Object.values(data)
      var i
      for(i=0;i<articleData.length;i++){
        if(articleData[i].theme == 'MORE'){
          this.articles.push(articleData[i])
        }
      }
    })
  },
  data(){
    return{
      articles:[],
      slides: [
          '1',
          '2',
          '3',
          '4',
          '5',
        ],
  }},
  methods:{
  each(key){
        this.$router.push({
          name:'each',
          params:{
            postKey:key
          }
        })
      },
    },
    components:{
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-article{padding-left:1rem;border-left:1px solid #dfdfdf;display:flex;flex-direction:column}
img{display:block;width:100%;height:100%;max-height:200px}
.main{text-align:left;font-size:0.8rem;color:#121212;font-family: "cheltenham";}
.sub{text-align:left;font-size:0.6rem;color:#5a5a5a;font-family:"imperial"}
.view{text-align:left;color:#acacac;font-size:0.5rem}
h2{text-align: left;font-weight:bold}
.article-box{display:flex;padding: 1rem 0;border-bottom:1px solid #121212}

.article-a{border-bottom:1px solid #dfdfdf;display:flex;flex-direction:column;justify-content: space-between;cursor:pointer}

.article-b{display:flex;flex-direction: column;justify-content: space-between;max-height:250px;width:50%;padding-right:1rem;cursor:pointer}
.article-b img{height:100px;}

.article-c{display:flex;flex-direction: column;justify-content: space-between;max-height:250px;border-left:1px solid #dfdfdf;padding-left:1rem;width:50%;cursor:pointer}
.article-c img{height:100px;}

.article-d{padding: 1rem 0;border-bottom:1px solid #dfdfdf;display:flex;justify-content: flex-end;cursor:pointer}
.preview{width:50%}
.opinion-box{margin-right:1rem;display:flex;flex-direction:column;justify-content: space-between;width:100%}

.slide-box{width:100%}
.host-img{
  width:100%
  }
.study-card{
  padding:1rem 0
}
</style>
