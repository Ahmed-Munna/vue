<script setup>
  import { useTodoApp } from './store/TodoApp';

  const values = useTodoApp();
</script>
<template>
  <div>
      <!-- component -->
    <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div class="mb-4">
                <h1 class="text-grey-darkest">Todo List</h1>
                <div class="flex mt-4">
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo">
                    <button class="flex-no-shrink p-2 border-2 rounded text-teal border-teal ">Add</button>
                </div>
            </div>
            <div>
                <ul>
                  <li class="flex mb-4 items-center">
                    <input type="checkbox" id="compleate" class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
                    <label for="compleate" class="w-full text-grey-darkest">Add another component to Tailwind Components</label>
                    <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                  </li>
                  {{ values.getAllTask() }}
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
  
</style>