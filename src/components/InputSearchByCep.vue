<template>
    <div class='cp-input-search-by-cep'>
        <div class="input-cep-container">
            <form @submit="onSubmit()">
                <input placeholder="Digite o CEP" autofocus v-model="cep" :disabled="loading" />
            </form>
        </div>

        <b-modal v-model="modalCepShow" hide-footer hide-header centered >
            <div class="d-block">
                <div>
                    <b-form-input v-model="newAddress.name" type="text" placeholder="Informe sua rua"></b-form-input>
                </div>
                <div>
                    <b-form-input v-model="newAddress.neighborhood" type="text" placeholder="Informe seu bairro"></b-form-input>
                </div>
            </div>
            <b-btn class="mt-3" variant="outline-danger" block @click="hideCep()">Close Me</b-btn>
        </b-modal>

    </div>
</template>
<script>
import ViaCep from '@/services/ViaCep'

const mapCep = (data) => {
    return {
        name: data.logradouro,
        neighborhood: data.bairro,
        city: data.uf
    }
}

export default {
    name: 'InputSearchByCep',
    data: () => {
        return {
            cep: null,
            loading: false,
            modalCepShow: false,
            newAddress: {}
        }
    },
    methods: {
        onSubmit: async () => {
            this.showLoading()
            let { data } = await ViaCep.get(`${this.cep}/json`)
            this.newAddress = mapCep(data)
            await this.showCep()
            this.hideLoading()
        },
        showCep: () => {
            this.modalCepShow = true
        },
        hideCep: () => {
            this.modalCepShow = false
        },
        showLoading: () => {
            this.loading = true
        },
        hideLoading: () => {
            this.loading = false
        }
    }
}
</script>

<style lang="scss">
    .cp-input-search-by-cep{
        form{
            display: block;
            width: 100%;
        }
    }
</style>
