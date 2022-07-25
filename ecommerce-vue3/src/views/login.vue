<template>
    <div class="login">
        <p v-if="isWrong" class="error">Username or Password is wrong!!!</p>
        <p v-if="isEmpty" class="error">fill the blanks</p>
        <input type="text" v-model="fields.username" placeholder="Username">
        <input type="password" v-model="fields.password" placeholder="Password">
        <button @click="login()">Login</button>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            id:null,
            fields:{
                username:'',
                password:''
            },
            isWrong:false,
            isEmpty:false,
        }
    },
    created(){
        this.id = this.$route.query.id
        if(this.$store.state.isLogin == true){
            this.$router.push('/Products')
        }
    },
    methods:{
        login(){
            // if(Object.keys(this.fields).length <= 1){
            if((this.fields.username && this.fields.password) == ""){
                this.isWrong = false;
                this.isEmpty = true;
            }
            else{
                let dataLogin={}
                dataLogin.username = this.fields.username
                dataLogin.password = this.fields.password

                this.axios.post('https://fakestoreapi.com/auth/login', {
                username: dataLogin.username,
                password: dataLogin.password
                })
                .then(Response=>{
                    console.log(Response.data.token);
                    window.localStorage.setItem('isLogin',true)
                        this.$store.commit('changeIsLogin', true)
                        this.$router.push({name:'Products'})
                        console.log(this.isLogin)
                })
                .catch(err=>{
                    this.isEmpty = false;
                    this.isWrong = true;
                })
            }
        }
    }
}
</script>

<style scoped>
    .login{
        border: 1px solid silver;
        padding: 5px 20px;
        margin: auto;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .login *{
        margin: 20px 0;
    }
    .login input{
        width: 100%;
    }
    .login button{
        width: 50%;
    }
    .error{
        border: 1px solid red;
        width: 100%;
        text-align: center;
        background-color: rgba(255, 0, 0, 0.478);
    }
</style>