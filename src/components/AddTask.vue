<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label for="text">Task</label>
      <input v-model="text" type="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label for="day">Day & Time</label>
      <input v-model="day" type="text" name="day" placeholder="Add Day & Time" />
    </div>
    <div class="form-control-check">
      <label for="reminder">Reminder</label>
      <input v-model="reminder" type="checkbox" name="reminder" />
    </div>
    <input type="submit" value="Save task" class="btn btn-black" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
        text: '',
        day: '',
        reminder: false
    }
  },
  methods: {
    onSubmit(e) {
        e.preventDefault()

        if(!this.text) {
            alert('Please add a Task!')
            return
        }

        const newTask = {
            text: this.text,
            day: this.day,
            reminder: this.reminder
        }

        this.text = ''
        this.day = ''
        this.reminder = false

        this.$emit('add-task',newTask)
    },
  }
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
