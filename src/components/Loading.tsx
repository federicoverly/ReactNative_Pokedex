import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

export const Loading = () => {
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
};
