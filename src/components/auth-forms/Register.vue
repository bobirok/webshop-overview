<template>
        <form @submit.prevent="register" class="main-register-form container">
            <a class="account-icon btn-floating btn-large"><i class="material-icons">account_circle</i></a>
            <input v-model="firstName" class="input" type="text" placeholder="First Name">
            <input v-model="lastName" class="input" type="text" placeholder="Last Name">
            <input v-model="age" class="input" type="text" placeholder="Age">
            <input v-model="username" class="input" type="text" placeholder="Username">
            <input v-model="password" class="input" type="password" placeholder="Password">
            <button class="btn input">Register</button>
        </form>
</template>

<script>
import * as axios from 'axios'

export default {
    name: "Register",
    data() {
        return {
            firstName: null,
            lastName: null,
            age: null,
            username: null,
            password: null
        }
    },
    methods: {
        register() {
            axios.get('http://localhost:3000/register?firstname=' + this.firstName + '&lastname=' + this.lastName + '&age=' + this.age + '&username=' + this.username + '&password=' + this.password)
            .then(res => {
                let token = res.data;
                localStorage.setItem('token', token);
                this.$store.logged = true;
                this.$router.push('me')
            })
        }
    }
}
</script>

<style>
::placeholder {
    color: black;
}

.main-register-form {
    width: 40%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid black;
    align-items: center;
    border: 2px solid white;
    position: relative;
    background: #d9eeec;
    padding: 15px;
}

.main-register-form .account-icon {
    position: absolute;
    top: -30px;
    left: 45%;
    background: white;
}

.main-register-form .account-icon i {
    font-size: 38px !important;
    color: #26a69a;
}

.main-register-form > .input {
    width: 80%;
}
</style>