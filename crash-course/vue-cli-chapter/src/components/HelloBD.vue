<template lang="en">
    <div>
        <h2> {{ mymsg }} ({{appCreator}})</h2>
        <slot name="default"></slot>
        <slot name="footer"></slot>
    </div>
</template>
<script>
export default {
    name: 'HelloBD',
    props: {appCreator: {
        type: String,
        // default: 'Ami Munna',
        required: true,
    }},
    data() {
        return {
            mymsg: "Hello Bangladesh",
        }
    },
}
</script>
<style scoped>
    
</style>