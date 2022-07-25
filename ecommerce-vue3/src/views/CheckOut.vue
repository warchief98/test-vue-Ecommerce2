<template>
    <div>
        <table>
            <tr>
                <th>
                    product name
                </th>
                <th>
                    picture
                </th>
                <th>
                    No of product
                </th>
                <th>
                    price of each
                </th>
                <th>
                    No * price
                </th>
            </tr>
            <tr v-for="(item, index) in cardItems" :key="index">
                <td>{{item.title}}</td>
                <td><img :src='item.image' alt=""></td>
                <td>{{ item.number }}</td>
                <td>{{ item.price }} $</td>
                <td>{{ (item.number) * item.price }} $</td>
            </tr>
        </table>
    </div>
</template>
<script>


export default {
    data(){
        return{
            cardItems:[]
        }
    },
    created(){
        this.cardItems = this.$store.state.allBuy
    },
    methods:{
    }
}
</script>
<style scoped>
table{
    border: 5px solid silver;
    width: 90%;
    margin: auto;
    border-collapse: collapse;
}
table, th, td{
    border: 1px solid silver;
}
tr:nth-child(odd){
    background-color: rgb(231, 231, 231);
}
th{
    text-align: center;
}
td{
    height: 100px;
    text-align: center;
    white-space: wrap;
}
td:first-child{
    text-align: left;
}
td > img{
    object-fit: contain;
    width: 90%;
    height: 90%;
}
</style>
