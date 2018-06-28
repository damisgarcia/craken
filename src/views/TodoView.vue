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
                    <input type="checkbox" v-model="todo.checked" />
                </label>
            </li>
        </ul>
        <form @submit="addTodo()">
            <input v-model="newTodo.text" />
            <button>Criar Tarefa</button>
        </form>
    </div>
</template>
<script>
import { clone } from 'lodash'
export default {
    name: 'TodoView',
    data () {
        return {
            newTodo: {
                text: '',
                checked: false
            }
        }
    },
    methods: {
        addTodo () {
            this.$store.dispatch('todos/addTodo', clone(this.newTodo))
            this.newTodo.text = '' // clean text
        }
    },
    computed: {
        todos () {
            return this.$store.getters['todos/todos']
        },
        dones () {
            return this.$store.getters['todos/dones']
        }
    }
}

</script>
