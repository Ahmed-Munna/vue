import { defineStore } from 'pinia';

export const useTodoApp = defineStore("TodoApp", {

    state: () => ({
        todoItems: [],
        todoForms: {
            userId: 1,
            title: null,
            completed: false,
        },

    }),
    getters: {

    }, 
    actions: {

        // get all task
        async getAllTask() {
            const response =  await fetch('https://jsonplaceholder.typicode.com/todos')
                                .then(res => res.json())
                                .then(res => res);

            this.todoItems = response;
            this.todoItems.reverse();
        },
        // add task
        async addItem() {
            if (this.todoForms.title != null) {
                const request = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify({
                    userId: this.todoForms.userId,
                    title: this.todoForms.title,
                    completed: this.todoForms.completed,
                }) }).then(res => res.json());

                this.todoItems.push(this.todoForms);
                this.todoForms.title = null;

                console.log(request)
            }

        }
    }
});