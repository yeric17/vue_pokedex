<template>
    <section class="filters">
        <div class="filters-by">
            <span class="filters-by-label">
                Sort by
            </span>
            <div class="filters-by-button" @click="triggerMenu">
                <span>{{type}}</span>
                <ul class="filters-by-list" :class="active && 'active'">
                    <li class="filters-by-list-item" @click="selectSortType">Number</li>
                    <li class="filters-by-list-item" @click="selectSortType">Name A-Z</li>
                    <li class="filters-by-list-item" @click="selectSortType">Heviers</li>
                </ul>
            </div>
        </div>
        <div class="filters-search">
            <input type="text" class="filters-search-input" v-model.lazy="search" />
            <i class="fas fa-search filters-search-icon" @click="filter" ></i>
        </div>
    </section>
</template>

<script>
import usePokemons from '../resources/usePokemons'
export default {
    name: "Filters",
    methods: {
        triggerMenu(){
            this.active = !this.active
        },
        selectSortType(e) {
            this.type = e.target.textContent
            this.sortPokemons(this.type)
        },
        filter() {
            this.filterPokemons(this.search)
        }
    },
    data(){
        return {
            active: false,
            type: "Number",
            search: "",
        }
    },
    setup(){
        const {filterPokemons, sortPokemons} = usePokemons()
        return {
            filterPokemons,
            sortPokemons
        }
    },
    watch: {
        search: function(newVal, oldVal){
            if(newVal !== oldVal) {
                this.filter()
            }
        }
    }
}
</script>

<style>
    .filters{
        display: flex;
        align-items: center;
        justify-content: left;
        max-width: 95%;
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
    }
    .filters-by-button{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100px;
        padding-left: .5rem;
        padding-right: .5rem;
        min-height: 1.5rem;
        background-color: rgb(133, 133, 133);
        position: relative;
    }
    .filters-by-button::after{
        content: "+";
    }
    .filters-by-list{
        transition: all .3s;
        list-style: none;
        transform-origin: top left;
        padding-left: .5rem;
        padding-right: .5rem;
        transform: translateY(100%);
        position: absolute;
        height: 0;
        overflow: hidden;
        z-index: 100;
        width: 100%;
        background-color: rgb(133, 133, 133);
        bottom: 1px;
        left: 0;
        /* display: none; */
    }
    .filters-by-list-item {
        margin-top: .2rem;
    }
    .filters-by-list.active{
        /* display: block; */
        height: auto;
    }
    .filters-search {
        flex-grow: 1;
        margin-left: 1rem;
        position: relative;
        max-width: 300px;
    }
        .filters-search-icon {
            display: block;
            position: absolute;
            right: 1rem;
            top:50%;
            transform: translateY(-50%);
            height: 1rem;
            width: 1rem;
            cursor: pointer;
        }
        .filters-search-input {
            outline: none;
            border: 1px solid lightblue;
            padding-left: 1rem;
            padding-right: 2.5rem;
            padding-top: .5rem;
            padding-bottom: .5rem;
            border-radius: 100px;
            width: 100%;
        }

</style>