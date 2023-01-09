<template>
    <div class="tasks-list">
        <tasks-list :tasks="tasks" />
    </div>
</template>

<script>
import TasksList from '../components/TasksList'
import tasks from '../mocks/tasks'

export default {
    components: { TasksList },
    data() {
        return {
            tasks
        }
    }
}
</script>

<style>

</style>