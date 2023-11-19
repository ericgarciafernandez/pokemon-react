import { useState, useEffect } from "react";
import axios from "axios";

const DEFAULT_POKEMON = {
  name: "",
  url: "",
};

const Pokemon = () => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState(DEFAULT_POKEMON);
  // Crear STATES de Loading y Error, explicado más abajo :)

  useEffect(() => {
    // Añade siempre los datos sensibles como URL, API KEYS, etc
    // como variables de entorno.
    // échale un ojo a esto: https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env
    axios.get("http://localhost:3001/api/pokemons").then((response) => {
      setPokedex(response.data);
    });

    // Acostumbrate a controlar cargar y errores cuando llamas a API
    // añadiendo las variables de entorno de antes y el control de carga y errores te quedaría algo tal que así
    //--------------------------------------------------------------------------------------
    // useEffect(() => {
    //   const fetchPokemons = async () => {
    //     setIsLoading(true);
    //     try {
    //       const response = await axios.get(
    // -----Esto tendrá sentido cuando tengas variables de entorno-----
    //         `${process.env.REACT_APP_API_URL}/api/pokemons`
    //       );
    //       setPokedex(response.data);
    //     } catch (err) {
    //       setError(err.message);
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   };

    //   fetchPokemons();
    // }, []);
    //--------------------------------------------------------------------------------------
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // En este punto yo no volvería a reasignar el valor name y URL
    // por que el objeto pokemon ya lo tiene.
    // asignaria directamente pokemon a pokedex
    // tal que así:
    // ------------------Anterior------------------
    // const addPoke = {
    //   name: pokemon.name,
    //   url: pokemon.url,
    // };
    // setPokedex(pokedex.concat(addPoke));
    // setPokemon(DEFAULT_POKEMON);
    // ------------------NUEVO--------------------

    event.preventDefault();
    if (!pokemon.name || !pokemon.url) {
      // verificas que existen esas propiedades para evitar errores
      // y sales de la funcion si no hay
      // arriba habrás creado un STATE para errores
      // tambien puedes asignar un error a esta validación, tal que así
      // setError('Bad properties defined')
      // este mensaje luego puedes mostrarlo en la UI
      return;
    }

    // Nuncaaaa concatenes valor de array en estados así, puedes perder valores y es poco seguro.
    // setPokedex(pokedex.concat(addPoke));

    // Utiliza la destructuración como esta:
    setPokedex([...pokedex, pokemon]);
    // Evitas perder valores ya añadidos en el array y concatenas nuevos de forma segura.

    setPokemon(DEFAULT_POKEMON);
  };

  // Error muy normal en principiantes:
  // estos dos handleInput se puede convertir en solo uno de forma muy fácil usando las propiedades HTML de los inputs, ejemplo:
  // ---------------ANTERIOR------------------------
  //   const handleInputName = (event) => {
  //     const valuePokemon = {
  //       ...pokemon,
  //       name: event.target.value,
  //     };
  //     console.log(valuePokemon);
  //     setPokemon(valuePokemon);
  //   };

  //   const handleInputUrl = (event) => {
  //     const valuePokemon = {
  //       ...pokemon,
  //       url: event.target.value,
  //     };
  //     console.log(valuePokemon);
  //     setPokemon(valuePokemon);
  //   };
  // ---------------NUEVO------------------------
  // Sólo habrá un handleInput para los dos inputs, reduces mucho el código
  const handleInputChange = (event) => {
    // Este name y value con las propiedades del HTML de los inputs
    const { name, value } = event.target;
    // Cuando tienes un evento como el onChange, que está cambiando constantemente el valor de un STATE
    // Es muy importante que destructures el objeto del valor anterior y le asigned entonces el nuevo, ejemplo:
    setPokemon((prev) => ({ ...prev, [name]: value }));
    // prev es el valor anterior del objeto pokemon. Esto se hace por que el setState tiene delays
    // y puede que el usuario vea un comportamiento raro en el input si no se tiene como referencia el valor anterior.

    // Y como ves, usaremos el propio [name], para identificar la propiedad del objeto que se tiene que modificar, así nos ahorramos tener dos handles.
  };

  // Esto cuando tengas los STATES de Error y Loading comentados
  // puedes mostrar por UI, un loader o el mensaje de error que aparezca en la request de la API o el que hemos puesto en el Submit
  //   if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>Error: {error}</div>;

  return (
    <div>
      Pokemon
      <ul>
        {pokedex.map((pokemon, index) => (
          // Nunca uses el index como key, si cambia el orden de la lista, REACT se hace un lío y no identifica bien los elementos
          // lo que yo haría, es guardar pokemon.id en el objeto del STATE y asignarlo en la key.
          // te aseguras así que tienes un identificador único, pase lo que pase.
          // <li key={pokemon.id}

          <li key={index}>
            {pokemon.name} - {pokemon.url}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            // Llamas al name igual que la propiedad del objeto pokemons, en este caso, name='name'
            name="name"
            value={pokemon.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>URL</label>
          <input
            type="text"
            // Llamas al name igual que la propiedad del objeto pokemons, en este caso, name='url'
            name="url"
            value={pokemon.url}
            onChange={handleInputChange}
          />
        </div>
        {/* Añade el type="submit", si no el form está incompleto y puede dar errores */}
        <button type="submit">Añadir Pokemon</button>
      </form>
    </div>
  );
};

export default Pokemon;
