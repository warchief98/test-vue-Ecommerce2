<template>
  <div id="app">
    <NavBar v-if='isLogin' />
    <router-view />
    <Footer v-if='isLogin' />
  </div>
</template>

<script>
import NavBar from './components/Nav.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    NavBar:NavBar,
    Footer:Footer
  },
  computed:{
    isLogin(){
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>
  @import './assets/css/bootstrap.min.css';
  @import './assets/css/font-awesome.css';
  @import './assets/css/templatemo-hexashop.css';
  @import './assets/css/flex-slider.css';
  @import './assets/css/lightbox.css';
  #app{
    margin-top:120px;
  }
</style>
