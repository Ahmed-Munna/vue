<template>
    <div>
        <h1>This is Not Found Page</h1>

        <button @click="goback()">Go Back</button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goback = () => {
    router.push({name: 'home'})
}
</script>
<style lang="">
    
</style>