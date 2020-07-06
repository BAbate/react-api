import React from 'react';
import { Image } from 'react-bootstrap'
import { Search } from '../components/Search'
const Pokemon: React.FC = () =>{
const [pokemonName, setPokemonName] = React.useState<String>();
const [pokemonImg, setPokemonImg] = React.useState<string>();
    React.useEffect(() => {
        const fetchData = async() =>{
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
            if (!res.ok) {
                alert('ERROR');
            }
            const data = await res.json();
            setPokemonName(data.name);
            console.log(data.sprites.front_default);
            setPokemonImg(data.sprites.front_default.toString());
        };
        fetchData(); 
    }, []);
    return(
        <>
            <h1>Pokemon</h1>
            <Search />
            <p>Name: {pokemonName} </p>
            <Image src={pokemonImg} />
        </>
    );
};
export default Pokemon;