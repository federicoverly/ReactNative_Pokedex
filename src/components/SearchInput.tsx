import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchInput = () => {
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.textBackground}>
        <TextInput
          placeholder="Search Pokemon"
          style={screenStyles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="default"
        />
        <Icon name={'search-outline'} color={'grey'} size={30} />
      </View>
    </View>
  );
};

const screenStyles = StyleSheet.create({
  container: {},
  textBackground: {
    backgroundColor: '#F3F3F3',
    heigth: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
