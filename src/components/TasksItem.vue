<template>
    <div v-for="task in tasks" :key="task.id">
        <TaskItem @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
    export default {
        name: 'TasksItem',
        props: {
            tasks: Array
        },
        components: {
            TaskItem,
        },
        emits: ['delete-task', 'toggle-reminder']
    }
</script>