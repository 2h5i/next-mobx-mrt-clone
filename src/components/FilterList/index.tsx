import styled from '@emotion/styled';
import { Category } from './Category';
import { Filter } from './Filter';

const StyledFilterList = styled.div`
  max-width: 250px;
  width: 100%;
`;

export const FilterList = () => {
  return (
    <StyledFilterList>
      <Category />
      <Filter />
    </StyledFilterList>
  );
};
