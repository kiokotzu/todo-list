import React from 'react';
import { AsyncStorage, View } from 'react-native';
import Header from './components/header/header';
import Body from './components/body/body';
import { TASK } from './core/constants';
import { IState, ITask } from './core/interfaces';
import { styles } from './styleApp';

export default class App extends React.Component<{}, IState> {
  constructor() {
    super();
    this.state = {
      tasks: [],
      text: ''
    };
  }

  componentDidMount(): void {
    this.recoveryData();
  }

  setText = (text: string): void => {
    this.setState({ text });
  };

  saveData = (tasks: ITask[]): void => {
    AsyncStorage.setItem(TASK, JSON.stringify(tasks));
  };

  addTask = (name: string): void => {
    const newTasks: ITask[] = [ ...this.state.tasks, { name, key: Date.now() } ];
    this.saveData(newTasks);
    this.setState({
      tasks: newTasks,
      text: ''
    });
  };

  recoveryData = ():void => {
    AsyncStorage.getItem(TASK).then( data => this.setState({ tasks: JSON.parse(data) || [] } ));
  };

  removeTask = (id: number): void => {
    const tasks: ITask[] = this.state.tasks.filter( task => task.key !== id );
    this.saveData(tasks);
    this.setState({ tasks });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          changeText={ this.setText }
          addTask={ this.addTask }
          text={ this.state.text }
        />
        <Body tasks={ this.state.tasks } remove={ this.removeTask }/>
      </View>
    );
  }
}
