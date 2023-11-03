import React, { useState } from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/robot.json";
import ImgDrop from "./technology/ImgDrop";


const C04ImgUpdate = ({ handleButtonClick }) => {

  // 실제 이미지
  const [uploadedImage, setUploadedImage] = useState(null);

  // 이미지 전송 확인용
  const [uploadedImageSend, setUploadedImageSend] = useState(null);

  // 이미지 업로드 성공시 실행되는 함수
  const handleImageUploadComplete = (success) => {
    if (success) {
      handleButtonClick(5);
    } else {
      //  실패시 작동하는 곳
      alert("업로드에 실패 했습니다.")
      handleButtonClick(4);
    }
  };

  return (
    <div className='font-Pretendard text-center items-center justify-center container mx-auto grid grid-cols-12 p-3 gap-4 max-w-screen-xl h-[100%]'>

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />
      {/* 내용 박스 */}
      <div className="col-span-12 md:col-span-10 p-7"
      >
        {uploadedImage === null ?
          (
            <p className="text-center text-black text-xl ">
              시선 분석을 위해서 매장의 매대 사진을 드롭 박스에 업로드 해주세요.
            </p>
          ) :
          (
            <p className="text-center text-black">
              이미지 업로드 버튼을 누르면 시선분석이 진행됩니다.
            </p>
          )
        }
      </div>
      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />
      {/* 로봇 */}
      <div className=" hidden md:block md:col-span-5">
        <Robot />
      </div>

      {/* 이미지 내용 박스 */}
      <div className="h-[100%] col-span-12 md:col-span-5 grid grid-cols-12 flex items-center justify-center">
        {!uploadedImage &&  // uploadedImage가 null이 아닐 경우만 표시
          <>
            {/* 이미지 */}
            <div className="col-span-12 md:col-span-4 flex justify-center">
              <img src="https://i.ibb.co/ZSfF5Bb/Kakao-Talk-20231023-104406363.png" alt="매대이미지" className="mx-auto" />
            </div>
            {/* 내용 */}
            <div className="col-span-12 md:col-span-8 p-3 text-base text-center text-black">
              <p className="font-bold">
                업로드 이미지 형식</p>
              <p className="font-medium">
                매대가 잘 보이는 이미지 <br />
                여백이 없는 이미지
              </p>
            </div >
          </>
        }
        {/* 이미지 드랍 함수 */}
        <ImgDrop
          onUploadSuccess={(image) => setUploadedImage(image)}
          //실제 이미지 업로드 파일
          uploadedImage={uploadedImage}
          uploadedImageSend={uploadedImageSend}
          onUploadComplete={handleImageUploadComplete}
        />
      </div>

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />

      {/* 버튼박스 */}
      {uploadedImage === null ?
        (<>
          <div className="col-span-1 md:col-span-2 p-3" />
          <div className="col-span-2 md:col-span-2 p-3" />
          <div className="col-span-1 md:col-span-2 p-3" />
        </>)
        :
        (<>
          <div className="col-span-1 md:col-span-2" />
          <button className="col-span-4 md:col-span-3 bg-[#0090E1] p-3 font-semibold text-white rounded-full"
            onClick={() => setUploadedImage(null)}>
            이전 단계로 이동
          </button>
          <div className="col-span-2 md:col-span-2" />
          <button className="animate-bounce3 col-span-4 md:col-span-3 bg-[#15c3a7] p-3 font-semibold text-white rounded-full"
            onClick={() => setUploadedImageSend(true)}>
            이미지 업로드
          </button>
          <div className="col-span-1 md:col-span-2" />
        </>)
      }

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-12" />
    </div>
  )
}

function Robot() {
  return (
    <Lottie
      className='translate3d-10-55-0'
      loop
      animationData={lottieJson}
      play
    />
  );
}


export default C04ImgUpdate