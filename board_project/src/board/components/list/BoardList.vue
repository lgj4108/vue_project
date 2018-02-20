<template>
  <div>
     <table>
         <thead>
             <tr>
                 <th>
                    게시번호
                 </th>
                 <th>
                    제목
                 </th>
                 <th>
                    작성자
                 </th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="(row, index) in listData" v-bind:key="row.seq">
                <td>
                    {{row.seq}}
                </td>
                <td>
                    <button v-on:click="setView(index)">{{row.subject}}</button>
                </td>
                <td>
                    {{row.name}}
                </td>
            </tr>
         </tbody>
     </table>
     <a href="/">메인화면 이동</a>
  </div>
</template>

<script>
export default {
  name: 'board-list',
  props: ['rowData', 'viewName'],
  data () {
    return {
        listData: this.rowData,
        currentView: this.viewName
    }
  },
  methods:{
    setView: function (idx) {
        this.$emit('goView', 'board-view', idx)
    }
  }
}
</script>
