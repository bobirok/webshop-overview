<template>
    <div class="container cart">
        <h1>My shopping cart</h1>
        <div class="wrapper-div items">
            <div v-for="(item, index) in cartProducts" :key="index" class="wrapper-div">
                <CartItem @itemRemoved = 'getCart'
                    v-bind:id=item.id
                    v-bind:img=item.image
                    v-bind:name=item.name
                    v-bind:price=item.price
                />
            </div>
        </div>
            <p class="priceParagraph wrapper-div">Total to pay: ${{total}}</p>
    </div>
</template>

<script>
import CartItem from './cards/CartItem';
import * as axios from 'axios';

export default {
    name: 'ShoppingCart',
    data() {
        return {
            cartProducts: undefined,
            total: undefined
        }
    },
    components: {
        CartItem
    },
    methods: {
        getCart() {
            let auth = 'Bearer ' + localStorage.getItem('token');
    
            axios.get('http://localhost:3000/cart', { headers: { 'Authorization': auth}})
            .then((res) => {
                this.cartProducts = res.data.products;
                this.total = res.data.total
            })
            .catch(console.log)
        }
    },
    mounted() {
        this.getCart();
    }
}
</script>

<style>
.cart .items {
    margin-bottom: 10px;
}

.priceParagraph {
    text-align: right;
}
</style>