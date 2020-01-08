<template>
    <div class="container cart">
        <h1>My shopping cart</h1>
        <div v-if="cartProducts.length" class="wrapper-div items">
            <div v-for="(item, index) in cartProducts" :key="index" class="wrapper-div">
                <CartItem @itemRemoved = 'getCart'
                    v-bind:id=item.id
                    v-bind:img=item.image
                    v-bind:name=item.name
                    v-bind:price=item.price
                />
            </div>
        </div>
        <div v-else class="wrapper-div">
            <router-link to="/shop" class="shop-now"><h2>Shop now <i id="moving-cart" class="material-icons">shopping_cart</i></h2></router-link>
        </div>
        <p v-if="cartProducts.length" class="priceParagraph container">Total to pay: ${{total}}</p>
    </div>
</template>

<script>
import CartItem from './cards/CartItem';
import * as axios from 'axios';

export default {
    name: 'ShoppingCart',
    data() {
        return {
            cartProducts: [],
            total: 0
        }
    },
    components: {
        CartItem
    },
    methods: {
        getCart() {
            let auth = 'Bearer ' + localStorage.getItem('token');
    
            axios.get(`${this.$store.WEBSHOP_API_URL}/cart`, { headers: { 'Authorization': auth}})
            .then((res) => {
                this.cartProducts = res.data.products;
                this.total = res.data.total
            })
            .catch(console.log)
        }
    },
    created() {
        this.getCart();
    }
}
</script>

<style lang="scss">
.cart {
    border: 1px solid black;
    margin-bottom: 10px;
}

.cart .items {
    margin-bottom: 10px;
}

.priceParagraph {
    text-align: right;
    font-size: 18px;
}

.shop-now {
    color: white;
    h2:hover {
        i {
            animation-name: moving-cart;
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }
    }
}

@keyframes moving-cart {
    from {
        margin-left: 0px;
        color: white;
    }
    to {
        margin-left: 50px;
        color: #ccc;
    }
}
</style>