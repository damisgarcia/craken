<template>
  <div class="cep-view" v-bind:style="{ 'background-image': 'url('+bg+')'}">
  </div>
</template>

<script>
import bg from '@/assets/bg-2.jpg'
export default {
    name: 'CepView',
    data: () => {
        return {
            bg
        }
    }
}
</script>