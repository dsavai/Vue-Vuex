<template>
    <button class="btn">{{title}}</button>
</template>

<script>
    export default{
        name: "Button",
        props: {
            title:{
                type: String,
                default: "Addd"
            }
        }
    }
</script>

<style scoped>
    .btn{
        display: inline-block;
        font-weight: 400;
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
</style>