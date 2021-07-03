import { action, makeObservable, observable } from "mobx";

class CountStore {
  constructor() {
    makeObservable(this);
  }
  @observable
  number = 0;

  @action
  increase = () => {
    console.log("@@");
    this.number++;
  };

  @action
  decrease = () => {
    this.number--;
  };
}

export default CountStore;
