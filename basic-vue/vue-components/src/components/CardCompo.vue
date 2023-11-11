<template>
    <div class="card-body">
        <h2>{{ title }}</h2>
        <p><slot/></p>
    </div>
</template>
<script>
export default {
    props: ['title']
}
</script>
<style>
    .card-body{
        width: 300px;
        text-align: left;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        padding: 20px;
        border-radius: 8px;
    }
</style>