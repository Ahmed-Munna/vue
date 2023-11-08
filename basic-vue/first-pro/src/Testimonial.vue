<template>
    <div>
        <h2> {{ counted }} </h2>
        <button @click="count">click</button>
        <p>{{ rawHTML }}</p>
        <p v-html="rawHTML"></p>
        <p v-bind:id="myID">Hello</p>
        <button v-bind="multiBind">Button</button>

        <div>
            <input type="text" placeholder="Add Items" v-model="newItem" @keyup.enter="submit"> <button @click="submit">submit</button>
            <ul>
                <li v-for="allItem in allItems" @key="allItem.id">{{allItem.lable}}</li>
            </ul>
        </div>
        <div>
            <input type="text" placeholder="Add Items" v-model="myNewItem" @keyup.enter="mysubmit"> <button @click="mysubmit">submit</button>
            <ul>
                <li v-for="item in isSubmited" @key="item.id">{{item.lable}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import { nextTick } from 'vue';
export default {
    data() {
        return {
            counted: 0,
            rawHTML: '<span style="color:red">This should be red</span>',
            myID: "myID",
            multiBind: {
                id: 'btn',
                class: 'myBtn'
            },
            newItem: '',
            allItems: [
                {'id': 1, 'lable': 'hello'}
            ],
            myNewItem: '',
            items: [],

        }
    },
    computed: {
        isSubmited() {
            return this.items.reverse();
        }
    },
    methods: {
        submit() {
            if (this.newItem == '') {
                return;
            } 
            this.allItems.push({id: this.allItems.length + 1, lable: this.newItem});
            this.newItem = '';
        },
        async count() {
            console.log(this.counted);
            this.counted++;
            await nextTick();
            console.log(this.counted)
        },
        mysubmit() {
           
            this.items.push({id: this.items.length + 1, lable: this.myNewItem});
            this.myNewItem = '';
        }
    }
}
</script>
<style>
    #myID {
        background-color: black;
        color: white;
    }
    #btn {
        padding: 8px;
    }
    .myBtn {
        background-color: darkcyan;
        color: aliceblue;
        font-weight: bold;
        margin-bottom: 30px;
    }
</style>