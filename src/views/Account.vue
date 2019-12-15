<template>
    <div class="account-main wrapper-div">
        <h1>Account page</h1>
        <div class="profile-overview container">
            <div class="wrapper-div row description">
                <label class="white-text col l4 m4 s4">Username: </label>          
                <input class="white-text col l8 m8 s8" type="text" v-model="username">
            </div>
            <div class="wrapper-div row description">            
                <label class="white-text col l4 m4 s4">First name: </label>
                <input class="white-text col l8 m8 s8" type="text" v-model="firstName">
            </div>
            <div class="wrapper-div row description">
                <label class="white-text col l4 m4 s4">Last name: </label>
                <input class="white-text col l8 m8 s8" type="text" v-model="lastName">
            </div>
            <div class="wrapper-div row description">            
                <label class="white-text col l4 m4 s4">Age: </label>
                <input class="white-text col l8 m8 s8" type="text" v-model="age">
            </div>
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

<style lang="scss">
@import '../styles/variables';

.account-main {
    background-color: $mainComponentBackground;
    border: 1px solid black;
    color: white;

    .description {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        label {
            font-size: 20px;
        }
    }
}

input {
    border-bottom: 1px solid white !important;
}

.profile-overview {
    width: 35%;
    height: 40vh;
}
</style>