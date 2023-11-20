<script setup>
  import { onMounted } from 'vue'
  import { useTodoApp } from './store/TodoApp';

  const values = useTodoApp();

  onMounted(() => {
    values.getAllTask();
  });

</script>
<template>
  <div>
      <!-- component -->
    <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div class="mb-4">
                <h1 class="text-grey-darkest">Todo List</h1>
                <div class="flex mt-4">
                    <input v-model="values.todoForms.title" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo">
                    <button @click="values.addItem()" class="flex-no-shrink p-2 border-2 rounded text-teal border-teal">Add</button>
                </div>
            </div>
            <div>
                <ul>
                  <li v-for="item in values.todoItems" :key="item.id" class="flex mb-4 items-center">
                    <input type="checkbox" v-show="item.completed == false" :id="'compleate'+ item.id" class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
                    <label :for="'compleate'+ item.id" :class="item.completed? 'text-lime-600': ''" class="w-full text-grey-darkest">{{ item.title }}</label>
                    <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                  </li>
                  {{ values.todoItems}}
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
  
</style>