<template>
    <div>
        <h1>Profile vue</h1>

        <button @click="goBack()">Go back home</button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goBack = () => {
    router.push({name: 'home'});
}
</script>
<style lang="">
    
</style>