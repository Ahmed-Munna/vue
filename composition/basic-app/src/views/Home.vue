<template>
    <div>
        <h1>Home Vue</h1>

        <ul>
            <li v-for="service in services" :key="service.id">
                <router-link :to="{name: 'service', params: {id: service.id}}">
                    {{ service.item }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const services = ref([
    {id: 1, item: 'Web Development'},
    {id: 2, item: 'Web Design'},
    {id: 3, item: 'service kono ekta'},
    {id: 4, item: 'Degital marketing'},
]);

</script>
<style lang="">
    
</style>