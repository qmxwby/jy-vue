<template>
  <div id="app">
    <HelloWorld></HelloWorld>
	<index1></index1>
	<HotLawyers></HotLawyers>
	<LawyerRequest></LawyerRequest>
	<index4></index4>
	<index42></index42>
	<Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HotLawyers from './components/HotLawyers.vue'
import index1 from './components/index1.vue'
import LawyerRequest from './components/LawyerRequest.vue'
import Footer from './components/Footer.vue'
import index4 from './components/index4.vue'
import index42 from './components/index42.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
	HotLawyers,
	index1,
	LawyerRequest,
	index4,
	index42,	
	Footer
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
