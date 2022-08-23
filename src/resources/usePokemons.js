import {ref} from 'vue'
import axios from 'axios'
const url = 'https://pokeapi.co/api/v2/pokemon'

const pokemons = ref([])
let loading = ref(true)
let filteredPokemons = ref([])
const pokemonDetails = ref({})
const reg = /(?<=pokemon\/)[0-9]{1,4}/g
const usePokemons =  function(){
    const getPokemons = async function(limit=150){
        loading.value = true
        let response = await axios.get(url + '?limit=' + limit)
        let data = response.data.results

        pokemons.value = data.map((pokemon) => {
            let { url } = pokemon
            let number = url.match(reg)[0]
            pokemon["number"] = number
            pokemon["formattedNumber"] = getNumberFormat(number) 
            let img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon["formattedNumber"]}.png`
            pokemon["img"] = img
            return pokemon
        })
        
        filteredPokemons.value = pokemons.value
        loading.value = false
    }
    const getNumberFormat = (number) => {
        if (number.toString().length >= 3) {
           return number
        }
        return getNumberFormat('0' + number)
    }
    const getPokemonDetail = async function(number) {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}/`)
        response.data["img"] = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getNumberFormat(response.data.id)}.png`
        response.data["formattedNumber"] = getNumberFormat(number)
        response.data["height"] = response.data.height / 10
        response.data["weight"] = response.data.weight / 10
        response.data["types"] = response.data.types.map(item=>{
            return item.type.name
        })
        pokemonDetails.value = response.data
    }

    const filterPokemons = function(name){
        let reg = new RegExp(name)
        filteredPokemons.value = pokemons.value.filter(poke=>{
            return reg.test(poke.name)
        })
    }
    const sortPokemons = async function(mode) {
        const modeLower = mode.toLowerCase()
        console.log(modeLower)
        if(modeLower==="name a-z") {
            filteredPokemons.value = filteredPokemons.value.sort((a ,b)=>{
                
                if(a.name > b.name) return 1
                if(a.name < b.name) return -1
                return 0
            })
        }
        else {
            filteredPokemons.value = filteredPokemons.value.sort((a ,b)=>{
                return parseInt(a.number) - parseInt(b.number)
            }) 
        }
    }
    return {
        getPokemons,
        getPokemonDetail,
        filterPokemons,
        sortPokemons,
        pokemonDetails,
        pokemons,
        filteredPokemons,
        loading
    }
}

export default usePokemons

