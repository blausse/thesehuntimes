<template>
<div>
<div class="main-article" v-for="basic,i in articles" :key="i" @click="each(basic.postKey)">
  <div class="date">{{basic.date}}</div>
  <div class="script-box">
    <div class='mainSc'>{{basic.mainSc}}</div>
    <ul class="subSc">
      <li v-if="basic.subSc1">{{basic.subSc1}}</li>
      <li v-if="basic.subSc2">{{basic.subSc2}}</li>
      <li v-if="basic.subSc3">{{basic.subSc3}}</li>
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
  name: 'myList',
  created(){
    this.getData()
  },
  data(){
    return{
      articles:[]
  }},
  watch:{
    list : function(){
      if(this.props.list == 'list'){
       return this.getData()
      }if(this.props.list == 'like'){
         return this.getData()
      }if(this.props.list == 'save'){
         return this.getData()
      }}
  },
  methods:{
    back(){
      history.back()
    },
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
  const data = snapshot.val();
  const articleData = Object.values(data)
  var i
  for(i=0;i<articleData.length;i++){
    if(articleData[i].id == this.$session.get('userInfo').id){
      this.articles.push(articleData[i])
    }
  }
})
    },
  },
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