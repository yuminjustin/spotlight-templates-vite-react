import { observable, makeObservable, runInAction } from "mobx";

export default class Todo {
  store: any;
  id: number;
  @observable title: string;
  @observable completed: boolean;

  constructor(store: any, id: number, title: string, completed: boolean) {
    this.store = store;
    this.id = id;
    this.title = title;
    this.completed = completed;
    makeObservable(this); //mbox 6后需要添加这个组件才会更新
  }

  toggle(): void {
    runInAction(() => {
      this.completed = !this.completed;
    });
  }

  setTitle(title: string): void {
    runInAction(() => {
      this.title = title;
    });
  }

  destroy(): void {
    runInAction(() => {
      this.store.list.remove(this);
    });
  }
}
