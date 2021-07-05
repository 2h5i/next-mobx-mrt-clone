import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  border: 1px solid red;
`;

const Counter = props => {
  const handleIncrease = () => {
    props.counter.increase();
  };

  const handleDecrease = () => {
    props.counter.decrease();
  };
  return (
    <StyledCounter>
      Welcome to Next.js!
      <div> 숫자 :{props.counter.number}</div>
      <div>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
    </StyledCounter>
  );
};

export default inject('counter')(observer(Counter));
