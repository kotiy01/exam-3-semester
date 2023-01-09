<template>
    <div class="task-page">
        <h3>{{ task.title }}</h3>
        <h4>{{ task.desc }}</h4>
    </div>
</template>

<script>
import tasks from '../mocks/tasks'
export default {
    data() {
        return {
            task: null
        }
    },
    created() {
        const task = tasks.find(task => task.id == this.$route.params.id)
        if (task) {
            this.task = task
        }
    }
}
</script>