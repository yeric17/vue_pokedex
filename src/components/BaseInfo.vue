<template>
    <div class="base-info">
        <span class="base-info-image">
            <img :src="src" :alt="alt">
        </span>
        <span class="base-info-description">
            <span class="description-types">
                <span class="description-types-title">Type</span>
                <span class="description-type" v-for="(type, index) in types" :key="index" :class="type">
                    {{type}}
                </span>
            </span>
            <span class="description-general">
                <span class="description-general-item general-item-height">
                    <span>Height:</span><span>{{height}}</span>
                </span>
                <span class="description-general-item general-item-weight">
                    <span>Weight:</span><span>{{weight}}</span>
                </span>
            </span>
            <span class="description-stats">
                <ul class="list-stats">
                    <li class="stat" v-for="(stat, index) in stats" :key="index" :data-type="stat.stat.name" :class="stat.stat.name" :data-value="stat.base_stat">
                        {{stat.stat.name}}
                    </li>
                </ul>
            </span>
        </span>
    </div>
</template>
<style>
    ul {
        list-style: none;
    }
    .base-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
    }
        .base-info-image{
            text-align: right;
            width: 100%;
            flex-grow: 1;
        }
            .base-info-image img{
                max-width: 250px;
            }
        .description-types{
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 1rem;
        }
            .description-types-title{
                width: 100%;
                margin-bottom: 1rem;
                
            }
            .description-type{
                background-color: gray;
                color: white;
                letter-spacing: .04rem;
                padding: .8rem;
                padding-bottom: .25rem;
                padding-top: .25rem;
                border-radius: 200px;
                font-size: .8rem;
                margin-bottom: .5rem;
                text-align: center;
                min-width: 70px;
                text-transform:capitalize;
            }
            .description-type:not(:first-child){
                margin-right: .5rem;
            }
    .base-info-description{
        width: 100%;
    }
    .description-general-item{
        display: flex;
        justify-content:space-between;
        max-width: 120px;
        margin-bottom: .5rem;
    }
    .general-item-height span:nth-child(2)::after {
        content: " m";
    }
    .general-item-weight span:nth-child(2)::after {
        content: " kg";
    }
    .stat {
        padding: 1px;
        padding-left: 4px;
        position: relative;
        font-size: .8rem;
        color: transparent;
        background-color: rgb(214, 214, 214);
        border-radius: 100px;
        overflow: hidden;
        margin-bottom: .2rem;
        box-shadow: inset 1px 1px 3px 1px rgba(0,0,0,.5);
    }
        .stat::after {
            content: attr(data-type);
            position: absolute;
            left: 4px;
            top: 50%;
            transform: translateY(-50%);
            color: white;
            z-index: 200;
        }
        .stat::before {
            content: "";
            display: block;
            position: absolute;
            height: 100%;
            width: attr(data-value percentage);
            top: 0;
            left: 0;
            z-index: 100;
            background-color: rgba(107, 211, 230, .4);
        }
            .description-type.fire {
                background-color: #FE7E25;            
            }
            .description-type.grass {
                background-color: #9BCC50;            
            }
            .description-type.water {
                background-color: #4592C4;            
            }
            .description-type.poison {
                background-color: #B97FC9;            
            }
            .description-type.bug {
                background-color: #729F3F;            
            }
            .description-type.normal {
                background-color: #A4ACAF;            
            }
            .description-type.electric {
                background-color: #EED535;
                color: rgb(39, 39, 39);  
            }
            .description-type.fairy {
                background-color: #FDB9E9;
            }
            .description-type.fighting {
                background-color: #D56723;
            }
            .description-type.psychic {
                background-color: #F366B9;
            }
            .description-type.rock {
                background-color: #A38C21;
            }
            .description-type.steel {
                background-color: #9EB7B8;
            }
            .description-type.ice {
                background-color: #51C4E7;
            }
            .description-type.ghost {
                background-color: #7B62A3;
            }
            .description-type.dark {
                background-color: #707070;
            }
            .description-type.flying {
                background: linear-gradient(#BEBAB9 50%,#3DC7EF 50%);
                color: rgb(39, 39, 39);           
            }
            .description-type.ground {
                background: linear-gradient(#F7DE3F 50%,#AB9842 50%);
                color: rgb(39, 39, 39);          
            }
            .description-type.dragon {
                background: linear-gradient(#53A4CF 50%,#F16E57 50%);     
            }
</style>

<script>
export default {
    name: 'BaseInfo',
    props: {
        src: String,
        alt: String,
        types: Array,
        stats:Array,
        height: Number,
        weight: Number
    },
}
</script>

