<template>
  <div>
   <router-link :to="{name: 'home'}">Home</router-link> | 
   <router-link :to="{name: 'about'}">About</router-link> | 
   <router-link :to="{name: 'contact'}">Contact</router-link> | 
   <router-link :to="{name: 'profile'}">Profile</router-link>

   <router-view></router-view>
  </div>
</template>

<style lang="">
  
</style>
