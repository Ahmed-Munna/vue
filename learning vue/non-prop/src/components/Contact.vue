<template lang="">
    <div>
        <h4>Contact Details</h4>
        <p>Name: {{ name }}</p>        
        <p>Address: {{ address }}</p>        
    </div>
</template>
<script>
export default {
    inject: ['name', 'address']
}
</script>
<style lang="">
    
</style>