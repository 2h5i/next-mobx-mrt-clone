import Image from 'next/image';

export const MobileAppBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Image
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAOBJREFUaAXt1jEOgjAUxvHvEcNF1Ls4OnsAEwddXRxdXHUwcVZnR++iXoSBSpkqnQgkQPx36gul7+svJFRiIIAAAggggEB3AlZt7Zyz1Wa7kGlafdZp7fQ6Hw93M3NhjlFY+LkPn8td9bOsuqqbusjmG9/C7klYDHE++E9oiOhkRgABBBBoTyD6kS3Xu7GUPSU3aa9NGzvZW0pnl9P+E+4WXyWSbN6/8D5yAVpmC+NL8QHy9CH50/ZtFJnKbH3LRR4EEEAAAQQaCHAXaoBX81XuQjXBWI4AAggggAACfyDwBcPlP04v6vDBAAAAAElFTkSuQmCC'
          alt='포인트, 쿠폰, 프로필 관리, 예약내역 등의 정보를 확인'
          width={24}
          height={24}
        />
      </div>
      <div>
        <Image
          src='https://dffoxz5he03rp.cloudfront.net/build/production/edc38ea7b4c5b2a96914a378479c9156a78d0d44/203bb94a1437a3d33bca75e5e77ab705.png'
          alt='logo'
          width={92}
          height={20}
        />
      </div>
      <div>
        <Image
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjODQ4Qzk0IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgPHBhdGggZD0iTTguNjY3IDE0LjU4M2E1LjkxNSA1LjkxNSAwIDAgMCA1LjkxNi01LjkxNkE1LjkxNSA1LjkxNSAwIDAgMCA4LjY2NyAyLjc1IDUuOTE1IDUuOTE1IDAgMCAwIDIuNzUgOC42NjdhNS45MTUgNS45MTUgMCAwIDAgNS45MTcgNS45MTZ6Ii8+CiAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTMuMTExIDEzLjExMWw0LjQ0NSA0LjQ0NSIvPgogICAgPC9nPgo8L3N2Zz4K'
          alt='포인트, 쿠폰, 프로필 관리, 예약내역 등의 정보를 확인'
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
