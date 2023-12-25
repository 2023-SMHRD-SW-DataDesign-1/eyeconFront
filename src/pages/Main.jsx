import React from "react";
import HeaderAfter from "../components/HeaderAfter";
import Component1 from "../components/mainPage/C01Start";
import Component2 from "../components/mainPage/C02Pay";
import Component3 from "../components/mainPage/C03AIChat";
import Component4 from "../components/mainPage/C04ImgUpdate";
import Component5 from "../components/mainPage/C05Result";
import Component6 from "../components/mainPage/C06PayLoading";
import LoadingComponent from "../components/mainPage/C00Loading";
import useLoadingDelayHandler from "../hook/mainPage/useMainLoading";
import Lottie from "react-lottie-player";
import lottieJson from "../lottie/backani.json"

function MainPageAfter() {
  const initialDelay = 1600; // 처음 로딩 시 딜레이
  const buttonDelay = 1200; // 버튼 클릭 시 딜레이
  const [isLoading, currentComponent, handleButtonClick] = useLoadingDelayHandler(initialDelay, buttonDelay);

  //백그라운드 애니메이션
  function BackAni() {
    return (
      <Lottie
        className='w-full animate-pulse'
        loop
        animationData={lottieJson}
        play
      />
    );
  }


  return (
    // 배경화면 설정
    /*  <div className="h-screen bg-no-repeat bg-cover md:bg-[url('https://i.ibb.co/Q8M7ycH/Kakao-Talk-20231018-121457122.png')] dark:bg-[url('https://i.ibb.co/PD92ZQZ/1.png')] "> */

    <div className="bg-gray-100 h-screen bg-no-repeat bg-cover md:bg-[url('https://i.ibb.co/gy4T77d/image.png')] dark:bg-[url('https://i.ibb.co/THntTrZ/image.png')]">
      {/* 헤더 */}
      <HeaderAfter handleButtonClick={handleButtonClick} />
      <div
        className='fixed z-0 w-full h-full'
      >
        <BackAni />
      </div>
      {/* 내부박스 */}
      <div className="flex flex-col items-center" style={{ height: "calc(100vh - 120px)" }}>
        <div
          className="w-[95%] h-[100%] md:w-[70%] md:h-[90%] rounded-2xl dark:bg-gradient-[#0a0a0a] bg-gradient-[#fff]"
          style={{
            background: "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)",
            boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)",
            position: "relative", // position을 relative로 설정
          }}
        >

          {/* 6번 컴포넌트로 이동 시에만 기존 로딩 안뜨게 */}
          {isLoading && <LoadingComponent />}
          {!isLoading && currentComponent === 1 && (<Component1 handleButtonClick={handleButtonClick} />)}
          {!isLoading && currentComponent === 2 && (<Component2 handleButtonClick={handleButtonClick} />)}
          {!isLoading && currentComponent === 3 && (<Component3 handleButtonClick={handleButtonClick} />)}
          {!isLoading && currentComponent === 4 && (<Component4 handleButtonClick={handleButtonClick} />)}
          {!isLoading && currentComponent === 5 && (<Component5 handleButtonClick={handleButtonClick} />)}
          {!isLoading && currentComponent === 6 && (<Component6 handleButtonClick={handleButtonClick} />)}
        </div>
      </div>
    </div>

  );
}

export default MainPageAfter;
