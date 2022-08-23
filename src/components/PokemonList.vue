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
    .pokemon-list{
        max-width: 960px;
        margin: 0 auto;
        width: 100%;
        overflow-y: scroll;
    }
    .pokemon-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
        grid-auto-rows: 40px;
        gap: 1rem .5rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        padding-top: .5rem;
        padding-inline: 1rem;
        background-color: rgb(248, 248, 248);
        border-radius: 2px;

    }
</style>