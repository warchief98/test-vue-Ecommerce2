<template>
    <div>
        <NavBar />
            <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import NavBar from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default ({
    components: {
    NavBar:NavBar,
    Footer:Footer
  }
})
</script>
