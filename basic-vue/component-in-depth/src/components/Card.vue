<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ discription }}</p>
        <p>{{ myProperty }}</p>
        {{ count }}
        <button @click="$emit('counting', 2)">Count</button>
        <button @click="submit">another</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            myProperty: 'What',
            anotherCount: 0,
        }
    },
    // emits: ['counting'],
    props: {
        title: String,
        discription: String,
        count: Number,
    },
    created() {
        console.log(this.myProperty);
    },
    methods: {
        submit() {
            this.$emit('counting', 10);
        }
    }
}
</script>
<style lang="">
    
</style>