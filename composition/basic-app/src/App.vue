<template>
  <div>
    <h2>{{ myName }}</h2>
    <h2>Count: {{ count }}</h2>
    <button @click="clickMe">Add</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const myName = ref("Hello World");
let count = ref(0);

function clickMe() {
  count += 1;
}
</script>
<style lang="">
  
</style>
