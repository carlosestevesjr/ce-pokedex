import axios from 'axios';
import React, { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import { IPokemons } from '../Interfaces/Pokemons';
import Loader from './Utilities/Loader';

const colors:any = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};


const colorsBG:any = {
    grass:  '#8bbe8a',
    fire:  '#ffa756',
    water:  '#58abf6',
    bug:  '#8bd674',
    normal:  '#b5b9c4',
    poison: '#9f6e97',
    electric:  '#f2cb55',
    ground:  '#f78551',
    fairy:  '#eba8c3',
    flying:  '#748fc9',
    fighting:  '#eb4971',
    rock:  '#6f6e78',
    ice:  '#91d8df',
    psychic:  '#ff6568',
    dragon:  '#7383b9',
    ghost:  '#8571be',
    steel:  '#4c91b2',
    default:  '#fafafa',
};



// const GetEvolucoes: React.JSXElementConstructor<any> =  ({ evolution }) => {
//     return ""
//     console.log(evolution)
//     // {JSON.stringify(pokemonEvolutions?.evolves_to[0].evolves_to[0].species)}
//     // const nestedComments = (evolution || []).map((evolution:any, i:any) => {
//     //   return <GetEvolucoes key={i} evolution={evolution}  />
//     // })
  
//     // return (
//     //     nestedComments
//     // )
// }


const GetEvolucoes: React.FC<any> = ({_p}) => {
   
    const nestedEvolutions = _p.evolves_to.map((t: any, i: number) => {
        return <GetEvolucoes key={i} _p={t} ><div>{t.name}</div></GetEvolucoes>
    })

    return (
        <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
            <div>{_p.species.name}</div>
            {nestedEvolutions}
        </div>
    )
  
}

const PokemonList: React.FC<IPokemons> = (data) => {
    
    const [pokemon, setPokemon] = useState<any>();
    // const [pokemonEvolutions, setPokemonEvolutions] = useState<any>();
    const [pokemonSpecies, setPokemonSpecies] = useState<any>();
   
    // const getPokemonEvolutions = async (url: string) => {
    //     try {
    //         const { data, status } = await axios(
    //             `${url}`,
    //             {
    //                 headers: {
    //                     "Access-Control-Allow-Origin": "*",
    //                     // "Access-Control-Allow-Headers": "Authorization", 
    //                     // "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    //                     "Content-Type": "application/json;charset=UTF-8"
    //                 },
    //             },
    //         );
           
    //         setPokemonEvolutions(data.chain)

    //     } catch (error) {
    //         if (axios.isAxiosError(error)) {
    //             console.log('error message: ', error.message);
    //         } else {
    //             console.log('unexpected error: ', error);
    //         }

    //     }
    // };

    const getPokemonSpecies = async (id: number) => {
        try {
            // 👇️ const data: GetPokemonListsResponse
            const { data, status } = await axios(
                `https://pokeapi.co/api/v2/pokemon-species/${id}`,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        // "Access-Control-Allow-Headers": "Authorization", 
                        // "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                },
            );
            
            setPokemonSpecies(data)
            // getPokemonEvolutions(data.evolution_chain.url)

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }

        }
    };

    const getPokemon = async (id: any) => {

        // 👇️ const data: GetPokemonListsResponse
        axios(
            `https://pokeapi.co/api/v2/pokemon/${id}`,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Access-Control-Allow-Headers": "Authorization", 
                    // "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
                    "Content-Type": "application/json;charset=UTF-8"
                },
            },
        ).then(function (response) {
            const { data, status } = response 
            setPokemon(data)
           
        }).catch(function (error) {
            // handle error
            console.log('error message: ', error.message);
        }).finally(function () {
            // always executed
            // console.log('nada')
        });
        
    };

    function getId(seuRetorno: string) {
        const myArray = seuRetorno.split("/");
        const id = (myArray[6]) ? parseInt(myArray[6]) : 1
        return id
    }

    function getTypes(types: any) {
        return types.map((t: any, i: number) => {
            return <span className='type' key={i} style={{ 'background': getColorBG(pokemon?.types[i].type.name) }} >{t.type.name}</span>
        })
    }

    function getColor(myColor: any) {
        return colors[myColor]
    }

    function getColorBG(myColor: any) {
        return colorsBG[myColor]
    }

    function getIdPokemonImage(_id: number) {

        // const myArray: string[] = seuRetorno.split("/");
        const id = _id

        let number: number = 0
        let number_pokemon: any = 0

        if (id == null) {
            // alert("Nulo");
        }
        else if (id > 0 && id < 10) {
            //alert(i);
            number = id;
            number_pokemon = "00" + number;

        } else if (id < 100 && id >= 10) {
            number = id;
            number_pokemon = "0" + number;

        } else if (id >= 100) {
            number_pokemon = id
        }

        return number_pokemon
    }

    useEffect(() => {
        getPokemon(data.name)
        getPokemonSpecies(getId(data.url))
    }, [])

  
    
    return (

        <div className='pokemon' style={{ 'background': getColor(pokemon?.types[0].type.name) }}>
            <div >
                <div className="img-container">
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getIdPokemonImage(pokemon?.id)}.png`} alt="{name}" />
                </div>
                <div className="info">
                   
                    {/* <div>
                        {
                            pokemonEvolutions?.evolves_to?.map((_evolution:any, i:number) => {
                                return (
                                    <GetEvolucoes key={i} _p={_evolution} />
                                )
                            })
                        }
                    </div> */}
                   
                    <span className="number"># {pokemon?.id}</span>
                    <h3 className="name">{data.name.toUpperCase()} </h3>
                    <div >{(pokemon?.types) && getTypes(pokemon?.types)} </div>
                    {
                        pokemonSpecies?.evolves_from_species?.name &&
                        <div className='evo-from'>
                            <small>Evolução de: </small>
                            <b style={{ 'color': getColorBG(pokemon?.types[0].type.name) }}>
                                {pokemonSpecies?.evolves_from_species?.name.toUpperCase()}
                            </b> 
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default PokemonList