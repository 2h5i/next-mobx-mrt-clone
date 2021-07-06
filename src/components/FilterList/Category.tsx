import styled from '@emotion/styled';

const StyledCategory = styled.div`
  width: 100%;
`;

const SelectCategory = styled.div`
  border: 1px solid lightgray;
`;

export const Category = () => {
  return (
    <StyledCategory>
      <p style={{ fontSize: 18, fontWeight: 600 }}> 카테고리</p>
      <SelectCategory>
        <div>전체</div>
        <div>투어</div>
      </SelectCategory>
    </StyledCategory>
  );
};
