<template lang="">
    <div>
        <div class="myClass">
            <h2 v-bind="$attrs">TheNonProp</h2>
            <button class="btn">Ok</button>
        </div>
    </div>
</template>
<script>
export default {
    inheritAttrs: false
}
</script>
<style lang="">
    
</style>