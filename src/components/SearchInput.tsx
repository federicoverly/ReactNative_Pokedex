import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState, useEffect} from 'react';
import {useDebouncedValue} from '../hooks/useDebouncedValue';

interface Props {
  onDebounce: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style, onDebounce}: Props) => {
  const [textValue, setTextValue] = useState('');

  const {debouncedValue} = useDebouncedValue(textValue, 500);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View style={{...screenStyles.container, ...(style as any)}}>
      <View style={screenStyles.textBackground}>
        <TextInput
          placeholder="Search Pokemon"
          style={screenStyles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="default"
          value={textValue}
          onChangeText={setTextValue}
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
