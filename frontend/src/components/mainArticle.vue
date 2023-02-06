<template>
<div class="main-article">
    <div class='mainImg'  @click="each">
     <img :src="preview" alt=""> 
    <p class="caption">{{caption}}</p>
    </div>
    <div class="subSc1"  @click="each">
      <p class="main">{{mainSc}}</p>
    <ul class="sub">
      <li>{{subSc}}</li>
      </ul>
      <p class="view">{{view}} READ</p>
    </div>
    <div class="subSc2">
      <p class="main">{{sub1.mainSc}}</p>
      <p class="view">{{sub1.view}}</p>
    </div>
    <div class="subSc3">
      <p class="main">{{sub2.mainSc}}</p>
      <p class="view">{{sub2.view}}</p>
    </div>
    <div class="subSc4">
      <p class="main">{{sub3.mainSc}}</p>
      <p class="view">{{sub3.view}}</p>
    </div>
    <div class="subSc5">
      <p class="main">{{sub4.mainSc}}</p>
      <p class="view">{{sub4.view}}</p>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, onValue} from "firebase/database";

export default {
  name: 'mainArticle',
  data(){
    return{
      main:{mainSc:"\"구글의 시대 끝났다\" 평가 나온 Chat GPT...AI 대화가 검색 대체할까",subSc1:"일론 머스크가 투자한 AI 연구소 '오픈AI', GPT-3 기반 Chat GPT 공개",subSc2:"기존 AI 챗봇 압도하는 성능... 대화형 AI가 검색 서비스 대체 평가도",subSc3:"",subSc4:'',view:"10m READ",src:"openAI2",date:'',caption:"chatGPT: Optimizing Language Models for Dialogue",subject:'ai-ml'},
      sub1:{mainSc:"AI 그림 열풍의 역설...\"AI가 그린 그림 많아질수록 AI 성능은 나빠진다\"",subSc1:'',subSc2:'',subSc3:'',subSc4:'',view:"10m READ",src:'',date:'',caption:"",subject:'ai-ml'},
      sub2:{mainSc:"카카오브레인, AI 아티스트 '칼로' API, 체험판 공개",subSc1:'',subSc2:'',subSc3:'',subSc4:'',view:"10m READ",src:'',date:'',caption:"",subject:'ai-ml'},
      sub3:{mainSc:"AI학회, chatGPT 적용 논문 허용할까?",subSc1:'',subSc2:'',subSc3:'',subSc4:'',view:"10m READ",src:'',date:'',caption:"",subject:'ai-ml'},
      sub4:{mainSc:"교수, 학생 뺨치는 chatGPT에 놀란 대학가 \"AI 대필 금지\"",subSc1:'',subSc2:'',subSc3:'',subSc4:'',view:"10m READ",src:'',date:'',caption:"",subject:'ai-ml'},
      articles:[],
      preview:'',
      caption:'',
      mainSc:'',
      subSc:'',
      view:'',
      postKey:'',
      beforeParams:'',
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
          this.preview = this.articles[0].preview
          this.caption = this.articles[0].caption
          this.mainSc = this.articles[0].mainSc
          this.subSc = this.articles[0].subSc
          this.view = this.articles[0].view
          this.postKey = this.articles[0].postKey
        }}
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
      each(){
        this.$router.push({
          name:'each',
          params:{
            postKey:this.postKey,
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
          this.preview = this.articles[0].preview
          this.caption = this.articles[0].caption
          this.mainSc = this.articles[0].mainSc
          this.subSc = this.articles[0].subSc
          this.view = this.articles[0].view
          this.postKey = this.articles[0].postKey
        }
      }
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
