import React from 'react'
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/loading.json';
import lottieJson2 from '../../lottie/mobileLoading.json';


const C00Loading = () => {
  return (
    <div>
      {/* 데스크탑 로딩 화면 */}
      <div className='hidden sm:block' style={{ position: 'relative' }}>
        <Lottie
          loop
          animationData={lottieJson}
          play
          option={{ speed: 0.3 }}
          style={{ opacity: 0.7, position: 'absolute', top: '0', left: '0', width: '100%', maxWidth: '1400px', borderRadius: '1%', overflow: 'hidden' }}
        />
     
      </div>

      {/* 모바일 로딩 화면 */}
      <div className='md:hidden mt-40'>
        <Lottie
          loop
          animationData={lottieJson2}
          play
          option={{ speed: 0.7 }}
          style={{ width: '100%', maxWidth: '1400px', borderRadius: '1%', overflow: 'hidden' }}
        />
      </div>
    </div>
  )
}

export default C00Loading