import { observable, makeObservable, runInAction } from "mobx";

export default class TypeStore {
  @observable type: number = 0;
  // 0 所有  1 未选择  2 已选择

  constructor() {
    makeObservable(this); //mbox 6后需要添加这个组件才会更新
  }

  changeType(type: number) {
    runInAction(() => {
      this.type = type;
    });
  }
}
