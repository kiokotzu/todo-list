export interface IState {
  tasks: ITask[];
  text: string;
}

export interface ITask {
  name: string;
  key: number;
}
