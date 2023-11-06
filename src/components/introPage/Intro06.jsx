import React from "react";
import { Link } from "react-router-dom";

const Intro06 = () => {
  return (
    <div>
      {/* 우리팀 소개 컴포넌트 */}
      <div className="mt-[-120px] font-Pretendard relative dark:bg-gray-800 dark:text-[#F2F2F2]">
        {/* 여백용 박스 */}
        <div className="w-[50px] h-[45px] md:w-[100px] md:h-[90px] " />

        <div className="py-16 overflow-hidden font-Pretendard ">
          <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 shadow-sm">
            <div>
              <span className="text-gray-600 text-lg font-semibold ">About us</span>
              <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">
                Who made this website
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
              <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl shadow-sm">
                <div className="relative p-8 space-y-8">
                  <img
                    src="https://i.ibb.co/nR7nTHN/11.png"
                    className="w-[70px]"
                    alt=""
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-[#0CBFA2]">
                      Kim Jihong
                    </h5>
                    <p className="text-sm text-gray-600">
                      프론트부터 백, AI까지 모든 분야를 <br />아우르며 프로젝트를 성공적으로 이끈 삼연속
                      능력자 팀장 <br />밥 겁나 잘먹음
                    </p>
                  </div>
                  <Link to="/main"
                    className="flex justify-between items-center group-hover:text-[#0CBFA2]"
                  >
                    <span className="text-sm">Read more</span>
                    <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      팀장
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl shadow-sm">
                <div className="relative p-8 space-y-8">
                  <img
                    src="https://i.ibb.co/dps2KV9/22.png"
                    className="w-[70px]"
                    alt=""
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-[#0CBFA2]">
                      Lee Seunghun
                    </h5>
                    <p className="text-sm text-gray-600">
                      하나에 빠지면 끝없이 파고드는 그런데 그 안에 냉철함이 있는 앞으로의 행보가 궁금한 프론트 대장 <br /> 단거 겁나 잘먹음
                    </p>
                  </div>
                  <Link to="/main"
                    className="flex justify-between items-center group-hover:text-[#0CBFA2]"
                  >
                    <span className="text-sm">Read more</span>
                    <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      팀원
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl shadow-sm">
                <div className="relative p-8 space-y-8">
                  <img
                    src="https://i.ibb.co/zPd4Tvt/66-01.png"
                    className="w-[70px]"
                    alt=""
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-[#0CBFA2]">
                      Ryu Sangji
                    </h5>
                    <p className="text-sm text-gray-600">
                      프로젝트하다가 갑자기 꽂혀서 <br />이거 하고있는 우리 팀소개가 제일 재밌는 1인 곧 프젝끝나서 신이난 사람
                    </p>
                  </div>
                  <Link to="/main"
                    className="flex justify-between items-center group-hover:text-[#0CBFA2]"
                  >
                    <span className="text-sm">Read more</span>
                    <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      팀원
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl shadow-sm">
                <div className="relative p-8 space-y-8">
                  <img
                    src="https://i.ibb.co/bdyFY9X/44-01.png"
                    className="w-[70px]"
                    alt=""
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-[#0CBFA2]">
                      Lee Dongyoung
                    </h5>
                    <p className="text-sm text-gray-600">
                      조용히 코딩의 세계를 정복하고 있는 데이터 디자인반 코딩 천재 <br />그런데 잠도 많고 <br />좀 거친 초코소년
                    </p>
                  </div>
                  <Link to="/main"
                    className="flex justify-between items-center group-hover:text-[#0CBFA2]"
                  >
                    <span className="text-sm">Read more</span>
                    <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      팀원
                    </span>
                  </Link>
                </div>
              </div>

              <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl shadow-sm">
                <div className="relative p-8 space-y-8">
                  <img
                    src="https://i.ibb.co/z5BGhz3/55-01.png"
                    className="w-[70px]"
                    alt=""
                  />

                  <div className="space-y-2">
                    <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-[#0CBFA2] ">
                      Moon Pilhyeon
                    </h5>
                    <p className="text-sm text-gray-600">
                      섬세하고 생각이 많아 보이는 그런데 그 생각이 꽤나 웃긴 공백기를 잠시 가졌던 프론트 마왕<br />잘때 목 잘 꺾음
                    </p>
                  </div>
                  <Link to="/main"
                    className="flex justify-between items-center group-hover:text-[#0CBFA2]"
                  >
                    <span className="text-sm">Read more</span>
                    <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      팀원
                    </span>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro06;