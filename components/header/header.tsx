import React from 'react';
import { TextInput, View } from 'react-native';
import { stylesHeader } from './styleHeader';

const Header = (props) => {
  return (
    <View style={stylesHeader.container}>
      <TextInput
        style={ stylesHeader.text }
        placeholder='Write text'
        onChangeText={ (value) => props.changeText(value) }
        onSubmitEditing={ (a) => props.addTask(a.nativeEvent.text) }
        value={ props.text }
      ></TextInput>
    </View>
  )
};

export default Header;
