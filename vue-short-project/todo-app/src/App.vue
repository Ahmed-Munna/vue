<template>
  <div>
    <div class="w-9/12 m-auto mt-40 shadow-md shadow-lime-200 px-14 pb-10 rounded-lg">
      <img src="./assets/images/logo.png" class="w-40 h-18">
      <div class="mb-10">
        <form>
          <label for="addText" class="block mb-2 font-thin ">Add Items <span class="font-bold text-lime-600">*</span></label>
          <input type="text" id="addText" class="w-3/4 h-10 rounded-md focus:outline-lime-400 border border-lime-600 text-lime-600 mb-16" >

          <button class="px-8 py-2 bg-lime-300 font-medium rounded-md ml-4 w-52">Add</button>
        </form>
      </div>
      <div>
        <ol>
          <li class="p-4 mb-4 flex justify-between rounded-md border-2 border-dashed">
            <p class="inline">Hello</p>
            <div class="inline">
              <a class="px-8 py-2 bg-sky-300 font-medium rounded-md ml-4">Update</a>
              <a class="px-8 py-2 bg-red-300 font-medium rounded-md ml-4">Delete</a>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>