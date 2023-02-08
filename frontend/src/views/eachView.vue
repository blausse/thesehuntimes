<template>
<div>
  <div class="login-check" v-if="this.$session.get('userInfo')">
  <div class="detail-wrap">
  <div class="detail-header">
    <p class="theme">{{articleInfo.theme}}</p>
    <p class="detail">{{articleInfo.detail}}</p>
    <p class="detail-title">relating to or denoting the part of a computer system or application with which the user interacts directly.</p>
  </div>
  </div>
  <div class="each-header">
    <p class="main-title">{{articleInfo.mainSc}}</p>
    <div class="sub-titlebox">
    <p v-if="articleInfo.subSc1" class="sub-title">{{articleInfo.subSc1}}</p>
    <p v-if="articleInfo.subSc2" class="sub-title">{{articleInfo.subSc2}}</p>
    <p v-if="articleInfo.subSc3" class="sub-title">{{articleInfo.subSc3}}</p>
    </div>
    <p class="date">{{articleInfo.date}}</p>
  </div>
  <div class="each-btnbox">
    <v-btn x-small id="btn">
      <v-icon class="icon" v-if="!articleInfo.like.includes(this.$session.get('userInfo').id)" @click="Like">mdi-cards-heart-outline</v-icon>
      <v-icon class="icon" color="red" v-else @click="unLike">mdi-cards-heart</v-icon>
      </v-btn>
    <v-btn x-small id="btn">
      <v-icon class="icon" v-if="!articleInfo.save.includes(this.$session.get('userInfo').id)" @click="Save">mdi-bookmark-outline</v-icon>
      <v-icon class="icon" v-else @click="Delete">mdi-bookmark</v-icon>
      </v-btn>
    <v-btn x-small id="btn">
      <v-icon class="icon">mdi-share-outline</v-icon>
      </v-btn>
    <v-btn x-small id="btn">
      <v-icon class="icon">mdi-comment-outline</v-icon>
      </v-btn>
    <v-btn x-small id="btn" @click="back">
      <v-icon class="icon">mdi-arrow-left</v-icon>
      </v-btn>
  </div>
<div class="content" v-html="this.articleInfo.content">
</div>
</div>
<div class="login-need" v-else>
  <eachLogComp/>
  <div class="home-box">
    <v-btn class="home-btn" @click="$router.push({name:'home'})">HOME</v-btn>
  </div>
</div>
</div>
</template>
<script>
import { getDatabase, ref, onValue , update,get } from "firebase/database";
import eachLogComp from '@/components/eachLogComp.vue';

export default {
  name: 'eachArticle',
  components:{
    eachLogComp
  },
  data(){
    return{
        heartActive:false,
        bookActive:false,
        articleInfo:undefined,
        content:undefined,
  }},
  created(){
    const db = getDatabase();
    const articleDB = ref(db,'articles');
    onValue(articleDB,(snapshot)=>{
      const data = snapshot.val()
      const articleData = Object.values(data)
      var i
      for(i=0;i<articleData.length;i++){
        if(this.$route.params.postKey == articleData[i].postKey){
          this.articleInfo = articleData[i]
        }
      }
    })
    window.scrollTo(0,0);
    if(this.$route.params.login == 'none'){
      document.onkeydown = this.NotReload();
    }
  },
  mounted(){
    return this.update()
  },
  methods:{
  back(){    
    if(this.$route.params.jarvis == 'jarvis'){
            this.$router.push({
                name:'home'
            })
        }else{
        history.back()
        }
  },
  update(){
          const db = getDatabase();
          const articlesDB = ref(db, 'articles/');
          get(articlesDB).then((snapshot) => {
          const data = snapshot.val();
          const articlesData = Object.values(data)
          var i
          for(i=0;i < articlesData.length;i++){
            if(articlesData[i].postKey == this.$route.params.postKey){
                const postData = {
                caption:articlesData[i].caption,
                content:articlesData[i].content,
                date:articlesData[i].date,
                detail:articlesData[i].detail,
                id:articlesData[i].id,
                mainSc:articlesData[i].mainSc,
                name:articlesData[i].name,
                postKey:articlesData[i].postKey,
                preview:articlesData[i].preview,
                subSc1:articlesData[i].subSc1,
                subSc2:articlesData[i].subSc2,
                subSc3:articlesData[i].subSc3,
                theme:articlesData[i].theme,
                view:articlesData[i].view+1,
                like:articlesData[i].like,
                save:articlesData[i].save
              };
              const postKey = this.$route.params.postKey
              const updates={};
              updates['articles/'+postKey] = postData;
              update(ref(db),updates)
            }
          }
        }).catch((error)=>{
          console.error(error)
        })
    },
    Like(){
      const db = getDatabase();
          const articlesDB = ref(db, 'articles/');
          get(articlesDB).then((snapshot) => {
          const data = snapshot.val();
          const articlesData = Object.values(data)
          var i
          for(i=0;i < articlesData.length;i++){
            if(articlesData[i].postKey == this.articleInfo.postKey){
                const postData = {
                caption:articlesData[i].caption,
                content:articlesData[i].content,
                date:articlesData[i].date,
                detail:articlesData[i].detail,
                id:articlesData[i].id,
                mainSc:articlesData[i].mainSc,
                name:articlesData[i].name,
                postKey:articlesData[i].postKey,
                preview:articlesData[i].preview,
                subSc1:articlesData[i].subSc1,
                subSc2:articlesData[i].subSc2,
                subSc3:articlesData[i].subSc3,
                theme:articlesData[i].theme,
                view:articlesData[i].view,
                like:articlesData[i].like+','+this.$session.get('userInfo').id,
                save:articlesData[i].save
              };
              const postKey = this.$route.params.postKey
              const updates={};
              updates['articles/'+postKey] = postData;
              update(ref(db),updates)
            }
          }
        }).catch((error)=>{
          console.error(error)
        })
    },
    unLike(){
      const db = getDatabase();
          const articlesDB = ref(db, 'articles/');
          get(articlesDB).then((snapshot) => {
          const data = snapshot.val();
          const articlesData = Object.values(data)
          var i
          for(i=0;i < articlesData.length;i++){
            if(articlesData[i].postKey == this.articleInfo.postKey){
                const postData = {
                caption:articlesData[i].caption,
                content:articlesData[i].content,
                date:articlesData[i].date,
                detail:articlesData[i].detail,
                id:articlesData[i].id,
                mainSc:articlesData[i].mainSc,
                name:articlesData[i].name,
                postKey:articlesData[i].postKey,
                preview:articlesData[i].preview,
                subSc1:articlesData[i].subSc1,
                subSc2:articlesData[i].subSc2,
                subSc3:articlesData[i].subSc3,
                theme:articlesData[i].theme,
                view:articlesData[i].view,
                like:articlesData[i].like.replace(","+this.$session.get('userInfo').id,""),
                save:articlesData[i].save
              };
              const postKey = this.$route.params.postKey
              const updates={};
              updates['articles/'+postKey] = postData;
              update(ref(db),updates)
            }
          }
        }).catch((error)=>{
          console.error(error)
        })
    },
    Save(){
          const db = getDatabase();
          const articlesDB = ref(db, 'articles/');
          get(articlesDB).then((snapshot) => {
          const data = snapshot.val();
          const articlesData = Object.values(data)
          var i
          for(i=0;i < articlesData.length;i++){
            if(articlesData[i].postKey == this.articleInfo.postKey){
                const postData = {
                caption:articlesData[i].caption,
                content:articlesData[i].content,
                date:articlesData[i].date,
                detail:articlesData[i].detail,
                id:articlesData[i].id,
                mainSc:articlesData[i].mainSc,
                name:articlesData[i].name,
                postKey:articlesData[i].postKey,
                preview:articlesData[i].preview,
                subSc1:articlesData[i].subSc1,
                subSc2:articlesData[i].subSc2,
                subSc3:articlesData[i].subSc3,
                theme:articlesData[i].theme,
                view:articlesData[i].view,
                like:articlesData[i].like,
                save:articlesData[i].save+','+this.$session.get('userInfo').id
              };
              const postKey = this.$route.params.postKey
              const updates={};
              updates['articles/'+postKey] = postData;
              update(ref(db),updates)
            }
          }
        }).catch((error)=>{
          console.error(error)
        })
    },
    Delete(){
          const db = getDatabase();
          const articlesDB = ref(db, 'articles/');
          get(articlesDB).then((snapshot) => {
          const data = snapshot.val();
          const articlesData = Object.values(data)
          var i
          for(i=0;i < articlesData.length;i++){
            if(articlesData[i].postKey == this.articleInfo.postKey){
                const postData = {
                caption:articlesData[i].caption,
                content:articlesData[i].content,
                date:articlesData[i].date,
                detail:articlesData[i].detail,
                id:articlesData[i].id,
                mainSc:articlesData[i].mainSc,
                name:articlesData[i].name,
                postKey:articlesData[i].postKey,
                preview:articlesData[i].preview,
                subSc1:articlesData[i].subSc1,
                subSc2:articlesData[i].subSc2,
                subSc3:articlesData[i].subSc3,
                theme:articlesData[i].theme,
                view:articlesData[i].view,
                like:articlesData[i].like,
                save:articlesData[i].save.replace(","+this.$session.get('userInfo').id,""),
              };
              const postKey = this.$route.params.postKey
              const updates={};
              updates['articles/'+postKey] = postData;
              update(ref(db),updates)
            }
          }
        }).catch((error)=>{
          console.error(error)
        })
    },
    },
    }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
::v-deep{
.detail-wrap{border-bottom:1px solid #dfdfdf}
.detail-header{text-align:left;padding-bottom:1rem;max-width:1000px;margin:auto;}
.detail-title{font-size:0.8rem;font-family: "imperial";}
.theme{font-size:0.6rem;font-weight:bold}
.detail{font-size:2rem;font-family: "karnakPro-condensedBlack";font-weight:bold;color:#121212;letter-spacing: 1px;}

.each-header{text-align:left;max-width:500px;margin:1rem auto 0;display:flex;flex-direction:column;justify-content: space-between;gap:1rem}

.mainImg{max-width:600px;max-height:400px;margin:0 auto 1rem}
.mainImg img{width:100%;height:100%;display:block;max-height:300px}

.sub-titlebox{margin:0.2rem 0}
.main-title{font-family:"cheltenham";color:#121212;font-size:1.4rem}
.sub-title{font-family:"imperial";font-size:0.8rem;}
.date{font-size:0.7rem}

.each-btnbox{
  display:flex;max-width:500px;margin: 1rem auto;
  #btn{margin-right:1rem;box-sizing: border-box;padding:1rem;background: #fff;box-shadow:none;border:1px solid #c9c9c9;border-radius:20px}
  }
  

.content{max-width:600px;margin:1rem auto;text-align:left;font-size:0.9rem;font-family:"imperial";display:flex;flex-direction:column;gap:1rem 0}

.account-sub-box{display:none}

.login-need{width:100%;max-width: 1000px;margin:auto}
.home-box{height:300px;display:flex;flex-direction:column;justify-content: center;}
.home-btn{width:50%;margin:auto;max-width:200px}

.main{max-width:500px;margin:auto}
          pre {
                padding: 0.7rem 1rem;
                border-radius: 5px;
                background: black;
                color: white;
                font-size: 0.8rem;
                overflow-x: auto;
                code {
                    display: block;
                }
            }

            p code {
                padding: 0.2rem 0;
                border-radius: 5px;
                font-size: 0.8rem;
                font-weight: bold;
                background: rgba(black, 0.1);
                color: rgba(black, 0.8);
            }

            ul,
            ol {
                padding-left: 1rem;
            }

            li > p,
            li > ol,
            li > ul {
                margin: 0;
            }

            // a:not(.btn) {
            //     color: blue;
            //     text-decoration: underline;
            // }
            blockquote {
                border-left: 3px solid rgba(black, 0.1);
                color: rgba(black, 0.8);
                padding-left: 0.8rem;
                font-style: italic;

                p {
                    margin: 0;
                }
            }

            img {
                width: 100%;
                max-height:400px;
                border-radius: 3px;
                display:block;
                // margin:auto
            }

            table {
                border-collapse: collapse;
                table-layout: fixed;
                width: 100%;
                margin: 0;
                overflow: hidden;

                td,
                th {
                    min-width: 1em;
                    border: 2px solid gray;
                    padding: 3px 5px;
                    vertical-align: top;
                    box-sizing: border-box;
                    position: relative;
                    > * {
                        margin-bottom: 0;
                    }
                }

                th {
                    font-weight: bold;
                    text-align: left;
                }
            }}
</style>