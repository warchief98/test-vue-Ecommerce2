<template>
    <div>
        <!-- ***** Header Area Start ***** -->

    <!-- ***** Header Area End ***** -->

    <!-- ***** Main Banner Area Start ***** -->
    <div class="page-heading" id="top">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="inner-content">
                        <h2>Single Product Page</h2>
                        <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ***** Main Banner Area End ***** -->


    <!-- ***** Product Area Starts ***** -->
    <section class="section" id="product">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                <div class="left-images">
                    <img :src="this.data.image" alt="">
                    <!-- <img src="@/assets/images/single-product-02.jpg" alt=""> -->
                </div>
            </div>
            <div class="col-lg-4">
                <div class="right-content">
                    <h4>{{this.data.title}}</h4>
                    <span class="price">${{this.data.price}}</span>
                    <ul class="stars">
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                    </ul>
                    <span>{{this.data.description}}</span>
                    <div class="quote">
                        <i class="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                    </div>
                    <div class="quantity-content">
                        <div class="left-content">
                            <h6>No. of Orders</h6>
                        </div>
                        <div class="right-content">
                            <div class="quantity buttons_added">
                                <input type="button" value="-" class="minus" @click="quantityMinus()">
                                <input type="number" step="1" min="1" max="" name="quantity" v-model="numberOfOrder" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="">
                                <input type="button" value="+" class="plus" @click="numberOfOrder++">
                            </div>
                        </div>
                    </div>
                    <div class="total">
                        <h4>Total: $ {{Math.round((this.numberOfOrder * this.data.price)*10)/10}}</h4>
                        <div class="main-border-button"><a @click="addToCard()">Add To Cart</a></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    <!-- ***** Product Area Ends ***** -->
    
    <!-- ***** Footer Start ***** -->

    </div>
</template>

<script>
    export default{
        name:'SingleProduct',
        data(){
            return{
                id:'',
                data:{},
                numberOfOrder:1
            }
        },
        created(){
            this.id = this.$route.query.id;
            this.getSingleProduct();
            
        },
        methods:{
            async getSingleProduct(){
                return await this.axios.get(`https://fakestoreapi.com/products/${this.id}`).then((response) => {
                this.data = response.data
                // console.log(response.data)
                })
            },

            quantityMinus(){
                if(this.numberOfOrder > 1){
                    this.numberOfOrder--
                }else{
                    return
                }
            },
            addToCard(){
                let prevAllBuy = this.$store.state.allBuy;
                this.data.number = this.numberOfOrder
                if(prevAllBuy && prevAllBuy.length > 0){
                    prevAllBuy.forEach(e => {
                        if(e.id == this.data.id){
                            e.number = this.numberOfOrder
                        }
                    });
                    if(!prevAllBuy.find(e => e.id == this.data.id)){
                        prevAllBuy.push(this.data)
                        this.$store.commit('addToAllBuy', prevAllBuy)
                    }
                }else{
                    prevAllBuy.push(this.data)
                    this.$store.commit('addToAllBuy', prevAllBuy)
                }
                // console.log(this.$store.state.allBuy)
            }
        }
    }
</script>

<style scoped>

</style>