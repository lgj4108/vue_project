<template>
  <div>
    <h3>게시판 상세</h3>
    <div>
      <table>
        <tr>
          <th>
            제목
          </th>
          <td v-if="mode==='modify'">
            <input v-bind:type="'text'" v-model="row.subject" />
          </td>
          <td v-else>
            {{row.subject}}
          </td>
        </tr>
        <tr>
          <th>
            내용
          </th>
          <td>
            {{row.contents}}
          </td>
          <td>
            {{row.contents}}
          </td>
        </tr>
        <tr>
          <th>
            작성자
          </th>
          <td>
            {{row.name}}
          </td>
          <td>
            {{row.name}}
          </td>
        </tr>
      </table>
    </div>
    <div v-if="mode===''">
      <button v-on:click="goPrePage">게시글로</button>
      <button v-on:click="modifyClick">수정</button>
    </div>
    <div v-else>
      <button v-on:click="saveClick">저장</button>
      <button v-on:click="cancelClick">취소</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardView',
  props: ['rowData', 'index'],
  data () {
    return {
      row: this.setRowData(this.rowData[this.index]),
      orgRow: this.rowData[this.index],
      mode: ''
    }
  },
  methods: {
    setRowData: function (data) {
      let retData = JSON.parse(JSON.stringify(data))

      return retData
    },
    modifyClick: function () {
      this.mode = 'modify'
    },
    saveClick: function () {
      alert('저장')
    },
    cancelClick: function () {
      this.mode = ''
      this.row = this.setRowData(this.orgRow);
    },
    goPrePage: function(){
      this.$emit('goView', '', '')
      this.$router.push({path: '/board/text/list'})
    }
  }
}
</script>
