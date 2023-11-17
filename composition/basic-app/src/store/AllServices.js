import { defineStore } from 'pinia';

export const useAllServices = defineStore('all-services', {
    state: {
        services: [
            {id: 1, item: 'Web Development'},
            {id: 2, item: 'Web Design'},
            {id: 3, item: 'service kono ekta'},
            {id: 4, item: 'Degital marketing'},
        ]
    }
});