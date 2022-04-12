<template>
    <div class="header">
        <h1 class="h1">{{title}}</h1>
        <Button title="Add task" />
    </div>
</template>

<script>
    import Button from "./Button"

    export default{
        name: "Header",
        props: ["title"],
        components:{
            Button,
        }
    }
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px 20px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    .h1{
        font-size: 20px;
        
    }
</style>