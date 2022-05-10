import axios from "axios";
import { observable, makeObservable, runInAction } from "mobx";

// 用户

export default class Users {
  @observable name = "";

  constructor() {
    makeObservable(this); //mbox 6后需要添加这个组件才会更新
  }

  getUser() {
    axios
      .get("./static/mock/user.json")
      .then((j) => {
        runInAction(() => {
          this.name = j.data.data.name;
        });
      })
      .catch((e) => {});
  }
}
