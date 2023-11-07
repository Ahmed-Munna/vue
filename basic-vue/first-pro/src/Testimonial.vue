<template>
    <div>
        <h2> {{ count }} </h2>
        <button @click="count++">click</button>
        <p>{{ rawHTML }}</p>
        <p v-html="rawHTML"></p>
        <p v-bind:id="myID">Hello</p>
        <button v-bind="multiBind">Button</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
            rawHTML: '<span style="color:red">This should be red</span>',
            myID: "myID",
            multiBind: {
                id: 'btn',
                class: 'myBtn'
            }
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
    }
</style>