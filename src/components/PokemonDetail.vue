<template>
    <section class="pokemon-detail">
        <div class="pokemon-identity">
            <span class="identity-number">
                {{pokemonDetails.formattedNumber}}
            </span>
            <span class="identity-name">
                {{pokemonDetails.name}}
            </span>
        </div>
        
        <BaseInfo 
        :src="pokemonDetails.img" 
        :alt="pokemonDetails.name"
        :types="pokemonDetails.types"
        :stats="pokemonDetails.stats"
        :height="pokemonDetails.height"
        :weight="pokemonDetails.weight"
        />
        
    </section>
</template>

<script>
import usePokemons from '../resources/usePokemons.js'
  // import Swiper core and required components
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper.scss';
  import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/pagination/pagination.scss';
  import 'swiper/components/scrollbar/scrollbar.scss';

  import BaseInfo from './BaseInfo.vue'
export default {
    name: 'PokemonDetail',
    components: {
      Swiper,
      SwiperSlide,
      BaseInfo,
    },
    setup(){
        const {getPokemonDetail, pokemonDetails} = usePokemons()
        getPokemonDetail(1)
        return {
            pokemonDetails
        } 
    }
}
</script>

<style>
    .pokemon-detail{
        padding-top: .5rem;
        max-width: 960px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        z-index: 1000;
        top: 0;
        background-color: white;
    }
        .pokemon-identity{
            display: flex;
            margin-bottom: 1rem;
            align-items: center;
            padding-inline: 1rem;
        }
            .identity-number {
                font-size: 3rem;
                font-weight: 900;
                color: lightblue;
                margin-right: 1rem;
            }
                .identity-number::before {
                    content: "#"
                }
            .identity-name {
                flex-grow: 1;
                text-align: center;
                padding: .5rem;
                font-size: 1.3rem;
                background-color: lightblue;
                border-radius: 6px;
                text-transform:capitalize;
            }
</style>