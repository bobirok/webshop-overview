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
    </div>
</template>

<script>
import CartItem from './cards/CartItem';
import * as axios from 'axios';

export default {
    name: 'ShoppingCart',
    data() {
        return {
            cartProducts: undefined
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
    border: 1px solid black;
    margin-bottom: 10px;
}
</style>