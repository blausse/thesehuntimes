<template>
<div class="more-box">
  <p class="title">More News</p>
<div class="main-article">
  <div class="img-box">
    <div class='mainImg'><img :src="require(`@/assets/images/${mainImg.name}.png`)"></div>
    <div class='mainSc'><v-btn width="100%" class="more-btn" @click="study">Go To Study</v-btn></div>
  </div>
    <div class="subSc1 flex-column"><img :src="require(`@/assets/images/${more1.name}.png`)"></div>
    <div class="subSc2 flex-column"><img :src="require(`@/assets/images/${more2.name}.png`)"></div>
    <div class="subSc3 flex-column"><img :src="require(`@/assets/images/${more3.name}.png`)"></div>
    <div class="subSc4 flex-column"><img :src="require(`@/assets/images/${more4.name}.png`)"></div>
    <div class="subSc5 flex-column"><img :src="require(`@/assets/images/${more5.name}.png`)"></div>
    <div class="subSc6 flex-column"><img :src="require(`@/assets/images/${more6.name}.png`)"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'mainArticle',
  data(){
    return{
      mainImg:{name:"study"},
      more1:{name:"shcoding"},
      more2:{name:"codingapple"},
      more3:{name:"datascience"},
      more4:{name:"inflearn"},
      more5:{name:"nomad"},
      more6:{name:"dbokey"},
  }},
  methods:{
  study(){
            this.$router.push({
                path:'/study'
            })
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-article{
  padding:1rem 0;
  display:grid;
  grid-gap:1rem;
  grid-auto-rows:100px;
  grid-template-columns: repeat(4,1fr);
  grid-template-areas: 
  'a b b c'
  'd b b e'
  'f b b g'
}
.img-box{grid-area:b;display:flex;flex-direction:column;justify-content: space-between;}
/* .mainImg{flex-grow:6} */
.mainImg img{width:100%;display:block;object-fit:cover;height:270px}

/* .mainSc{flex-grow:3;margin:1rem 0} */
/* .view{flex-grow:1} */
.subSc1{grid-area:a;}
.subSc2{grid-area:c;}
.subSc3{grid-area:d;}
.subSc3 img{background: #fcd904}
.subSc4{grid-area:e;}
.subSc4 img{background:#00c867}
.subSc5{grid-area:f;}
.subSc5 img{background: #f2f2f2}
.subSc6{grid-area:g;}
.subSc6 img{background: #f9f9f9;}
.flex-column{display:flex;flex-direction:column;justify-content: space-between;cursor:pointer}

.title{text-align:left;font-weight: bold;}
img{width:100%;height:100%;display:block;box-shadow: 0 1px 6px 0 #20212447;object-fit:contain;cursor:pointer}

.more-btn{font-weight:bold}
</style>
