import React from 'react';
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
        style={{
          position: 'absolute',
          zIndex: 999,
          width: windowWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />
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
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
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
