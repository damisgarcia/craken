<template>
  <div class="cep-view">
      <header v-bind:style="{ 'background-image': 'url('+bg+')'}">
        <div class="container">
            <h1>Peça sua bebida, fácil</h1>
            <InputSearchByCep />
            <h3>Não sabe o seu CEP? Digite o seu endereço.</h3>
        </div>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h3>1. Escolha sua bebida</h3>
                        <p>Escolha quais dos nossos produtos voce deseja receber em casa.</p>
                    </div>
                    <div class="col">
                        <h3>2. Faça seu pedido</h3>
                        <p> É simples. O pagamento é feito no ato da entrega.</p>
                    </div>
                    <div class="col">
                        <h3>3. Receba sua bebida</h3>
                        <p>Entregamos o seu pedido na sua porta.</p>
                    </div>
                </div>
            </div>
        </section>
      </header>
  </div>
</template>

<script>
import bg from '@/assets/header-bg.png'
import InputSearchByCep from '@/components/InputSearchByCep'

export default {
    name: 'CepView',
    components: { InputSearchByCep },
    data: () => {
        return {
            bg
        }
    }
}
</script>
