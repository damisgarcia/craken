<template>
  <div id="app">
    <Navbar/>    
    <div class="content">
        <router-view/>
    </div>
  </div>
</template>

<script>
import components from '@/components'

export default {
    name: 'App',
    components
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
