import Image from 'next/image';
import styled from '@emotion/styled';

const StyledMenu = styled.div`
  margin: 10px 20px;
`;

export const PcAppBar = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          height: 72,
          alignItems: 'center'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src='https://dffoxz5he03rp.cloudfront.net/build/production/582952803eb9e53f0b9c581c8f91b9b749f9b0c6/203bb94a1437a3d33bca75e5e77ab705.png'
            width={128}
            height={28}
          />
          <StyledMenu>서치바</StyledMenu>
        </div>
        <div style={{ display: 'flex' }}>
          <StyledMenu>파트너</StyledMenu>
          <StyledMenu>로그인</StyledMenu>
          <StyledMenu>회원가입</StyledMenu>
        </div>
      </div>
    </div>
  );
};
