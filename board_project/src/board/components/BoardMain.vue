<template>

  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-if="$route.fullPath==='/'">메인 화면</h2>
    <h2 v-else>Board-type : {{type}}</h2>
    <div v-if="$route.fullPath==='/'">
      <router-link to="/board/text/list">텍스트 게시판 이동</router-link>
    </div>
    <div v-else>
      <component 
      v-on:goView="changeView" 
      v-bind:rowData="listData" 
      v-bind:index="idx" 
      v-bind:is="currentView"></component>
    </div>
  </div>
</template>

<script>
var data = [
  {seq: 1, subject: '작성글 test1', contents: '내용111111', name: 'kwangJaMon1'},
  {seq: 2, subject: '작성글 test2', contents: '내용222222', name: 'kwangJaMon2'},
  {seq: 3, subject: '작성글 test3', contents: '내용333333', name: 'kwangJaMon3'}
]

import BoardList from '@/board/components/list/BoardList'
import BoardView from '@/board/components/view/BoardView'

export default {
  name: 'BoardMain',
  props: ['type', 'mode'],
  data () {
    return {
      msg: '광진 테스트',
      listData: data,
      currentView: 'board-list',
      idx: ""
    }
  },
  components: {
    'board-list': BoardList,
    'board-view': BoardView
  },
  updated: function(){
    if(this.currentView===undefined || this.currentView===null || this.currentView==='') {
      this.currentView = 'board-list'
    }
  },
  methods: {
    changeView: function(view, index){
      this.currentView = view
      this.idx = index
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
