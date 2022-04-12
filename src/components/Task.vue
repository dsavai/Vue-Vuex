<template>
    <div :class="[task.reminder ? 'remainder' : '', 'task']">
        <h2 class="title">{{ task.text }}</h2>
        <div class="time">{{ task.day }}</div>
        <i @click="onDelete(task.id)" class="fa fa-times" aria-hidden="true"></i>
    </div>
</template>

<script>

    export default{
        name: "Task",
        props: {
            task: Object
        },
        methods: {
            onDelete(id){
                this.$emit("delete-task", id)
            }
        }
    }
</script>

<style scoped>
    .task{
        position: relative;
        background: rgba(0,0,0,0.06);
        border-radius: 4px;
        padding: 15px 20px;
        margin-bottom: 10px;
    }
    .title{
        font-size: 18px;
    }
    .time{
        font-size: 14px;
        margin-top: 3px;
    }
    .remainder{
        border-left: 4px solid green;
    }
    .fa{
        position: absolute;
        right: 25px;
        top: 25px;
        font-size: 20px;
        color: red;
        cursor: pointer;
    }
</style>