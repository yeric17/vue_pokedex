<template>
    <div class="pokemon">

        <div class="pokemon-image">
            <img :src="image" loading='lazy'/>
        </div>
        <div class="pokemon-number">
            {{number}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "PokemonLowDetail",
        props: {
            name: String,
            image: String,
            number: String
        },
    }
</script>

<style>
    .pokemon {
        position: relative;
        cursor: pointer;
        user-select: none;
        width: 40px;
        border-radius: 5px;
    }
    .pokemon-image{
        width: 100%;
        height: 100%;
        background-color: #d4d4d4;
        border-radius: 5px;
        object-fit: cover;
        transition: scale .3s;
    }
    .pokemon:hover .pokemon-image {
        scale: 1.2;
    }
    .pokemon-number{
        font-size: .7rem;
        text-align: center;
        font-weight: 500;
        color: rgb(158, 158, 158);
    }

    .pokemon-image img {
        width: 100%;
    }
</style>