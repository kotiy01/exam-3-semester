<template>
    <div class="task-card">
        <p class="task-title">{{ task.title }}</p>
        <p class="task-date">{{ task.date }}</p>
        <router-link
        :to="{ name: 'task', params: { id: task.id } }"
        >
        Подробнее
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;1,600&display=swap');

.task-card {
    width: 400px;
    height: auto;
    background-color: #66BFFF;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 20px 0 20px 0;
}

.task-title {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
}
</style>