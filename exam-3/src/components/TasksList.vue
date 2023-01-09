<template>
    <div class="tasks-list">
        <task-card
        class="task-card"
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        />
    </div>
</template>

<script>
import TaskCard from './TaskCard'

export default {
    props: {
        tasks: {
            type: Array,
            default: () => []
        }
    },
    components: { TaskCard }
}
</script>