<template>
  <div class="app">
    <div class="task-container">
      <Header title="Task tracker"  />
      <div class="tasks-list" >
        <div v-if="loading === true">Loading...</div>
        <Tasks :tasks="tasks" />
      </div>
    </div>
  </div>
</template>


<script>
  import { mapActions, mapGetters } from "vuex"
  import Header from "./components/Header"
  import Tasks from "./components/Tasks"

  export default{
    name: "App",
    inheritAttrs: false,
    components: {
      Header,
      Tasks
    },
    computed: {
      ...mapGetters(['tasks']),
      ...mapGetters(['loading'])
    },
    methods: {
      ...mapActions(['fetchTasks'])
    },

    created(){
      this.fetchTasks()
    },
    
  }
</script>


<style>
*,
*::before,
*::after{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
}

.task-container{
  border: 1px solid rgba(0,0,0,0.1);
  width: 600px;
  border-radius: 4px;
}

.tasks-list{
  padding: 10px 20px;
}

</style>