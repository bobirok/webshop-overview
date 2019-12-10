<template>

  <div class="row s12 m12 l12">
    <div class=" col s12 m12 l12">
      <div class="teal lighten-4 card col s12 m12 l12">
        <div class="card-image">
          <img v-bind:src="img">
          <button @click.prevent="addToCart" class="card-button btn-large btn-floating pulse halfway-fab waves-effect waves-light teal lighten-1"><i class="material-icons">shopping_cart</i></button>
        </div>
        <div class="product-info card-content column">
          <span class="card-title black-text">{{name}}</span>
          <p class="price blue-text centered">${{ price }}</p>
          <span class="teal white-text right">Qty. {{ quantity}}</span>
        </div>
      </div>
    </div>
  </div>     
   
</template>

<script>
const axios = require('axios');

export default {
    name: 'Product',
    props: ['id', 'img', 'name', 'price', 'quantity'],
    data() {
        return {
        }
    },
    methods: {
      addToCart() {
        let auth = 'Bearer ' + localStorage.getItem('token');
        axios.post('http://localhost:3000/cart/' + this.id, {},
        { headers: { 'Authorization': auth}})
        .then(() => {
          let message = 'The product has been added!';
          let title = 'Successfully added';
          let type = 'success'
          this.$alert(message, title, type, {
            timer: 2000
          })
        })
        .catch(() => {
          let message = 'You need to be logged in in order to add to your cart!';
          let title = 'Please log in first';
          let type = 'warning'
          this.$alert(message, title, type, {
            timer: 3000
          })
        })
      }
    },
    mounted() {

    }
}
</script>

<style>
.main {
    overflow: hidden;
}
.main .wrap .card .card-image .card-button:hover {
    background-color: #0277bd !important;
}
.main .wrap .card .price{
    font-size: 20px;
}

.main .wrap .card .product-info *{
    padding: 10px;
}
</style>