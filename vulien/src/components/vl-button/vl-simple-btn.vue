<template lang="">
    <div> 
        {{tagName}}
    </div>
</template>
<script>
export default {
    props: {
        tagName: {
            type: String,
            default: 'button',

        }
    }
}
</script>
<style lang="">
    
</style>