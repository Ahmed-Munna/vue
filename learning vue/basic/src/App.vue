<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Rating from './components/Rating.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/vue.png" width="200" height="200" />

    <div class="wrapper">
      <HelloWorld msg="Rating Component" /> 
    </div>
  </header>
  <Rating v-model:modelValue="rating" v-model:modelValueTwo="comments.rating"></rating>
  


</template>

<script>
  export default {
    data() {
      return {
        rating: 3,
        comments: {
          1: 'Bad',
          2: 'So So',
          3: 'Ok',
          4: 'Good',
          5: 'Great'
        }
      }
    },
  }
</script>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}

.logo {
  display: block;
  margin: 0 auto 0 85px;
}
</style>
