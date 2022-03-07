import React from 'react';
import {Platform, View, ActivityIndicator, Text, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {styles} from '../theme/appTheme';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isFetching, simplePokemonList} = usePokemonSearch();

  const renderItem = (item: SimplePokemon) => {
    return <PokemonCard pokemon={item} />;
  };

  if (isFetching) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color={'grey'} size={50} />
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? top : top + 20,
        marginHorizontal: 20,
      }}>
      <SearchInput />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom: 10,
            }}>
            Pokedex
          </Text>
        }
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
