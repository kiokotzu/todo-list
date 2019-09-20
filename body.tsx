import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Body = (props) => {
  return(
    <View style={style.container}>
      <Text>{ props.text }</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98bf98'
  }
});

export default Body;
