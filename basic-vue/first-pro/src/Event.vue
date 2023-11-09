<template>
    <div>
        <h2>{{ name }}</h2>
        <button @click="clickme('hello', $event)">Click</button><br>
        <a href="google.com" @click.stop="clickme('link hello', $event)">link</a>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'Vue JS',
        }
    },
    methods: {
        clickme(msg, event) {
            this.name = 'Vue JS, Awesome😍';
            console.log(msg);
            event.preventDefault();
            console.log(event.target);
        }
    }
}
</script>
<style>
    
</style>