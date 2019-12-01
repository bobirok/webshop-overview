<template>
    <form @submit.prevent="login" class="main-login-form container">
        <a class="account-icon btn-floating btn-large"><i class="material-icons">account_circle</i></a>
        <input v-model="username" class="input" type="text" placeholder="Username">
        <input v-model="password" class="input" type="password" placeholder="Password">
        <button class="btn input">Login</button>
    </form>
</template>

<script>
import * as axios from 'axios'

export default {
    name: "Login",
    data() {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        login() {
            axios.post('http://localhost:3000/login?username=' + this.username + '&password=' + this.password)
            .then(res => {
                let token = res.data;
                localStorage.setItem('token', token);
                this.getUser(this.username).then(user => {
                    localStorage.setItem('user', JSON.stringify(user))
                    this.$router.push("me")
                })
            })
        },
        getUser(username) {
            return new Promise((resolve) => {
                axios.get('http://localhost:3000/me?username=' + username)
                .then(res => {
                    resolve(res.data)
                })
            })
        }
    }
}
</script>

<style>
::placeholder {
    color: black;
    text-align: center;
}
.main-login-form {
    width: 40%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid white;
    position: relative;
    background: #d9eeec;
    padding: 15px;
}

.main-login-form .account-icon {
    position: absolute;
    top: -30px;
    left: 45%;
    background: white;
}

.main-login-form .account-icon i {
    font-size: 38px !important;
    color: #26a69a;
}

.main-login-form .input {
    width: 80%;
}
</style>