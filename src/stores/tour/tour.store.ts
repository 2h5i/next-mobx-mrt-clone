import { makeObservable, observable } from 'mobx';

class TourStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  tourList = [];
}

export default TourStore;
