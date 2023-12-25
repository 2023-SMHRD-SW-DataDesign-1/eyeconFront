import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/miniRobot.json";

const Intro02 = () => {
  return (
    <div className="font-Pretendard dark:bg-gray-800">
      {/* 색깔있는 박스 위치 */}
      <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">
        <div className="col-span-5 md:col-span-4" />
      </div>

      {/* 메인 애니메이션 아래 네개 박스 */}
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-2 md:py-16 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
              <div className="border-1 border-blue-300 px-4 py-8 rounded-lg transform transition duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-[#0CBFA2] dark:text-indigo-400 w-12 h-12 mb-3 inline-block animate-bounce3"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 className="title-font font-medium text-2xl md:text-3xl text-gray-900 dark:text-[#F2F2F2]">
                  시선 분석 히트맵
                </h2>
                <p className="leading-relaxed dark:text-gray-400">Downloads</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-1 border-gray-300 px-4 py-8 rounded-lg transform transition duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-[#0CBFA2] w-12 h-12 mb-3 inline-block animate-bounce3"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-2xl md:text-3xl text-gray-900 dark:text-[#F2F2F2]">
                  마케팅 솔루션
                </h2>
                <p className="leading-relaxed dark:text-gray-400">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-1 border-gray-300 px-4 py-8 rounded-lg transform transition duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-[#0CBFA2] dark:text-indigo-400 w-12 h-12 mb-3 inline-block animate-bounce3"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                </svg>
                <h2 className="title-font font-medium text-2xl md:text-3xl text-gray-900 dark:text-[#F2F2F2]">
                  이미지 다운로드
                </h2>
                <p className="leading-relaxed dark:text-gray-400">Files</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-1 border-gray-300 px-4 py-8 rounded-lg transform transition duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-[#0CBFA2]  dark:text-indigo-400 w-12 h-12 mb-3 inline-block animate-bounce3"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"></path>
                </svg>
                <h2 className="title-font font-medium text-2xl md:text-3xl text-gray-900 dark:text-[#F2F2F2]">
                  상권 분석 데이터
                </h2>
                <p className="leading-relaxed dark:text-gray-400">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-row-reverse items-center">
        <div className="w-64 md:w-auto md:block hidden">
          <img
            src="https://i.ibb.co/ZgJdZpR/1.png"
            alt="intro3"
            className="h-auto pointer-events-none"
          />
        </div>
      </div>

      <div className="dark:text-[#F2F2F2] container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl text-right">
        <div className="col-span-6" />

        {/* 움직이는 글자  */}
        <div className="col-span-6">
          <div className="hidden md:block text-right md:mt-20 md:p-0 p-5 font-extrabold text-2xl md:text-5xl [text-wrap:balance] bg-clip-text text-gray-600 bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
            아이콘 서비스는 항상 더 나은 <br />
            서비스를 고민합니다{" "}
            <span className="text-indigo-300 inline-flex flex-col h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="text-right block animate-text-slide-5 leading-tight [&_li]:block">
                <li>상권 분석</li>
                <li>매대 분석</li>
                <li>상품 배치</li>
                <li>고객 분석 </li>
                <li>챗봇 상담</li>
                <li aria-hidden="true">시선 분석</li>
              </ul>
            </span>
          </div>

          <span className="md:block hidden relative text-right p-4 md:p-0">
            <p className="relative z-10 text-4xl md:text-6xl font-bold">
              Our Service <br /> Process that
            </p>

            <p className="relative z-10 text-4xl md:text-6xl font-bold">
              we apply
            </p>
          </span>

          <span className="block md:hidden relative text-right p-4 md:p-5">
            <p className="relative z-10 md:text-3xl text-4xl font-bold">
              Our Service Process that
            </p>

            <p className="relative z-10 text-4xl md:text-3xl font-bold">
              we apply
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

// 메인화면 내 움직이는 미니 로봇
function MiniRobot() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      option={{ speed: 0.3 }}
      style={{ width: "100%", maxWidth: "200px" }}
    />
  );
}

export default Intro02;
