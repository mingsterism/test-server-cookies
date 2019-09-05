<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a href="/tasks">go to tasks</a>
    <router-view></router-view>
    <button @click="apiAccess('GET')">GET API</button>
    <button @click="apiAccess('POST')">POST API Cookie</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  methods: {
    apiAccess(method) {
      console.log("GETTING COOKIE");
      fetch("http://127.0.0.1:3000/getcookie", {
        method,
        headers: {
          header1: "lalala"
        },
        mode: "cors",
        credentials: "include"
      }).then(data => console.log(data));
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
