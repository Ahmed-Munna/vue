<template>
    <div>
        <h2>{{ route.name }}</h2>
        {{ route.params.id }}
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>
<style lang="">
    
</style>