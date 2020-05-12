<template>
  <div id="app">
    <!-- <img src="./logo.png">
    <h1>Hello Vue 3!</h1> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/article">Article</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { articleList } from '@/api/article'
export default defineComponent({
  setup() {
    

  }
})
</script>

<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif, Avenir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a{
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
