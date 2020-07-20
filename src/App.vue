<template>
  <div id="app">
    <HelloWorld></HelloWorld>
	<HotLawyers></HotLawyers>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HotLawyers from './components/HotLawyers.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
	HotLawyers
  }
}
</script>

<style>
body{
	margin: 0;
	padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center; */
  color: #2c3e50;
  margin-top: 0;
  padding: 0;
}
</style>
