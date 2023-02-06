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
          {{line.subSc}}
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
      lines:[
        {mainSc:"TAILWIND CSS",subSc1:"Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.",subSc2:'',subSc3:'',subSc4:'',view:"10m READ",src:"tailwindcss",date:'',caption:"",subject:'front'},
        {mainSc:"restAPI",subSc1:"A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.",subSc2:'',subSc3:'',subSc4:'',view:"10m READ",src:"restAPI",date:'',caption:"",subject:'back'},
        {mainSc:"JSON",subSc1:"JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays.",subSc2:'',subSc3:'',subSc4:'',view:"10m READ",src:"json",date:'',caption:"",subject:'front'},
        {mainSc:"PYTHON",subSc1:"Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",subSc2:'',subSc3:'',subSc4:'',view:"10m READ",src:"python2",date:'',caption:"",subject:'back'},
      ],
      articles:[]
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-article{padding:1rem 0;border-top:1px solid #121212;border-bottom:1px solid #121212}
.line-box{display:flex;justify-content: space-between;width:100%;padding-left:1rem;border-left:1px solid #dfdfdf;margin-left:0.5rem;height:auto}
.line{display:flex;min-width:25%;box-sizing: border-box;justify-content: space-between;height:auto;cursor:pointer}
.line-script{display:flex;flex-direction:column;justify-content: space-between;width:100%;text-align: left;margin:0 1rem;padding-right:1rem}
.line-script{border-right:1px solid #dfdfdf;}

.inner {
  width:10vw;height:10vw;object-fit:cover;max-width:90px;max-height:90px}

/* .line img{width:10vw;height:10vw;object-fit: cover;max-width:90px;max-height:90px} */

.main{color:#121212;font-size:1rem;font-family:"cheltenham"}
.sub{color:#5a5a5a;font-size:0.6rem;max-height:150px;margin-bottom:auto;overflow:hidden;font-family:"imperial"}
.view{color:#acacac;font-size:0.6rem}
::-webkit-scrollbar {display: none; /* Chrome, Safari, Opera*/}
</style>