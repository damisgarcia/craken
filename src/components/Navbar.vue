<template>
    <b-navbar id='header' toggleable="md" variant="light">
        <div class="container">            
            <b-navbar-brand href="#">
                <img :src="logo" width="96px">
            </b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <!-- <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Minha Conta" right>
                        <b-dropdown-item href="#">Meus Pedidos</b-dropdown-item>
                        <b-dropdown-item href="#">Meus Endereços</b-dropdown-item>
                        <b-dropdown-item href="#">Editar Conta</b-dropdown-item>
                        <b-dropdown-item href="#">Fazer Logout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse> -->
        </div>
    </b-navbar>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
    name: 'Navbar',
    data: () => {
        return {
            title: 'Lorems Ipsuns',
            logo
        }
    }
}
</script>