<template>
    <div>
        <h2> {{ count }} </h2>
        <button @click="count++">click</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
        }
    }
}
</script>
<style lang="">
    
</style>