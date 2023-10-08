<template lang="">
    <div>
        <h2>{{ msg }}</h2>
        <HelloBD app-creator='Munna'> </HelloBD>
    </div>
</template>
<script>
import HelloBD from './components/HelloBD.vue';
export default {
    name: 'myVue',
    components: {
        HelloBD
    },
    data() {
        return {
            msg: "Hello Vue JS",
        }
    },
}
</script>
<style lang="">
    
</style>