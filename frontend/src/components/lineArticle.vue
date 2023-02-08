<template>
<div class="main-article">
  <div class="line-box">
  <div class="line" v-for="(line,i) in articles" :key="i" @click="each(line.postKey)">
      <v-img class="inner" :src="line.preview" alt=""></v-img>
    <div class="line-script">
        <div class="main">
          {{line.mainSc}}
        </div>
        <div class="sub">
          {{line.subSc1}}
        </div>
        <div class="view">
          {{line.view}} READ
        </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import { getDatabase, ref, onValue} from "firebase/database";
export default {
  name: 'lineArticle',
  created(){
    const db = getDatabase();
    const articleDB = ref(db,'articles');
    onValue(articleDB,(snapshot)=>{
      const data = snapshot.val()
      const articleData = Object.values(data)
      var i
      for(i=0;i<4;i++){
          this.articles.push(articleData[i])
      }
    })
  },
  data(){
    return{
      articles:[]
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
.main-article{padding:1rem 0;border-top:1px solid #121212;border-bottom:1px solid #121212}
.line-box{display:flex;justify-content: space-between;width:100%;padding-left:1rem;border-left:1px solid #dfdfdf;margin-left:0.5rem;height:auto}
.line{display:flex;min-width:25%;box-sizing: border-box;justify-content: space-between;height:auto;cursor:pointer}
.line-script{display:flex;flex-direction:column;justify-content: space-between;width:100%;text-align: left;margin:0 1rem;padding-right:1rem;border-right:1px solid #dfdfdf;}


.inner {
  width:10vw;height:10vw;object-fit:cover;max-width:90px;max-height:90px}

/* .line img{width:10vw;height:10vw;object-fit: cover;max-width:90px;max-height:90px} */

.main{color:#121212;font-size:1rem;font-family:"cheltenham"}
.sub{color:#5a5a5a;font-size:0.6rem;max-height:150px;margin-bottom:auto;overflow:hidden;font-family:"imperial"}
.view{color:#acacac;font-size:0.6rem}
::-webkit-scrollbar {display: none; /* Chrome, Safari, Opera*/}

/* PC (해상도 1024px)*/
/* @media all and (min-width:1024px) {} */

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width:768px) and (max-width:1023px) {
  .line{display:flex;min-width:0}
  .inner{display:none}
  .line-box{border-left:none;padding-left:0;margin-left:0}
  .line-script{border-right:none;margin:0;padding:0;position: relative;}
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width:767px) {
  .line-box{border-left:none;display:flex;flex-direction: column;gap:0.5rem;padding-left:0;margin-left:0;border-top:1px solid #dfdfdf;padding-top:0.5rem}
  .line{border-bottom:1px solid #dfdfdf;padding-bottom:0.5rem}
  .line-script{border-right:none;margin:0;padding:0}
  .inner{display:none}
}
</style>