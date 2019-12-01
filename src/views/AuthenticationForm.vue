<template>
    <div class="main-auth-form">
        <div class="wrap wrapper-div">
            <div class="auth-type row m4 s4 l6">
                <button id="login-btn" @click="changeToLoginForm" class="btn-large login-btn">Login</button>
                <button id="register-btn" @click="changeToRegisterForm" class="btn-large register-btn">Register</button>
            </div>
            <div class="login" v-if="isLoginForm">
                <Login />
            </div>
            <div class="register" v-else>
                <Register />
            </div>
        </div>
    </div>
</template>

<script>
import Login from '@/components/auth-forms/Login.vue'
import Register from '@/components/auth-forms/Register.vue'
export default {
    name: "AuthenticationForm",
    components: {
        Login,
        Register
    },
    data() {
        return {
            isLoginForm: true
        }
    },
    methods: {
        changeToLoginForm() {
            this.isLoginForm = true;
            document.getElementById("login-btn").style.background = "#009688";
            document.getElementById("register-btn").style.background = "#d32f2f";
        },
        changeToRegisterForm() {
            this.isLoginForm = false;
            document.getElementById("login-btn").style.background = "#d32f2f";
            document.getElementById("register-btn").style.background = "#009688";
        }
    },
    mounted() {
        document.getElementById("login-btn").style.background = "#009688";
        document.getElementById("register-btn").style.background = "#b71c1c";
    }
}
</script>

<style>
.main-auth-form {
    background: #64b2cd;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
}

.main-auth-form .wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.main-auth-form .wrap .auth-type{
    display: flex;
}

.main-auth-form .wrap .login, .register {
    height: 80vh;
}
</style>