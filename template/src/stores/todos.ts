import { observable, computed, makeObservable, runInAction } from "mobx";
import Todo from "./models/todo";

export default class TodoStore {
  @observable list: Array<Todo> = [];

  @computed get noChoose() {
    return this.list.reduce((sum, todo) => sum + (todo.completed ? 0 : 1), 0);
  }

  @computed get active() {
    return this.list.length - this.noChoose;
  }

  @computed get chooseAll() {
    /* 是否全选 */
    return this.list.length != 0 && this.noChoose == 0;
  }

  constructor(array: Array<Todo>) {
    this.list = array || [];
    makeObservable(this); //mbox 6后需要添加这个组件才会更新
  }

  addTodo(title: string): void {
    runInAction(() => {
      this.list.push(new Todo(this, this.list.length, title, false));
    });
  }

  toggle(): void {
    let bool = this.chooseAll,
      list = this.list;
    runInAction(() => {
      let temp: Array<Todo> = list.map((todo: Todo) => {
        todo.completed = bool ? !1 : !0;
        return todo;
      });
      this.list = temp;
    });
  }

  delete(): void {
    let arr = <any>[];
    this.list.map((todo: Todo) => {
      if (!todo.completed) arr.push(todo);
    });
    runInAction(() => {
      this.list = arr;
    });
  }
}
