import React from 'react';

const Pokemon: React.FC = () =>{
const [pokemonName, setPokemonName] = React.useState<String>();

    React.useEffect(() => {
        const fetchData = async() =>{
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
            
            if (!res.ok) {
                alert('ERROR');
            }

            const data = await res.json();

            setPokemonName(data.name);
        };

        fetchData(); 
    }, []);

    return(
        <>
            <h1>Pokemon</h1>
            <p>Name: {pokemonName} </p>
        </>
    );
};

export default Pokemon;