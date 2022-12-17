<template>
    <header>   
        <h1>{{ title }}</h1>
        <ButtonItem v-show="homePage" @btn-click="$emit('form-toggle')" :text="showForm ? 'Close': 'Add Task'" :color="showForm ? 'red': 'green'"/>
    </header>
</template>

<script>
import ButtonItem from './ButtonItem.vue';
export default {
    name: 'HeaderItem',
    props: {
        title: String,
        showForm: Boolean
    },
    components: {
        ButtonItem
    },
    computed: {
        homePage() {
            if(this.$route.path == '/') {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>