<template>
    <div>
        <h1>{{ myMsg }}</h1>
    </div>
</template>
<script>
export default {
    inject: {
        ourMsg: {
            from: 'message',
            default: "nothing"
        }
    },
    data() {
        return {
            myMsg: this.ourMsg
        }
    },
}
</script>
<style lang="">
    
</style>