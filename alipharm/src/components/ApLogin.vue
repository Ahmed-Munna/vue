<template lang="">
    <div class="bg-login-blue">
        <div class="container grid place-content-center h-screen">
            <div class="p-10 bg-slate-50 flex flex-col items-center rounded shadow-lg">
                <img 
                    src="../assets/logo/logo.png"
                    class="w-1/2"
                >
                <div class="w-96 mt-3">
                    <label for="email" class="block font-medium">Email</label>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    class="w-full p-2 mt-2 shadow bg-login-blue"
                    >
                </div>
                <div class="w-96 mt-3">
                    <label for="password" class="block font-medium">Password</label>
                    <input 
                    type="password"
                    name="password"
                    placeholder="Enter your Email"
                    class="w-full p-2 mt-2 shadow bg-login-blue"
                    >
                    <button class="bg-primary-color text-center w-full p-2 rounded mt-6 font-bold text-slate-200">Login</button>
                </div>
                <div class="w-96 mt-6 flex justify-between">
                    <div>
                        <input type="checkbox" id="remember" checked>
                        <label for="remember" class=" text-gray-500 ml-2 dark:text-gray-400">Remember Me</label>
                    </div>
                    <a href="" class="underline text-gray-500">Forgot Password?</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ap-login'
}
</script>
<style lang="">
    
</style>