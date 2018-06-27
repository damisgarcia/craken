export const state = {
    todos: [
        { text: 'Get haircut', checked: false },
        { text: 'Buy beer', checked: true },
        { text: 'Watch Brazil game', checked: false }
    ]
}

export const mutations = {
    DONE_TODO: (state, todo) => {
        todo.checked = todo.checked
    }
}

export const actions = {
    doneTodo: ({commit}, todo) => {
        commit('DONE_TODO', todo)
    }
}

export const getters = {
    todos: state => state.todos.filter((t) => !t.checked),
    dones: state => state.todos.filter((t) => t.checked)
}
