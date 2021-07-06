import styled from '@emotion/styled';

const StyledFilter = styled.div`
  width: 100%;
`;

const SelectFilter = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
`;

export const Filter = () => {
  return (
    <StyledFilter>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          <p style={{ fontSize: 18, fontWeight: 600 }}>필터</p>
        </div>
        <div>
          <p style={{ fontSize: 15, color: 'lightgray' }}> 초기화</p>
        </div>
      </div>
      <SelectFilter>
        <div>일정</div>
        <div>가격대</div>
        <div>평점</div>
        <div>여행지</div>
        <div>투어 형태</div>
        <div>즉시 확정 상품만 보기</div>
        <div>한국어</div>
        <div>소요 시간</div>
        <div>만나는 시간</div>
      </SelectFilter>
    </StyledFilter>
  );
};
