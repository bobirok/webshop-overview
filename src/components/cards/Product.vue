<template>

  <div class="row s12 m12 l12">
    <div class=" col s12 m12 l12">
      <div class="teal lighten-4 card col s12 m12 l12">
        <div class="card-image">
          <img v-bind:src="img">
          <a class="card-button btn-large btn-floating pulse halfway-fab waves-effect waves-light teal lighten-1"><i class="material-icons">shopping_cart</i></a>
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
export default {
    name: 'Product',
    props: ['img', 'name', 'price', 'quantity'],
    data() {
        return {
            namee: "Test name",
            pricee: 10,
            quantityy: 10
        }
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