import React, {useEffect, useState} from 'react';
import {
  Platform,
  View,
  ActivityIndicator,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading} from '../components/Loading';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {styles} from '../theme/appTheme';

const windowWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isFetching, simplePokemonList} = usePokemonSearch();

  const [term, setTerm] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) {
      return setFilteredPokemons([]);
    }
    if (isNaN(Number(term))) {
      setFilteredPokemons(
        simplePokemonList.filter(pokemon =>
          pokemon.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      setFilteredPokemons([
        simplePokemonList.find(pokemon => pokemon.id === term),
      ]);
    }
  }, [term]);

  const renderItem = (item: SimplePokemon) => {
    return <PokemonCard pokemon={item} />;
  };

  if (isFetching) {
    return <Loading />;
  }
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: windowWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />
      <FlatList
        data={filteredPokemons}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom: 10,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
            }}>
            {term}
          </Text>
        }
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
