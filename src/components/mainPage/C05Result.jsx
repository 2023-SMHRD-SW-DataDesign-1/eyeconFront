import React, { useEffect, useState } from 'react';
import AIchat from './technology/AIchat';
import useChat from '../../hook/mainPage/useChat';
import { Link } from 'react-router-dom';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/eyeTracking.json";

const C05Result = ({ handleButtonClick }) => {

  // 시작시 메시지 입력 장소 .
  const initialMessage = [
    {
      content: "안녕하세요! 챗봇 이콘입니다.",
      isMine: false,
    },
    {
      content: "잠시후 시선 분석 결과를 출력됩니다. 추가적인 질문 사항이 있으시면 이콘이에게 질문해주세요. '결과페이지 바로가기' 버튼을 누르시면 결과 페이지로 이동합니다.",
      isMine: false,
    },
  ];

  //  채팅 보내기 함수
  const {
    inputValue,
    setInputValue,
    waitingForResponse,
    messages,
    chatHandleSubmit,
  } = useChat(initialMessage);

  console.log(waitingForResponse)


  // 엔터키 할당
  const chatHandleKeyDown = (e) => {
    if (e.key === 'Enter') {
      chatHandleSubmit();
    }
  };

  // 로컬 스토리지에서 결과 이미지 데이터 가져오기
  const [isLoading, setIsLoading] = useState(true);

  const [resultImageData, setResultImageData] = useState(null); // 혹은 다른 기본값 설정

  useEffect(() => {
    // 1초에 한 번씩 실행되는 코드
    const interval = setInterval(() => {
      // 로컬 스토리지에서 데이터 가져오기
      const storedResultImageData = localStorage.getItem('resultImageData');
      console.log("데이터 받아짐?", storedResultImageData);
      if (storedResultImageData != null) {
        // 로컬 스토리지에 데이터가 존재하면 이미지 데이터 설정
        setResultImageData(storedResultImageData);
        setIsLoading(false); // 데이터가 도착한 후에 로딩 상태 해제
        clearInterval(interval); // 데이터가 도착한 후에 interval 종료
      }
    }, 1000); // 1초마다 실행

    // 컴포넌트 언마운트 시에 interval 정리
    return () => clearInterval(interval);
  }, []);



  return (
    <div className='font-Pretendard text-center items-center justify-center container mx-auto grid grid-cols-12 p-3 gap-4 max-w-screen-xl h-[100%]'>

      {/* 모바일 이동하기 버튼 */}
      <Link to="/result" className="block md:hidden col-span-12 md:col-span-0 p-3 rounded-lg text-black" >
        <button className="block md:hidden col-span-10 md:col-span-0 inline-block text-white bg-gray-400 rounded-lg text-sm px-5 py-2.5 text-center mb-2" onClick={() => handleButtonClick(4)}>
          <div className='inline-block mr-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline-block w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
            </svg>
          </div>
          <span className='inline-block text-base text-white whitespace-nowrap'>결과페이지 바로가기<img className="animate-pulse inline-block ml-2 w-3" src="https://i.ibb.co/0Cbr629/icon-arrow-right-1.png" /></span>
        </button>
      </Link>


      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1 " />

      {/* 결과 이미지 */}
      <div className="col-span-3 grid grid-cols-3 p-3">

        {/* 결과페이지 */}
        <div className="hidden md:block col-span-3" style={{ height: "350px" }}>
          {isLoading ? (
            <Loading />
          ) : (
            // 데이터를 가져온 후 보여줄 이미지
            <img src={resultImageData} alt="resultImage" />
          )}
        </div>
        {/*PC화면 결과 페이지 이동 링크 */}
        <Link to="/result">
          <div className="fixed hidden md:block col-span-3 flex justify-center items-center mt-[70px]" >
            <button className="hover:scale-110 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <img src="https://i.ibb.co/3RMdL8K/heatmap-1.png" className="w-[40px] mr-3" />
              <span className='inline font-gray-800 text-lg whitespace-nowrap'>결과페이지 바로가기</span><img className="ml-2 w-4" src="https://i.ibb.co/sJJB3Nh/icon-arrow-right.png" />
            </button>
          </div>
        </Link>
      </div>

      {/* 내용 박스 */}
      {/* AI 채팅 의존성 배열 추가 */}
      < AIchat messages={messages} dependency={waitingForResponse} />

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />

      {/* 채팅 입력 박스 구간 */}
      <div className="hidden md:block col-span-0 md:col-span-1 " />
      <div className="text-xl h-[100px] col-span-12 md:col-span-10 bg-neutral-100 p-3 flex flex-col items-center justify-center rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]  "
        style={{ filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))" }}>
        <div className="h-[100%] w-[100%] grid grid-cols-12 p-3">
          <input
            type="text"
            className='col-span-10 md:col-span-11 bg-transparent focus:outline-none'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={chatHandleKeyDown}
          />
          <button
            className='hover:scale-110 col-span-1 w-12 h-12 rounded-full bg-[#15c3a7] flex items-center justify-center'
            onClick={chatHandleSubmit}
          >
            <img src="https://i.ibb.co/0YLQ66v/Vector.png" alt="Vector" border="0" />
          </button>
        </div>
      </div>
      <div className="hidden md:block col-span-0 md:col-span-1" />
    </div>
  )
}
function Loading() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      option={{ speed: 0.7 }}
    />
  );
}
export default C05Result