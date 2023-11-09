<template>
  <div>
    <h1>Hello Veu</h1>
    <div :class="cardClass">
      <h2>Hello</h2>
    </div>
    <div>
      <button @click="clidkMe">Click me</button>
      <h2 v-if="awesome">Vue is Awesome😍</h2>
      <h2 v-else="awesome">Oh balbalbal😥</h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardClass: {
        'shadow': true,
        'card': true,
      },
      awesome: false,
    }
  },
  methods: {
    clidkMe() {
      this.awesome = !this.awesome
    }
  }
}
</script>
<style>
.shadow {
  box-shadow: 5px;
  width: 120px;
}
.card {
  padding: 20px;
  color: white;
  background: black;
}

</style>