<template>
<div>
  <div class="detail-header">
    <p class="theme">AI-ML</p>
    <p class="detail">Open AI</p>
    <p class="detail-title">relating to or denoting the part of a computer system or application with which the user interacts directly.</p>
  </div>
  <div class="each-header">
    <p class="main-title">{{articles.mainSc}}</p>
    <div class="sub-titlebox">
    <p class="sub-title">{{articles.subSc1}}</p>
    <p class="sub-title">{{articles.subSc2}}</p>
    </div>
    <p class="date">{{articles.date}}</p>
  </div>
  <div class="each-btnbox">
    <v-btn @click="heartClick" x-small class="btn">
      <v-icon class="icon" v-if="!heartActive">mdi-cards-heart-outline</v-icon>
      <v-icon class="icon" color="red" v-else>mdi-cards-heart</v-icon>
      </v-btn>
    <v-btn @click="bookClick" x-small class="btn">
      <v-icon class="icon" v-if="!bookActive">mdi-bookmark-outline</v-icon>
      <v-icon class="icon" v-else>mdi-bookmark</v-icon>
      </v-btn>
    <v-btn x-small class="btn">
      <v-icon class="icon">mdi-share-outline</v-icon>
      </v-btn>
    <v-btn x-small class="btn">
      <v-icon class="icon">mdi-comment-outline</v-icon>
      </v-btn>
    <v-btn x-small class="btn" @click="back">
      <v-icon class="icon">mdi-arrow-left</v-icon>
      </v-btn>
  </div>
<div class='mainImg'><img :src="require(`@/assets/images/${articles.src}.png`)" alt=""></div>
<div class="content" v-for="content,i in contents" :key="i">
  <div v-if="!content.src" class="main">{{content.main}}</div>
  <div v-else><img :src="require(`@/assets/images/${content.src}.png`)" class="content-img"></div>  
</div>
</div>
</template>
<script>
export default {
  name: 'eachArticle',
  data(){
    return{
        articles:{
          mainSc:"\"구글의 시대 끝났다\" 평가 나온 Chat GPT...AI 대화가 검색 대체할까",
          subSc1:"일론 머스크가 투자한 AI 연구소 '오픈AI', GPT-3 기반 Chat GPT 공개",
          subSc2:"기존 AI 챗봇 압도하는 성능... 대화형 AI가 검색 서비스 대체 평가도",
          subSc3:"",
          view:"10m READ",
          src:"openAI2",
          caption:"chatGPT: Optimizing Language Models for Dialogue",
          date:"January 18, 2023"
        },
        contents:[
          {main:"'Google is done(구글은 끝났다)’" },
          {main:"영국 일간 인디펜던트가 지난 3일 올린 기사의 제목이다. 구글은 끝났다고 단언한 이 기사는 세계 최대 AI 연구소인 오픈AI가 최근 공개한 AI 모델인 GPT-3.5의 대화형 AI 서비스 ‘ChatGPT’를 소개하고 있다. ChatGPT가 뭐길래 세계 최대 IT 기업은 구글은 끝났다는 평가까지 나오는 걸까."},
          {main:"오픈AI는 테슬라의 일론 머스크와 와이콤비네티어 창업자인 샘 알트만, 링크드인 공동창업자인 리드 호프먼 등 IT업계의 거물들이 힘을 합쳐 만든 곳이다. 2015년 설립된 이후 세계에서 가장 큰 규모의 AI 개발을 진행 중이다."},
          {src:"openAI3"},
          {main:"2018년 처음 공개된 GPT-1은 1억1700만개의 매개변수를 활용한 것으로 알려졌다. 매개변수가 많을수록 AI의 성능이 좋아진다. 2019년 공개된 GPT-2는 15억개의 매개변수를 썼고, 2020년 공개된 GPT-3는 1750억개로 매개변수를 100배 이상 늘렸다."},
          {main:"GPT-3는 거의 인간에 준하는 수준의 이해력과 문장력을 갖춘 글을 선보여 전 세계에 큰 충격을 안겼다. ‘사피엔스’의 유발 하라리는 GPT-3에게 ‘사피엔스’ 10주년판 서문을 작성하도록 했는데 유발 하라리가 직접 썼다고 해도 손색없는 수준의 글이 나왔다. 유발 하라리는 AI가 쓴 서문에 대해 “글을 읽는 동안 충격으로 입을 다물지 못했다”며 “AI 혁명이 전 세계에 휘몰아치고, 이 혁명은 우리가 알던 방식의 인류 역사가 끝났다는 신호를 보내고 있다”고 평가했다."},
          {main:"하지만 이런 GPT-3도 ‘구글은 끝났다’는 평가를 받지는 못했다. ChatGPT의 무엇이 사람들을 놀라게 한 걸까."},
          {main:"이번에 새로 공개된 ChatGPT는 GPT-3의 여러 오류를 개선한 GPT-3.5에 기반을 두고 있다. 당초 GPT-4가 공개될 것이라는 전망이 많았지만 오픈AI는 GPT-4 전에 GPT-3.5를 먼저 공개했다."},
          {main:"ChatGPT는 이용자와 실시간으로 대화가 가능한 AI 서비스다. AI 챗봇의 일종이라고 보면 된다. 하지만 GPT-3의 방대한 데이터 처리 능력을 바탕으로 기존에 있던 AI 챗봇을 압도하는 성능을 보여준다. 여기에다 GPT-3의 단점으로 지적되던 ‘기계스러움’을 벗어던지는데 성공했다."},
          {main:"김수현 한국과학기술연구원(KIST) 인공지능연구단 책임연구원은 “기존 GPT-3는 텍스트를 입력해서 뒤에 어떤 텍스트가 이어질 지 예상하는 방식으로 작동했는데, 아무래도 패턴만을 배우다보니 자연스러운 대화의 맥락을 만드는 건 어려움이 있었다”며 “GPT-3.5는 텍스트에 대한 사람의 판단을 함께 가르치다보니 훨씬 자연스러운 대화가 가능해졌다”고 설명했다."},
          {src:"openAI4"},
          {main:"성능 자체는 기존 GPT-3와 큰 차이가 없지만 사람과 자연스러운 대화가 가능해지도록 일종의 윤활유를 뿌린 셈이다. 실제로 ChatGPT를 이용한 대화를 보면 AI의 대답이라고 생각하기 힘든 결과물들이 많다."},
          {main:"인디펜던트는 ChatGPT에 ‘너가 구글을 대체할 수 있느냐’고 물었는데, ChatGPT는 “구글을 완전히 대체할 가능성은 낮지만 개인화된 사용자 경험을 제공할 수 있는 잠재력을 바탕으로 대화형 검색 경험을 원하는 이용자에게 매력적인 대안이 될 수 있다”고 답했다."},
        ],
        heartActive:false,
        bookActive:false
  }},
  methods:{
  heartClick(){
    if(!this.heartActive){
      this.heartActive=true
      }else{
        this.heartActive=false
        }
  },
  bookClick(){
    if(!this.bookActive){
      this.bookActive=true
      }else{
        this.bookActive=false
        }
  },
  back(){
    history.back()
  }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail-header{text-align:left;padding-bottom:1rem;max-width:1000px;margin:auto;border-bottom:1px solid #dfdfdf}
.detail-title{font-size:0.8rem;font-family: "imperial";}
.theme{font-size:0.6rem;font-weight:bold}
.detail{font-size:2rem;font-family: "karnakPro-condensedBlack";font-weight:bold;color:#121212;letter-spacing: 1px;}

.each-header{text-align:left;max-width:500px;margin:1rem auto 0;display:flex;flex-direction:column;justify-content: space-between;}

.mainImg{max-width:600px;max-height:400px;margin:0 auto 1rem}
.mainImg img{width:100%;height:100%;display:block;max-height:300px}

.sub-titlebox{margin:0.2rem 0}
.main-title{font-family:"cheltenham";color:#121212;font-size:1.4rem}
.sub-title{font-family:"imperial";font-size:0.8rem;}
.date{font-size:0.7rem}

.each-btnbox{display:flex;max-width:500px;margin: 1rem auto}
.each-btnbox .btn{margin-right:1rem;box-sizing: border-box;padding:1rem;background: white;box-shadow:none;border:1px solid #c9c9c9;border-radius:20px}

.content{max-width:600px;margin:1rem auto;text-align:left;font-size:0.9rem;font-family:"imperial"}
.main{max-width:500px;margin:auto}
</style>