<template lang="">
    <div class="bg-login-blue">
        <div class="container grid place-content-center h-screen">
            <div class="p-10 bg-slate-50 flex flex-col items-center rounded shadow-lg">
                <img 
                    src="../assets/logo/logo.png"
                    class="w-1/2"
                >
                <form @submit.prevent="onSubmit">
                    <div class="w-96 mt-3">
                        <label for="email" class="block font-medium">Email</label>
                        <input 
                        type=""
                        name="email"
                        placeholder="Enter your Email"
                        class="w-full p-2 mt-2 shadow bg-login-blue"
                        v-model="email"
                        :class="{'border border-red-600': emailErrorMsg}"
                        >
                        <span class="text-red-500 text-sm">{{emailErrorMsg}}</span>
                    </div>
                    <div class="w-96 mt-3">
                        <label for="password" class="block font-medium">Password</label>
                        <input 
                        type="password"
                        name="password"
                        placeholder="Enter your Email"
                        class="w-full p-2 mt-2 shadow bg-login-blue"
                        v-model="password"
                        :class="{'border border-red-600': emailErrorMsg}"
                        >
                        <span class="text-red-500 text-sm">{{passwordErrorMsg}}</span>
                        <button class="bg-primary-color text-center w-full p-2 rounded mt-6 font-bold text-slate-200">Login</button>
                    </div>
                    <div class="w-96 mt-6 flex justify-between">
                        <div>
                            <input type="checkbox" id="remember" v-model="remember">
                            <label for="remember" class=" text-gray-500 ml-2 dark:text-gray-400">Remember Me</label>
                        </div>
                        <a href="" class="underline text-gray-500">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ap-login',
    data() {
        return {
            email: '',
            emailErrorMsg: '',
            passwordErrorMsg: '',
            password: '',
            remember: false,
        }
    },
    methods: {
        onSubmit() {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {

                this.emailErrorMsg = '';

            } else {
                this.emailErrorMsg = 'Please enter a valid email address'
                console.log(this.emailErrorMsg)
            }
            if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.password)) {

                this.passwordErrorMsg = '';

            } else {
                this.passwordErrorMsg = 'Your password must be strong'
                console.log(this.password)
            }


        }
    }
}
</script>
<style lang="">
    
</style>