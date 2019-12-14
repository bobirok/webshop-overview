<template>
    <div class="wrapper-div row item">
        <img class="productImage col s3 m3 l3" v-bind:src="img" alt="">
        <p class="col l3 s3 m3">{{ name }}</p>
        <p class="col l3 s3 m3"><b>${{ price }}</b></p>
        <div class="buttons row l3 s3 m3">
            <button @click="removeFromCart" class="btn red white-text">Remove</button>
            <button class="btn teal white-text">Buy</button>
        </div>
    </div>
</template>

<script>
import * as axios from 'axios';

export default {
    name: 'CartItem',
    props: [
        'id',
        'img',
        'name',
        'price'
    ],
    data() {
        return {

        }
    },
    methods: {
        removeFromCart() {
            let auth = 'Bearer ' + localStorage.getItem('token');
            axios.delete('http://localhost:3000/cart/' + this.$props.id, { headers: { 'Authorization': auth }})
            .then((res) => {
                let title = 'Removed!';
                let type = 'success'
                this.$alert(res.data, title, type, {
                    timer: 2000
                })
                this.$emit('itemRemoved');
            })
        }
    }
}
</script>

<style>
.item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    vertical-align: center;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto auto;
}

.productImage {
    width: 100px !important;
    height: 75px;
    padding: 7px !important;
}
</style>