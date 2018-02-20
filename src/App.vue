<template>
  <div id="app">
    <common-header></common-header>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from './components/common/Header.vue';
import CommonFooter from './components/common/Footer.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'common-header': CommonHeader,
    'common-footer': CommonFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
