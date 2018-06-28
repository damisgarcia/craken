export const state = {
    todos: [
        { text: 'Get haircut', checked: false },
        { text: 'Buy beer', checked: true },
        { text: 'Watch Brazil game', checked: false }
    ]
}

export const mutations = {
    ADD_TODO: (state, newTodo) => {
        state.todos.push(newTodo)
    }
}

export const actions = {
    addTodo: ({commit}, newTodo) => {
        commit('ADD_TODO', newTodo)
    }
}

export const getters = {
    todos: state => state.todos.filter((t) => !t.checked),
    dones: state => state.todos.filter((t) => t.checked)
}

export default { namespaced: true, state, getters, actions, mutations }
