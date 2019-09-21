import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { stylesTask } from './styleTask';

const Task = (props) => {
  return(
    <View style={ stylesTask.container }>
      <Text>{ props.item.name }</Text>
      <TouchableOpacity onPress={ () => props.remove(props.item.key) }>
        <Ionicons name="md-trash" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
