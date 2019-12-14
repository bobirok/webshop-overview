<template>
    <div class="account-main wrapper-div">
        <h1>Account page</h1>
        <div class="profile-overview container">
            <input type="text" v-model="username">
            <input type="text" v-model="firstName">
            <input type="text" v-model="lastName">
            <input type="text" v-model="age">
        </div>
        <ShoppingCart class="shopping-cart"/>
    </div>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart'

export default {
    name: 'Account',
    data() {
        return {
            username: null,
            firstName: null,
            lastName: null,
            age: null
        }
    },
    components: {
        ShoppingCart
    },
    mounted() {
        let user = JSON.parse(localStorage.getItem('user'));
        if(user !== null) {
            this.username = user.username;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.age = user.age;
            this.$store.logged = true;
        } else {
            this.$router.push("login")
        }
    }
}
</script>

<style>
.profile-overview {
    width: 35%;
    height: 45vh;
}
</style>