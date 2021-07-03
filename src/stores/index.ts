import CountStore from "./count/count.store";

class RootStore {
  counter: CountStore;
  constructor() {
    this.counter = new CountStore();
  }
}

export default RootStore;
