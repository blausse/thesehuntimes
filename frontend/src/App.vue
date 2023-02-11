<template>
  <v-app>
<headerComp></headerComp>
    <v-main>
      <router-view/>
    </v-main>
  <footerComp></footerComp>
  </v-app>
</template>

<script>
import headerComp from '@/components/headerComp.vue'
import footerComp from '@/components/footerComp.vue'
export default({
  components:{
    headerComp,
    footerComp
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.v-application nav a{
  text-decoration:none;
  color:#2c3e50
}
.v-application p{margin-bottom:0px !important}
nav a:hover{
  color:#42b983
}
nav a.router-link-active {
  color: #42b983;
}
.v-application{padding:0 1rem}

@font-face{
  font-family:"cheltenham";
  src: url("assets/fonts/Cheltenham Regular.ttf");
}
@font-face{
  font-family:"chomsky";
  src: url("assets/fonts/Chomsky.otf");
}
@font-face{
  font-family:"imperial";
  src: url("assets/fonts/ImperialBT-Roman.otf");
}
@font-face{
  font-family:"karnakPro-condensedBlack";
  src: url("assets/fonts/KarnakPro-CondensedBlack.ttf");
}
</style>