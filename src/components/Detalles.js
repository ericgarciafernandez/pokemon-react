const Detalles = ({ details }) => {
    const types = details.types;
    console.log(types);
    return (
        <div>
            <img src={details.sprites.front_default} />
            {types.map((element, index) => (
                <li key={index}>
                    <ul>{element.type.name}</ul>
                </li>
            ))};
        </div>
    )
}

export default Detalles
