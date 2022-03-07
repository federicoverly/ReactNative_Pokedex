import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {RootStackParams} from '../navigation/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';
import {PokemonDetails} from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}
export const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {top} = useSafeAreaInsets();
  const {isLoading, pokemon} = usePokemon(simplePokemon.id);
  return (
    <ScrollView>
      <View
        style={{
          ...screenStyles.headerContainer,
          backgroundColor: color,
        }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...screenStyles.backButton,
            top: top + 5,
          }}>
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>
        <Text
          style={{
            ...screenStyles.pokemonName,
            top: top + 40,
          }}>
          {pokemon.name + '\n'}#{pokemon.id}
        </Text>
        <Image
          source={require('../assets/pokeball-white.png')}
          style={screenStyles.pokeball}
        />
        <FadeInImage
          uri={simplePokemon.picture}
          style={screenStyles.pokemonImage}
        />
      </View>

      {isLoading ? (
        <View style={screenStyles.activityIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </ScrollView>
  );
};

const screenStyles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  pokemonName: {
    fontSize: 40,
    color: 'white',
    alignSelf: 'flex-start',
    left: 15,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    height: 250,
    width: 250,
    position: 'absolute',
    bottom: -15,
  },
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
