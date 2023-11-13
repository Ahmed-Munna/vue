<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ discription }}</p>
        <p>{{ myProperty }}</p>
        {{ count }}
        <button @click="$emit('counting', 2)">Count</button>
        <button @click="submit">another</button>
        <CardParticale></CardParticale>
        <button @click="load">Async component</button>
        <AlartView v-if="showOrNot"></AlartView>
    </div>
</template>
<script>
import CardParticale from './CardParticale.vue';
import { defineAsyncComponent } from 'vue';
const  AlartView = defineAsyncComponent({
    loader: () => import('./AlartView.vue'),
    delay: 1000,
    timeout: 500,
});

export default {
    data() {
        return {
            myProperty: 'What',
            anotherCount: 0,
            showOrNot: false,
        }
    },
    // emits: ['counting'],
    props: {
        title: String,
        discription: String,
        count: Number,
    },
    created() {
        console.log(this.myProperty);
    },
    methods: {
        submit() {
            this.$emit('counting', 10);
        },
        load() {
            this.showOrNot = !this.showOrNot;
        }
    },
    components: {
        CardParticale,
        AlartView
    }
}
</script>
<style lang="">
    
</style>