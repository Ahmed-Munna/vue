<template>
    <div>
        <h1>Home Vue</h1>

        <ul>
            <li v-for="service in store.services" :key="service.id">
                <router-link :to="{name: 'single-service', params: {id: service.item}}">{{ service.item }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useAllServices } from '../store/AllServices';

const store = useAllServices();

// const services = ref();

</script>
<style lang="">
    
</style>