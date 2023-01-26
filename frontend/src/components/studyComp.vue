<template>
<div>
    <div class="detail-header">
    <p class="theme">Study</p>
    <p class="detail">Groups</p>
    <p class="detail-sub">relating to or denoting the part of a computer system or application with which the user interacts directly.</p>
  </div>
    <div class="study">
        <v-card class="card" v-for="list,i in classList" :key="i">
            <v-img v-if="list.src" height="100px" :src="require(`@/assets/images/${list.src}.png`)" fill></v-img>
            <div class="card-header">
            <div class="title">{{list.title}}</div>
            <div class="sub-title" align="left">{{list.subTitle}}</div>
            </div>
             <div class="time">    
                <v-btn x-small class="time-icon">{{list.time1}}</v-btn>
                <v-btn x-small class="time-icon">{{list.time2}}</v-btn>
                <v-btn x-small class="time-icon">{{list.time3}}</v-btn>
                <v-btn x-small class="time-icon">{{list.time4}}</v-btn>
            </div>
            <v-rating :value='list.rating' color="amber" dense half-increments readonly size="16" align="right" class="star"></v-rating>
        </v-card>
    </div>
    <div class="host-header">
    <p class="theme">Study</p>
    <p class="detail">Host</p>
    <p class="detail-sub">relating to or denoting the part of a computer system or application with which the user interacts directly.</p>
  </div>
  <div class="host">
     <v-card class="host-card" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Frontend
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Sehun Kim
        </v-list-item-title>
        <v-list-item-subtitle>JS, vue, React, php, mysql, node.js, firebase, mariaDB...</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80"><img src="@/assets/images/sehun.png" alt=""></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn outlined rounded text x-small>Join</v-btn>
      <v-btn outlined rounded text x-small>Chat</v-btn>
      <v-btn outlined rounded text x-small>Like</v-btn>
    </v-card-actions>
  </v-card>
  <v-card class="host-card" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Frontend
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Sehun Kim
        </v-list-item-title>
        <v-list-item-subtitle>JS, vue, React, php, mysql, node.js, firebase, mariaDB...</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80"><img src="@/assets/images/sehun.png" alt=""></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn outlined rounded text x-small>Join</v-btn>
      <v-btn outlined rounded text x-small>Chat</v-btn>
      <v-btn outlined rounded text x-small>Like</v-btn>
    </v-card-actions>
  </v-card>
  <v-card class="host-card" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Frontend
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Sehun Kim
        </v-list-item-title>
        <v-list-item-subtitle>JS, vue, React, php, mysql, node.js, firebase, mariaDB...</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80"><img src="@/assets/images/sehun.png" alt=""></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn outlined rounded text x-small>Join</v-btn>
      <v-btn outlined rounded text x-small>Chat</v-btn>
      <v-btn outlined rounded text x-small>Like</v-btn>
    </v-card-actions>
  </v-card>
  <v-card class="host-card" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Frontend
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Sehun Kim
        </v-list-item-title>
        <v-list-item-subtitle>JS, vue, React, php, mysql, node.js, firebase, mariaDB...</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80"><img src="@/assets/images/sehun.png" alt=""></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn outlined rounded text x-small>Join</v-btn>
      <v-btn outlined rounded text x-small>Chat</v-btn>
      <v-btn outlined rounded text x-small>Like</v-btn>
    </v-card-actions>
  </v-card>
  <v-card class="host-card" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Frontend
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Sehun Kim
        </v-list-item-title>
        <v-list-item-subtitle>JS, vue, React, php, mysql, node.js, firebase, mariaDB...</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80"><img src="@/assets/images/sehun.png" alt=""></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn outlined rounded text x-small>Join</v-btn>
      <v-btn outlined rounded text x-small>Chat</v-btn>
      <v-btn outlined rounded text x-small>Like</v-btn>
    </v-card-actions>
  </v-card>
  </div>
</div>
</template>


<script>
  export default {
    name:'studyComp',
    data: () => ({
        loading: false,
        selection: 1,
        show: false,
        classList:[
            {title:'Frontend',subTitle:'React',time1:'5:30PM',time2:'7:30PM',time3:'8:00PM',time4:'9:30PM',src:'studyReact',rating:'4.5'},
            {title:'Backend',subTitle:'Python',time1:'5:30PM',time2:'7:30PM',time3:'8:00PM',time4:'9:30PM',src:'python3',rating:'5.0'},
            {title:'Security',subTitle:'Token',time1:'5:30PM',time2:'7:30PM',time3:'8:00PM',time4:'9:30PM',src:'token',rating:'3.5'},
            {title:'Block Chain',subTitle:'Bitcoin',time1:'5:30PM',time2:'7:30PM',time3:'8:00PM',time4:'9:30PM',src:'bitcoin',rating:'4.0'},
            {title:'Devops',subTitle:'AWS',time1:'5:30PM',time2:'7:30PM',time3:'8:00PM',time4:'9:30PM',src:'aws',rating:'4.5'},
            {title:'AI-ML',subTitle:'chatGPT',time1:'5:30PM',time2:'7:30PM',time3:'8:00PM',time4:'9:30PM',src:'ai',rating:'4.0'},
        ]
    }),

    methods: {
    },
  }
</script>

<style scoped>
.host-header,.detail-header{text-align:left;padding-bottom:1rem;max-width:1000px;margin:auto;border-bottom:1px solid #dfdfdf}
.host-header{margin-top:1rem}
.detail-sub{font-size:0.8rem;font-family: "imperial";}
.theme{font-size:0.6rem;font-weight:bold}
.detail{font-size:2rem;font-family: "karnakPro-condensedBlack";font-weight:bold;color:#121212;letter-spacing: 1px;}

.study{max-width:1000px;margin:1rem auto;padding:0 0 1rem 1rem;display:flex;gap:1rem;border-bottom:1px solid #121212;overflow-y:scroll}
.card{max-width:20%;min-width:200px;box-sizing: border-box;}
.study .time{display:flex;padding:0 1rem;justify-content: space-between;flex-wrap:wrap}
.card-header{display:flex;justify-content: space-between;box-sizing:border-box;padding:1rem;align-items: center;}
.study .time-icon{background: white;box-shadow: none;border:1px solid #c9c9c9;border-radius: 20px;margin-bottom:1rem}
.star{padding:0 1rem 1rem 1rem}

.host{padding:1rem;display:flex;justify-content: flex-start;max-width:1000px;margin:auto;box-sizing: border-box;gap:1rem;overflow-y:scroll}
.host-card{width:30%}

::-webkit-scrollbar{display:none}
</style>
