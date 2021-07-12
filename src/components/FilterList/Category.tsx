import styled from '@emotion/styled';
import { useState } from 'react';

const StyledCategory = styled.div`
  width: 100%;
`;

const SelectCategory = styled.ul`
  border: 1px solid lightgray;
  li {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
`;

const StyledTourList = styled.ul<{ isSpread: boolean }>`
  height: ${props => (props.isSpread ? 140 : 0)}px;
  overflow: hidden;
  transition: height 250ms;
`;

const SelectCategoryItem = styled.li`
  list-style: none;
  margin: 0px;
  padding: 0px;
  :hover {
    background-color: lightskyblue;
  }
`;

export const Category = () => {
  const [isSpread, setIsSpread] = useState(false);

  return (
    <StyledCategory>
      <p style={{ fontSize: 18, fontWeight: 600 }}> 카테고리</p>
      <SelectCategory>
        <li>전체</li>
        <li onClick={() => setIsSpread(prev => !prev)}>투어 </li>

        <StyledTourList isSpread={isSpread}>
          <SelectCategoryItem>전체보기</SelectCategoryItem>
          <SelectCategoryItem>오디오 투어</SelectCategoryItem>
          <SelectCategoryItem>랜선 투어</SelectCategoryItem>
        </StyledTourList>
      </SelectCategory>
    </StyledCategory>
  );
};
