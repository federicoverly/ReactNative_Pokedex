import {useState} from 'react';
import {FullPokemon} from '../interfaces/pokemonInterfaces';
import {useEffect} from 'react';
import {pokemonApi} from '../api/pokemonAPI';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<FullPokemon>({} as FullPokemon);

  const loadPokemon = async () => {
    const resp = await pokemonApi.get<FullPokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
