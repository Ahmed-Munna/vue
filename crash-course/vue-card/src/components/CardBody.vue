<template lang="en">
    <div>
        <p class="bg-[#B4F3EC] px-3 py-1 w-14 rounded-full text-sm">NEW</p>
        <h3 class="text-xl my-2 font-semibold uppercase leading-tight truncate"> {{title}} </h3>
        <p class="my-2"> {{ price }} /wk</p>
        <button class="bg-[#B4F3EC] mt-8 px-8 py-2 rounded-full uppercase font-semibold" @click="BuyNow">Buy Now</button>
    </div>
</template>
<script>
export default {
    name: 'CardBody',
    props: {title: String, price: String},
    emits: {
        "BuyNowClick": function(e) {
            if (e) {
                return "Errro";
            }
        }
    },
    methods: {
        BuyNow() {
            this.$emit('BuyNowClick', this.title);
        }
    }
}
</script>
<style lang="">
    
</style>