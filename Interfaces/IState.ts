import { ITask } from "./ITask";

export interface IState {
  items: ITask[];
  error: string | null;
}
