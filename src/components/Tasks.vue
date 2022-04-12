<template>
    <div class="task-item" :key="task.id" v-for="task in tasks" >
        <Task @delete-task="$emit('delete-task', task.id)" :task="task" />
    </div>
</template>

<script>
    import Task from "./Task.vue"
    export default{
        name: "Tasks",
        inheritAttrs: false,
        props: {
            tasks: Array
        },
        components: {
            Task
        }
    }
</script>

<style scoped>
    .tasks{
        padding: 20px;
    }
</style>