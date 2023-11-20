import { defineStore } from 'pinia';

export const useTodoApp = defineStore("TodoApp", {

    state: () => ({
        a: 29,
    }),
    getters: {

    }, 
    actions: {

        // get all task
        async getAllTask() {
           const prom =  await fetch('https://jsonplaceholder.typicode.com/todos');
           prom.then(response => response.json())
           .then(json => console.log(json))
        }
    }
});