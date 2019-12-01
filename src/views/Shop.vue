<template>
    <div class="shop col s10 l12 m10">
        <div class="main s12 m12 l12">
            <div class="row products s8 m8 l8">
                <div class="col s12 m6 l3" v-for="(product, index) in products" :key="index"><Product 
                v-bind:name="product.name" 
                v-bind:price="product.price"
                v-bind:quantity="product.quantity"
                v-bind:img="product.image"
                />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Product from '@/components/cards/Product.vue'
const axios = require('axios')

export default {
    name: 'Shop',
    components: {
        Product
    },
    data() {
        return {
            products: []
        }
    },
    methods: {
        getProducts() {
            axios.get('http://localhost:3000/products')
            .then((res) => {
                this.products = res.data;
            })
        }
    },
    mounted() {
        this.getProducts();
    }
}
</script>

<style>
.shop {
    border: 1px solid black;
    background: #64b2cd;
}

.shop > .main > .products {
    padding: 25px;
}

</style>