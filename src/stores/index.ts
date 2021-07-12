import CountStore from './count/count.store';
import TourStore from './tour/tour.store';
import { enableStaticRendering } from 'mobx-react';

enableStaticRendering(typeof window === 'undefined');

class RootStore {
  counter: CountStore;
  tour: TourStore;

  constructor() {
    this.counter = new CountStore();
    this.tour = new TourStore();
  }
}

export default RootStore;
