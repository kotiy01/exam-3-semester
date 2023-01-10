<template>
    <div class="tasks-list">
        <tasks-list :tasks="tasks" />
    </div>
</template>

<script>
import TasksList from "../components/TasksList"

export default {
    data: () => ({
        tasks: []
    }),
    mounted() {
        this.fetchTodo()
    },
    methods: {
        fetchTodo() {
            this.axios.get(`https://my-json-server.typicode.com/kotiy01/json-files/tasks`)
                .then(response => this.tasks = response.data)
        }
    },
    components: {
        TasksList
    }
}
</script>

<style>

</style>
