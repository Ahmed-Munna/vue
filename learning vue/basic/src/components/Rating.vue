<template lang="">
    <div class="bg-slate-100 px-8 pl-24 py-8 h-60 w-96 text-black rounded shadow">
        <div class="flex mt-10">
            <div v-for="index in 5" :key="index" @click="handelClick(index)">
                <img
                class="h-8 w-8" 
                src="../../public/star.png" v-if="index <= modelValue" alt="">
                <img
                class="h-8 w-8" 
                src="../../public/un-star.png" v-if="index > modelValue" alt="">
            </div>
        </div>
        <h2 class="mt-4 font-semibold text-lg ml-3">Rated Value = {{ modelValue }}</h2>
    </div>
</template>
<script>
export default {
    name: 'Rating',
    props: ['modelValue'],
    methods: {
        handelClick(index) {
            this.$emit('update:modelValue', index);
        }
    }
}
</script>
<style lang="">
    
</style>