import ViaCep from '@/services/ViaCep'

export const state = {
    newAddress: {},
    data: {
        street: null,
        number: null,
        neighborhood: null
    },
    loading: false,
    isModalVisible: false
}

export const mutations = {
    'UPDATE_NEW_ADDRESS': (state, payload) => {
        state.newAddress = payload
    },
    'UPDATE_ADDRESS': (state, payload) => {
        state.data = payload
    },
    'SET_LOADING': (state, loading) => {
        state.loading = loading
    },
    'SET_MODAL_VISIBILITY': (state, visibility) => {
        state.isModalVisible = visibility
    }
}

export const actions = {
    getCEP: async ({commit}, cep) => {
        try {
            commit('SET_LOADING', true)
            // get data in viacep.com.br
            let { data } = await ViaCep.get(`${cep}/json`)
            // remove loader
            commit('SET_LOADING', false)
            // show modal
            commit('SET_MODAL_VISIBILITY', true)
            // commit temp data
            commit('UPDATE_NEW_ADDRESS', mapCep(data))
        } catch (e) {
            console.warn(e)
        }
    },
    setAddress: ({commit}, address) => {
        commit('UPDATE_NEW_ADDRESS', {}) // clean cache
        commit('UPDATE_ADDRESS', address)
    },
    showHideModal: ({commit}, visibility) =>{
        commit('SET_MODAL_VISIBILITY', visibility)
    }
}

export const getters = {
    data: state => state.data,
    cache: state => state.newAddress,
    isLoading: state => state.loading,
    isModalVisible: state => state.isModalVisible
}

const mapCep = (data) => {
    return {
        name: data.logradouro,
        neighborhood: data.bairro,
        city: data.uf
    }
}

export default { namespaced: true, state, getters, actions, mutations }
