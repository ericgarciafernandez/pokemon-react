const Listado = (props) => {
    const { pokedex } = props;
    return (
        <ul>
            {pokedex.map((pokemon, index) => (
                <li key={pokemon.id}>{pokemon.id} - {pokemon.name} - {pokemon.url}</li>
            ))}
        </ul>
    )
}

export default Listado