<template>
    <div>
        <h1>Home Vue</h1>

        <ul>
            {{ store.services }}
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import useAllServices from '../store/AllServices';

const store = useAllServices();

// const services = ref();

</script>
<style lang="">
    
</style>