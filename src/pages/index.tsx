import { inject, observer } from 'mobx-react';
import React from 'react';

import styled from '@emotion/styled';

import { FilterList, Header, TourList } from '../components/';

const StyledTour = styled.div`
  border: 1px solid red;
  max-width: 1060px;
  margin: 0 auto;
`;
const FlexBox = styled.div`
  display: flex;
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
      <div>'SearchQuery' 검색결과</div>
      <FlexBox>
        <FilterList />
        <TourList />
      </FlexBox>
    </StyledTour>
  );
};

export default inject('counter')(observer(Counter));
