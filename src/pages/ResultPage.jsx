import React, { useState } from 'react'
import HeaderAfter from '../components/HeaderAfter';
import ResultMain from '../components/resultPage/ResultMain';
import ResultMoveList from '../components/resultPage/ResultMoveList';

function ResultPage() {

  // 이미지 전달 정보
  const [beforeimg, setBeforeimg] = useState(null);
  const [hitmap, setHitmap] = useState(null);

  // 이미지 전달 정보 저장용
  const handleImageClick = (beforeimg, hitmap) => {
    setBeforeimg(beforeimg);
    setHitmap(hitmap);
  };

  // 돌아가기 버튼 클릭 핸들러
  const handleImageNull = () => {
    setBeforeimg(null);
    setHitmap(null);
  };

  return (
    <div className='dark:bg-gray-800 '>
    <HeaderAfter />

      {beforeimg !== null || hitmap !== null ? (
        <>
          <ResultMoveList beforeimg={beforeimg} hitmap={hitmap} onImageNull={handleImageNull} />
        </>
      ) : (
        <>
          <ResultMain onImageMove={handleImageClick} />
        </>

      )}
    </div>


  )



}

export default ResultPage;