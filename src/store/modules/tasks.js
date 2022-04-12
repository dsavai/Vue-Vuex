import axios from "axios"

const state = {
    tasks: [],
    isLoading: true
}
const mutations = {
    SET_LOADING_STATUS(state, status) {
        state.isLoading = status
    },
    SET_TASKS(state, tasks) {
        state.tasks = tasks
    }
}
const actions = {
    async fetchTasks(context) {
        try {
            context.commit('SET_LOADING_STATUS', true)
            const response = await axios.get("http://localhost:5000/tasks")
            context.commit('SET_LOADING_STATUS', 'false')
            return context.commit('SET_TASKS', response.data)

        } catch (err) {
            console.log(err)
        }
    }
}
const getters = {
    tasks(state) {
        return state.tasks
    },
    loading(state) {
        return state.isLoading
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}