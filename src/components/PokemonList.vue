<template>
    <section class="pokemon-list" >
        <div class="pokemon-gallery" v-if="loading === false">
            <PokemonLowDetail  v-for="pokemon in filteredPokemons" 
            :key="pokemon.number"  
            :number="pokemon.formattedNumber" 
            :image="pokemon.img" 
            @click="getPokemonDetail(pokemon.number)"/>
        </div>
        <span v-else class="pokemon-gallery">
            loading...
        </span>
    </section>
</template>

<script>
    import usePokemons from '../resources/usePokemons.js'
    import PokemonLowDetail from './PokemonLowDetail.vue'
    import axios from 'axios'
    export default {
        name: "PokemonList",
        components: {
            PokemonLowDetail
        },
        setup(){
            const {getPokemons, pokemons, getPokemonDetail, filteredPokemons, filterPokemons, loading} = usePokemons()
            
            getPokemons(893)
            return {
                getPokemonDetail,
                filteredPokemons,
                pokemons,
                loading
            }
        }
    }
</script>

<style>
    .pokemon-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
        gap: 1px .5rem;
        max-width: 95%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        padding-top: .5rem;
        background-color: rgb(248, 248, 248);
        border-radius: 2px;

    }
</style>