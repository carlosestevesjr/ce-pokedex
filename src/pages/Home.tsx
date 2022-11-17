import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPokemons } from '../Interfaces/Pokemons';
import { Link } from "react-router-dom";
import PokemonList from '../components/PokemonList';
import { Header } from '../components/Header';
import { useAplication } from "../provider/aplication";
import { HomeWrapper } from '../styles/globals';
import Loader from '../components/Utilities/Loader';
import SEO from '../components/SEO';

const Home = () => {

    const _qtd__ = 10
    const _offset__ = 0
    const _tot__ = 905

    const [pokemons, setPokemons] = useState<IPokemons[]>([]);
    const [pagina, setPagina] = useState<number>(1);
    const [offset, setOffset] = useState<number>(_offset__);

    const { aplication, setAplication } = useAplication();
   
    function getPokemonList(type_pagination:string | null ) {
    
        let offset_pagina = 0
        aplication.loader = true
        setAplication(aplication) 
        setPokemons([]);
        if(type_pagination === "avanc"){
            offset_pagina = offset + _qtd__
            setOffset(() =>  offset_pagina)
            setPagina((prevState) => prevState + 1)
        }else if(type_pagination === "prev"){
            offset_pagina = offset - _qtd__
            setOffset(() => offset_pagina)
            setPagina((prevState) => prevState - 1)
        }
       
        // 👇️ const data: GetPokemonListsResponse
        axios(
            `https://pokeapi.co/api/v2/pokemon?limit=${_qtd__}&offset=${offset_pagina}`,
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
            
            if(status === 200){

                aplication.loader = false
                setAplication(aplication) 
               
                console.log('Dados',data.results)
                
                setPokemons(data.results);
               
            }
        }).catch(function (error) {
            // handle error
            aplication.loader = false
            
            console.log('error message: ', error.message);
        }).finally(function () {
            // always executed
            aplication.loader = false
           
            // console.log('nada')
            
        });
            
    }

    function getAvancPagina() {
        getPokemonList('avanc')
        return false
    }

    function getPrevPagina() {
        getPokemonList('prev')
        return false
    }

    useEffect(() => {   
     
        getPokemonList(null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   
    return (
        <HomeWrapper>
            <Header/>
            <SEO
                title='Pokedex - Home'
                description='Projeto de CARLOS ESTEVES React'
                name='Carlos Esteves.'
                type='article' 
            />
           {(aplication.loader) && <Loader/>}
            <div id="poke_container" className="poke-container">
                
                {
                    pokemons.map((data, i) => (
                        <PokemonList
                        key={i}
                        {...data}
                        />
                    ))
                }  
            </div>
            <nav>
                <ul className="pagination">
                    {
                        (pagina > 1) &&
                        <li className="pagination-item">
                            <Link to={"#"} onClick={() => getPrevPagina()}>Anterior</Link>
                        </li>
                    }
                        <li className="pagination-item">
                            <Link to={"#"}>{pagina}</Link>
                        </li> 
                    {
                        (pagina < Math.ceil(_tot__ / _qtd__)) &&
                        <li className="pagination-item">
                            <Link to={"#"} onClick={() => getAvancPagina()}>Próximo</Link>
                        </li>
                    }
                </ul>
            </nav>

        </HomeWrapper>
    );
};

export default Home;
