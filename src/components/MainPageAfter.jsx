import React from 'react';
import Header from './Header';

function MainPageAfter() {
  return (
    // 배경화면 설정
    <div
      className='h-screen'
      style={{
        backgroundImage: 'url("https://i.ibb.co/Q8M7ycH/Kakao-Talk-20231018-121457122.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        
      {/* 헤더 */}
      <Header />

      {/* 내부박스 */}
      <div className='flex flex-col items-center' style={{ height: 'calc(100vh - 120px)' }}>

        <div
          className="w-[70%] h-[90%] rounded-2xl"
          style={{
            background: 'linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)',
            boxShadow: '0px 4px 30px 0 rgba(190,190,190,0.47)',
          }}>

            {/* 여기에 컴포넌트 실행 해야됨!!!! */}

        </div>


      </div>
    </div>

  );
}

export default MainPageAfter;
