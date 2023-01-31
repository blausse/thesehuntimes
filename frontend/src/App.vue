<template>
  <v-app>
<headerView></headerView>
    <v-main>
      <router-view/>
    </v-main>
  <footerView></footerView>
  </v-app>
</template>

<script>
import headerView from '@/components/headerView.vue'
import footerView from '@/components/footerView.vue'
export default({
  components:{
    headerView,
    footerView
  }
})
</script>
<style>
/* @import "@/assets/css/reset.css"; */
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
nav a.router-link-exact-active {
  color: #42b983;
}
.v-application{padding:0 1rem}
</style>