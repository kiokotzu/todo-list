import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './header';
import Body from './body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  setText = (text) => {
    this.setState({text})
  };

  render() {
    return (
      <View style={styles.container}>
        <Header changeText={ this.setText }></Header>
        <Body text={ this.state.text }></Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
