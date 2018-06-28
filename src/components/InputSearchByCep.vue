<template>
    <div class='cp-input-search-by-cep'>
        <div class="input-cep-container">
            <form @submit="onSubmit()">
                <input placeholder="Digite o CEP" autofocus v-model="cep" :disabled="isLoading" />
            </form>
        </div>

        <b-modal v-model="isModalVisible" hide-footer hide-header centered >
            <div class="d-block">
                <div>
                    <b-form-input v-model="cacheAddress.name" type="text" placeholder="Informe sua rua"></b-form-input>
                </div>
                <div>
                    <b-form-input v-model="cacheAddress.neighborhood" type="text" placeholder="Informe seu bairro"></b-form-input>
                </div>
            </div>
            <b-btn class="mt-3" variant="outline-danger" block @click="hideCepModal()">Close Me</b-btn>
        </b-modal>

    </div>
</template>
<script>
export default {
    name: 'InputSearchByCep',
    data () {
        return {
            cep: null
        }
    },
    methods: {
        onSubmit () {
            return this.$store.dispatch('address/getCEP', this.cep)
        },
        hideCepModal () {
            return this.$store.dispatch('address/showHideModal', false)
        }
    },
    computed: {
        cacheAddress () {
            return this.$store.getters['address/cache']
        },
        isLoading () {
            return this.$store.getters['address/isLoading']
        },
        isModalVisible () {
            return this.$store.getters['address/isModalVisible']
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
