<template>
    <div class="wrapper-div row item">
        <img class="row l3 s3 m3" v-bind:src="img" alt="">
        <p class="row l3 s3 m3">{{ name }}</p>
        <p class="row l3 s3 m3"><b>{{ price }}</b></p>
        <div class="buttons row l3 s3 m3">
            <button class="btn red white-text">Remove</button>
            <button class="btn teal white-text">Buy</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: [
        'img',
        'name',
        'price'
    ],
    data() {
        return {

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
}
</style>