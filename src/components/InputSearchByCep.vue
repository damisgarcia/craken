<template>
    <div class='cp-input-search-by-cep'>
        <form id="form" @submit="onGetCEP">
            <div class="input-cep-container" v-bind:class="{ disabled: isLoading }">
                <input v-mask="'########'" name="cep" placeholder="Digite o CEP" autofocus v-model="cep" :disabled="isLoading" />
                <b-badge v-if="errors.length" variant="warning">CEP inválido</b-badge>
            </div>
        </form>

        <b-modal title="Complete seu endereço de entrega" :visible="isModalVisible" @hidden="hideCepModal()" hide-footer centered>
            <b-container fluid>
                <b-row>
                    <b-col cols="4">
                        <b-form-group id="state" label="Estado">
                            <b-form-input v-model="cacheAddress.state" type="text" :disabled="true"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="city" label="Cidade">
                            <b-form-input v-model="cacheAddress.city" type="text" :disabled="true"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <b-form-group id="neighborhood">
                            <b-form-input v-model="cacheAddress.neighborhood" type="text" placeholder="Informe seu bairro" :disabled="cacheAddress.viacep"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="name">
                            <b-form-input v-model="cacheAddress.name" type="text" placeholder="Informe sua rua" :disabled="cacheAddress.viacep"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group id="number">
                            <b-form-input v-model="cacheAddress.number" v-mask="'######'" type="text" placeholder="Nº" :autofocus="true"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-btn class="mt-3" variant="outline" block @click="hideCepModal()">Fechar</b-btn>
                    </b-col>
                    <b-col>
                        <b-btn class="mt-3" variant="primary" block @click="hideCepModal()">Continuar</b-btn>
                    </b-col>
                </b-row>
            </b-container>
        </b-modal>
        <b-modal :visible="getFailState.hasOwnProperty('type')" @hidden="hideFailModal()" :title="getFailState.title" hide-footer centered>
            <b-container fluid>
                <b-row>
                    <b-col cols="12"><p>{{ getFailState.mesage }}</p></b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-btn class="mt-3" variant="outline" block @click="hideFailModal()">Fechar</b-btn>
                    </b-col>
                    <b-col v-if="getFailState.type === 'cep'">
                        <b-btn class="mt-3" variant="primary" block @click="hideFailModal()">Não sei o meu CEP</b-btn>
                    </b-col>
                </b-row>
            </b-container>
        </b-modal>
    </div>
</template>
<script>
import { clone } from 'lodash'

export default {
    name: 'InputSearchByCep',
    data () {
        return {
            cep: null,
            errors: []
        }
    },
    methods: {
        onGetCEP (e) {
            // prevent submit form
            e.preventDefault()
            // clear errors
            this.errors = []
            if (this.cep.length < 8) {
                this.errors.push('CEP Inválido')
            }
            if (this.errors.length) return false
            return this.$store.dispatch('address/getCEP', this.cep)
        },
        onSubmitAddress () {
            this.$store.dispatch('address/setAddress', clone(this.cacheAddress))
        },
        hideCepModal () {
            return this.$store.dispatch('address/showHideModal', false)
        },
        hideFailModal () {
            return this.$store.dispatch('address/hideFailModal')
        }
    },
    computed: {
        getFailState () {
            return this.$store.getters['address/fail']
        },
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
