<template>
    <div>
        <h2>Count: {{ count }}</h2>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        increment() {
            if (this.count < 10)
            this.count ++;
        },
        decrement() {
            if (this.count > 0)
            this.count --;
        }
    }
}
</script>
<style lang="">
    
</style>