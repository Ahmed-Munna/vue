<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheNonProp from './components/TheNonProp.vue'
import Login from './components/Login.vue'
import Registration from './components/Registrations.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <TheNonProp
  foo="bar"
  @click="theClick"
  ></TheNonProp>

  <div>
    <div class="btn">
      <button @click="clickLogin(item)" v-for="item in createdComp" :key="item">{{ item }}</button> 
    </div>
    <div class="components">
      <keep-alive>
        <component :is="componentId"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      createdComp: ['Login', 'Registration', 'Contact'],
      componentId: 'Login',
    }
  },  
  methods: {
    theClick() {
      console.log("hello");
    },
    clickLogin(item) {
      this.componentId = item
    },
  },
  provide() {
    return {
      name: 'Ahmed Munna',
      address: 'Dhaka, Bangladesh'
    }
  },
  components: {
    Login,
    Registration,
    Contact
  }
}
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
