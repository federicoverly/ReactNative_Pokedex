import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {PokemonCard} from '../components/PokemonCard';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  const renderItem = (item: SimplePokemon) => {
    return <PokemonCard pokemon={item} />;
  };

  return (
    <>
      <Image
        source={require('../assets/pokeball.png')}
        style={styles.pokeballBG}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({item}) => renderItem(item)}
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              Pokedex
            </Text>
          }
          numColumns={2}
          // Infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          // Activity indicator
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} color={'gray'} size={20} />
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};
