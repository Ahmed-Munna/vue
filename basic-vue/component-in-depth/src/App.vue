<template>
  <div>
    <Card v-bind="cardInfo"  @counting="countingOne"></Card>
  </div>
</template>
<script>
import Card from './components/Card.vue';

export default {
  data() {
    return {
      cardInfo: {
        title: 'Card Title One',
        discription: 'when the parent property updates, it will flow down to the child, but not the other way around.',
        count: 0,
      },
    }
  },
  methods: {
    countingOne(n) {
      this.cardInfo.count += n;
    }
  },
  components: {
    Card,
  }
}
</script>
<style lang="">
  
</style>