import ViaCep from '@/services/ViaCep'

export const state = {
    newAddress: {},
    data: {
        city: null,
        state: null,
        street: null,
        number: null,
        neighborhood: null
    },
    loading: false,
    isModalVisible: false,
    fail: {}
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
    },
    'SET_FAIL': (state, fail) => {
        state.fail = fail
    }
}

export const actions = {
    getCEP: async ({commit}, cep) => {
        try {
            commit('SET_LOADING', true)
            // get data in viacep.com.br
            let { data } = await ViaCep.get(`${cep}/json`)

            // if not found cep
            if (data.erro) {
                throw new Error('cep')
            }

            if (data.uf !== 'ce' && data.localidade !== 'Fortaleza') {
                throw new Error('uf')
            }

            // remove loader
            commit('SET_LOADING', false)
            // show modal
            commit('SET_MODAL_VISIBILITY', true)
            // commit temp data
            commit('UPDATE_NEW_ADDRESS', mapCep(data))
        } catch (e) {
            // remove loader
            commit('SET_LOADING', false)
            // show modal
            commit('SET_MODAL_VISIBILITY', false)

            console.log(e.message, e)

            let fail = {}

            switch (e.message) {
            case 'cep':
                fail = {
                    type: 'cep',
                    title: 'CEP não encontrado',
                    mesage: 'Não se preocupe toque no botão não sei meu CEP e faça o seu pedido.'
                }
                break
            case 'uf':
                fail = {
                    type: 'uf',
                    title: 'Localidade não coberta',
                    mesage: 'Infelizmente seu endereço está fora da nossa area de atendimento'
                }
                break
            }

            commit('SET_FAIL', fail)
        }
    },
    setAddress: ({commit}, address) => {
        commit('UPDATE_NEW_ADDRESS', {}) // clean cache
        commit('UPDATE_ADDRESS', address)
    },
    showHideModal: ({commit}, visibility) => {
        commit('SET_MODAL_VISIBILITY', visibility)
    },
    hideFailModal: ({commit}) => {
        commit('SET_FAIL', {})
    }
}

export const getters = {
    fail: state => state.fail,
    data: state => state.data,
    cache: state => state.newAddress,
    isLoading: state => state.loading,
    isModalVisible: state => state.isModalVisible
}

const mapCep = (data) => {
    return {
        name: data.logradouro,
        neighborhood: data.bairro,
        state: data.uf,
        city: data.localidade,
        viacep: true
    }
}

export default { namespaced: true, state, getters, actions, mutations }
