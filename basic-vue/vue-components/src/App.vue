<template>
  <div>
    <h1>Hello</h1>
    <CounterCompo></CounterCompo>
    <!-- <CardCompo
    v-for="card in cards" 
    :title="card.title"
    >
    {{ card.discription }}
  </CardCompo> -->
   <button 
   v-for="tab in tabs"
   :key="tab"
   @click="currentTab = tab"
   >{{ tab }}</button>
   <component :is="currentTab"></component>
  </div>
</template>
<script>
import CardCompo from './components/CardCompo.vue';
import CounterCompo from './components/CounterCompo.vue';
import TabOne from './components/TabOne.vue';
import TabThree from './components/TabThree.vue';
import TabTwo from './components/TabTwo.vue';
export default {
  data() {
    return {
      cards: [
        {title: 'Title-1', discription:'When a value is passed to a prop attribute, it becomes a property on that component instance. The value of that property is accessible within the template.'},
        {title: 'Title-2', discription:'When a value is passed to a prop attribute, it becomes a property on that component instance. The value of that property is accessible within the template.'},
        {title: 'Title-3', discription:'When a value is passed to a prop attribute, it becomes a property on that component instance. The value of that property is accessible within the template.'},
        {title: 'Title-4', discription:'When a value is passed to a prop attribute, it becomes a property on that component instance. The value of that property is accessible within the template.'},
      ],
      currentTab: 'TabOne',
      tabs: ['TabOne', 'TabTwo', 'TabThree'],
    }
  },
  components: {
    CounterCompo,
    CardCompo,
    TabOne,
    TabTwo,
    TabThree
  }
}
</script>
<style>
  
</style>