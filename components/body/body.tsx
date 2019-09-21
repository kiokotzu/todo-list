import React from 'react';
import { FlatList, View } from 'react-native';
import Task from '../task/task';
import { ITask } from '../../core/interfaces';
import { styleBody } from '../body/styleBody';

const Body = (props) => {
  return(
    <View style={styleBody.container}>
      <FlatList
        data={ props.tasks }
        renderItem={ ( task ) => <Task item={ task.item } remove={ props.remove }/> }
        keyExtractor={ (task: ITask) => task.key.toString() }
      />
    </View>
  );
};

export default Body;
