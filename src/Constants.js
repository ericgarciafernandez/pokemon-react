export const DEFAULT_COLORS_TYPE = Object.freeze({
    normal: '#A8A77A',
    fighting: '#C22E28',
    flying: '#A98FF3',
    poison: '#A33EA1',
    ground: '#E2BF65',
    rock: '#B6A136',
    bug: '#A6B91A',
    ghost: '#735797',
    steel: '#B7B7CE',
    fire: '#EE8130',
    water: '#6390F0',
    grass: '#7AC74C',
    electric: '#F7D02C',
    psychic: '#F95587',
    ice: '#00BFFF',
    dragon: '#6F35FC',
    fairy: '#D685AD',
    unknown: '#FFFF',
    shadow: '#FFFF',
});

export const DEFAULT_BACKGROUND_TYPE = Object.freeze({
    normal: '#d3d3d3',
    fighting: '#999',
    flying: '#999',
    poison: '#9a6fff',
    ground: '#544726c8',
    rock: '#544726c8',
    bug: '#49d0b0',
    ghost: '#9a6fff',
    steel: '#d3d3d3',
    fire: '#fa6d6b',
    water: '#76befe',
    grass: '#49d0b0',
    electric: '#ffd76f',
    psychic: '#fc6cb4',
    ice: '#00BFFF',
    dragon: '#111',
    fairy: '#fc6cb4',
    unknown: '#FFFF',
    shadow: '#FFFF',
});

export const DEFAULT_TYPES = ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison',
    'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'steel', 'dark', 'fairy'];

export const DEFAULT_TYPES_COMBINATION = Object.freeze({
    normal: {
        strengths: [],
        weaknesses: ['fighting'],
        immunity: ['ghost'],
    },
    fire: {
        strengths: ['grass', 'steel', 'ice', 'bug'],
        weaknesses: ['water', 'rock'],
        immunity: [],
    },
    water: {
        strengths: ['fire', 'rock', 'ground'],
        weaknesses: ['grass', 'electric'],
        immunity: [],
    },
    grass: {
        strengths: ['water', 'rock', 'ground'],
        weaknesses: ['fire', 'ice', 'poison', 'flying', 'bug'],
        immunity: [],
    },
    electric: {
        strengths: ['water', 'flying'],
        weaknesses: ['ground'],
        immunity: [],
    },
    ice: {
        strengths: ['grass', 'ground', 'flying', 'dragon'],
        weaknesses: ['fire', 'fighting', 'rock', 'steel'],
        immunity: [],
    },
    fighting: {
        strengths: ['normal', 'ice', 'rock', 'dark', 'steel'],
        weaknesses: ['flying', 'psychic', 'fairy'],
        immunity: [],
    },
    poison: {
        strengths: ['grass', 'fairy'],
        weaknesses: ['ground', 'psychic'],
        immunity: [],
    },
    ground: {
        strengths: ['fire', 'electric', 'rock', 'poison', 'steel'],
        weaknesses: ['water', 'ice', 'grass'],
        immunity: ['electric'],
    },
    flying: {
        strengths: ['grass', 'fighting', 'bug'],
        weaknesses: ['electric', 'ice', 'rock'],
        immunity: ['ground'],
    },
    psychic: {
        strengths: ['fighting', 'poison'],
        weaknesses: ['ghost', 'bug', 'dark'],
        immunity: ['dark'],
    },
    bug: {
        strengths: ['grass', 'psychic', 'dark'],
        weaknesses: ['fire', 'flying', 'rock'],
        immunity: [],
    },
    rock: {
        strengths: ['fire', 'ice', 'flying', 'bug'],
        weaknesses: ['water', 'grass', 'fighting', 'ground'],
        immunity: [],
    },
    ghost: {
        strengths: ['psychic', 'ghost'],
        weaknesses: ['dark'],
        immunity: ['normal', 'fighting'],
    },
    dragon: {
        strengths: ['dragon'],
        weaknesses: ['ice', 'fairy'],
        immunity: ['fairy'],
    },
    steel: {
        strengths: ['ice', 'rock', 'fairy'],
        weaknesses: ['fire', 'fighting', 'ground'],
        immunity: ['poison'],
    },
    dark: {
        strengths: ['psychic', 'ghost'],
        weaknesses: ['fighting', 'bug', 'fairy'],
        immunity: ['psychic'],
    },
    fairy: {
        strengths: ['fighting', 'dragon', 'dark'],
        weaknesses: ['poison', 'steel'],
        immunity: ['dragon'],
    },
});