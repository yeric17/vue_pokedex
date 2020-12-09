<template>
  <PokemonDetail/>
  <Filters/>
  <PokemonList/>
</template>

<script>
import "./assets/font/fontasesome/css/fontawesome.css" 
import "./assets/font/fontasesome/css/brands.css" 
import "./assets/font/fontasesome/css/solid.css" 
import PokemonList from './components/PokemonList.vue'
import PokemonDetail from './components/PokemonDetail.vue'
import Filters from './components/Filters.vue'
export default {
  name: 'App',
  components: {
    Filters,
    PokemonDetail,
    PokemonList
  }
}
</script>

