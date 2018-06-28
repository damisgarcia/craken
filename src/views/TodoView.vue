<template>
    <div class="container">
        <h3>Todo</h3>
        <ul>
            <li v-for='(todo, index) in todos' v-bind:key="index">
                <label>
                    {{todo.text}}
                    <input type="checkbox" v-model="todo.checked" @change="done(todo)" />
                </label>
            </li>
        </ul>
        <h3>Done</h3>
        <ul>
            <li v-for='(todo, index) in dones' v-bind:key="index">
                <label>
                    {{todo.text}}
                    <input type="checkbox" v-model="todo.checked" @change="done(todo)" />
                </label>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'TodoView',
    methods: {
        done: (todo) => {
            this.$store.dispatch('doneTodo', todo)
        }
    },
    computed: {
        todos: () => this.$store.getters.todos,
        dones: () => this.$store.getters.dones
    }
}

</script>
