const Form = ({ changes, submit, pokemon }) => {
    return (
        <form onSubmit={submit}>
            <div>
                <label>Nombre</label>
                <input type="text" name="name" value={pokemon.name} onChange={changes} />
            </div>
            <div>
                <label>URL</label>
                <input type="text" name="url" value={pokemon.url} onChange={changes} />
            </div>
            <button type="submit">Añadir Pokemon</button>
        </form>
    )
}

export default Form