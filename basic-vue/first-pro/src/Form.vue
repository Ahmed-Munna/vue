<template>
    <div>
        <div> 
            Basic info 
            {{ information }} 
        </div>
        <form action="">
            <textarea name="" v-model="information" id="" cols="30" rows="10"></textarea><br>
            <input type="checkbox" name="checkbox" id="checkbox" v-model="checkbox">
            <label for="checkbox">{{ checkbox }}</label>
            <h3>{{ fruits }}</h3>
            <input type="checkbox" name="" id="apple" value="আপেল" v-model="fruits">
            <label for="apple">আপেল🍎</label>

            <input type="checkbox" name="" id="mango" value="আম" v-model="fruits">
            <label for="mango">আম🥭</label>
            
            <input type="checkbox" name="" id="banana" value="কলা" v-model="fruits">
            <label for="banana">কলা🍌</label>
            <br>
            <input type="checkbox" name="" id="kola" true-value="কলা খাবো" false-value="খাবো না" v-model="checkbox">
            <label for="kola">কলা🍌</label>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            information: '',
            checkbox: false,
            fruits: [],
        }
    },
    created() {
        console.log("hello")
    }
}
</script>
<style>
    
</style>