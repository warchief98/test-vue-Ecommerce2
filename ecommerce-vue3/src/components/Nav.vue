<template>
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <router-link to="/Products" class="logo">
                            <img src="@/assets/images/sepehrtaamol_favicon.png">
                        </router-link>
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">
                            <li class="scroll-to-section"><router-link to="/Check-out">To card</router-link></li>
                            <li @click="logOut()"><a>logout</a></li>
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
<script>

export default ({
    methods:{
        logOut(){
            this.$store.commit('changeIsLogin', false)
            this.$router.push('/')
        }
    }
})
</script>
<style>
.header-area .main-nav .logo{
    height: 90px;
}
.header-area .main-nav .logo > img{
    object-fit: contain;
    width: 100%;
    height: 100%;
}
</style>
