<template>
  <div class="grid place-items-center">
    <div class="">
      <img 
      src="./assets/apple.png"
      class="rounded w-96 h-60"
      >
    </div>
    <div class="bg-slate-50 px-8 py-6 w-80 -mt-20 rounded-lg shadow">
      <CardBody 
      :title="title"
      :price="price"
      @BuyNow="BuyNowClick"
      ></CardBody>
    </div>
  </div>
</template>

<script>
import CardBody from './components/CardBody.vue';
export default {
  name: 'App',
  components: {
    CardBody
  },
  data() {
    return {
      title: 'I Phone 15 Pro max',
      price: '$1900'
    }
  },
  methods: {
    BuyNowClick() {
      console.log('Hello');
    }
  }

}

</script>

<style>

</style>
