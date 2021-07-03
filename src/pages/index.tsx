import { inject, observer } from 'mobx-react';

const Counter = props => {
  const handleIncrease = () => {
    props.counter.increase();
  };

  const handleDecrease = () => {
    props.counter.decrease();
  };
  return (
    <div>
      Welcome to Next.js!
      <div> 숫자 :{props.counter.number}</div>
      <div>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
    </div>
  );
};

export default inject('counter')(observer(Counter));
