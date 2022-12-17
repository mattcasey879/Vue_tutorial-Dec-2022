<template>
      <div v-if="showForm">
      <AddTask @add-task="addTask" />
    </div>
    <TasksItem @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks='tasks' />
</template>

<script>
import TasksItem from '../components/TasksItem.vue'
import AddTask from '../components/AddTask.vue'

export default {
    name: 'HomeItem',
    props: {
        showForm: Boolean
    },
    components: {
        TasksItem,
        AddTask
    },
    data() {
        return {
            tasks: []
        }
    },
    methods: {
    async addTask(task) {
      console.log(JSON.stringify(task))
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const data = await res.json()
    this.tasks.push(data)
    },
    async deleteTask(id) {
      const res = await fetch(`api/tasks/${id}`, {
        method: 'DELETE'
      })

      if (res.status === 200) {
        this.tasks = this.tasks.filter(task => task.id != id)
      }
      else {
        alert('Error deleting task')
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      // eslint-disable-next-line no-unused-vars
      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(updatedTask)
      })

      const data = await res.json()
      this.tasks[id - 1].reminder = data.reminder
    },
    async fetchTasks() {
      const res = await fetch('api/tasks')
      return res.json()
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)
      return res.json()
    }
  },
  async created() {
    this.tasks = await this.fetchTasks()
  }
}
</script>