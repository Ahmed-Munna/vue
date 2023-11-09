<template>
    <div>
        <input type="text"
               v-model="question"><br>
        <p>Answer: {{ answer }}</p>
        <img :src="image" alt="" srcset="">
    </div>
</template>
<script>
export default {
    data() {
        return {
            question: 'Whats up?',
            answer: 'No',
            image: 'No',
        }
    },
    watch: {
        question(newValue, oldValue) {
            this.getAnswer();
        },
        image: {
            handler(oldValue) {
                console.log(oldValue);
            },
            immediate: true
        }
    },
    methods: {
        async getAnswer() {
            this.answer = 'Thinking...';
            try {
                const res = await fetch('https://yesno.wtf/api');
                const actualResult = await res.json();
                this.image = actualResult.image;
                this.answer = actualResult.answer;
            } catch (err) {

            }
        }
    }
}
</script>
<style lang="">
    
</style>