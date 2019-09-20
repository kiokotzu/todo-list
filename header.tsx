import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text>hola</Text>
      <TextInput placeholder="tomalo" onChangeText={ (value) => props.changeText(value) }></TextInput>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#00ff00',
    paddingLeft: 10,
    paddingRight: 10,
  }
});


export default Header;
