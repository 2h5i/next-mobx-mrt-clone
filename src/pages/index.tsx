import { inject, observer } from 'mobx-react';
import React from 'react';
import { css } from '@emotion/react';
import { styled } from '@emotion/styled';

import { FilterList, Header, TourList } from '../components/';

const StyledTour = styled.div`
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
    <StyledTour>
      <Header />
      <FlexBox>
        <FilterList />
        <TourList />
      </FlexBox>
    </StyledTour>
  );
};

export default inject('counter')(observer(Counter));
