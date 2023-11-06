import React, { useRef, useState } from "react";
import MyPageAdd from "./MyPageAdd";
import MyPageList from "./MyPageList";
import useUserPWCK from "../../hook/userPage/useUserPWCK";
import useUserPWCKM from "../../hook/userPage/useUserPWCKM";
import useUserUpdatePw from "../../hook/userPage/useUserUpdatePw";

/* 마이페이지 */


const MyFixTest = () => {
  /* 내 가게 추가창 생성 */
  const [isLoading, setIsLoading] = useState(false);
  const handleAddButtonClick = () => {
    setIsLoading((prevLoading) => !prevLoading);
  };

  const PWErrorMessage = useUserPWCK();
  const PWMErrorMessage = useUserPWCKM();

  // 비밀번호 수정 , 비밀번호 수정확인 input태그에 걸어놈
  const pwRef1 = useRef(null);
  const pwRef2 = useRef(null);

  const { updatePwFunc } = useUserUpdatePw(PWErrorMessage, PWMErrorMessage);
  
  

  return (
    <div
      className="flex flex-col items-center font-Pretendard"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <div
        className="w-[90%] md:w-[70%] md:h-[98%] rounded-2xl"
        style={{
          background:
            "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)",
          boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)",
        }}
      >

        
        {/* 마이페이지 시작 */}
        <p className="text-center text-2xl font-bold mt-7 mb-3">마이페이지</p>
        <div className="container mx-auto max-w-screen-xl font-Pretendard">
          <div className="grid grid-cols-7 lg:grid-cols-12">
            <div className="grid-cols-1 lg:grid-cols-1" />
            <div className="col-span-4">
              <div> 이메일 주소</div>
              <div className="mt-1 font-bold">
                {/* 이메일 주소 나와야 할 곳  */}
                <p>eyecon@naver.com</p>
              </div> 
              <div className="mt-3"> 비밀번호</div>
              <div className="rounded-lg">
                    {/* 비밀번호 수정할 곳 */}
                <input
                  ref={pwRef1}
                  type="password"
                  name="password"
                  className="bg-[#F3FFFD] md:bg-[#FFFFFF] rounded-lg p-3 flex justify-between mt-3 outline-none focus:outline-none text-[15px] text-[#15c3a7] w-auto md:w-[325px] w-[140px]"
                />
                <p
                  className="message mt-3"
                  style={{ color: "red", fontSize: 12 }}
                >
                  {PWErrorMessage}
                </p>
              </div>
              <div className="mt-3">
                비밀번호 수정
                <div className="flex items-center">
                  {" "}
                  {/* flex-wrap 클래스 추가 */}
                  <div className="bg-[#F3FFFD] md:bg-[#FFFFFF] rounded-lg p-3 relative flex justify-between">
                    <input
                      ref={pwRef2}
                      type="password"
                      name="passwordCheck"
                      className="col-span-2 bg-[#F3FFFD] md:bg-[#FFFFFF] outline-none focus:outline-none text-[15px] text-[#15c3a7] w-auto md:w-[300px] w-[135px]"
                    />
                  </div>
                  {/* 비밀번호 수정 버튼 */}
                  <button className="whitespace-nowrap mt-2 ml-2 rounded-lg bg-[#15c3a7] p-2 text-base text-sm text-white md:w-[80px] hover:bg-[#128d82] active:bg-[#0d6b59] md:mt-3 md:ml-2 md:mb-3"
                  onClick={()=>{
                    updatePwFunc(pwRef1,pwRef2);
                  }}>
                    수정하기
                  </button>
                </div>
                <p style={{ color: "red", fontSize: 12 }}>{PWMErrorMessage}</p>


                {/*내 가게 추가 버튼 */}
                <button
                  onClick={handleAddButtonClick}
                  className="mt-3 md:mt-1 rounded-lg bg-[#00306D] p-2 text-base text-center text-sm text-white w-[110px] hover:bg-[#128d82] active:bg-[#0d6b59] flex items-center"
                >
                  <img
                    src="https://i.ibb.co/h2FyQNK/plus-circle.png"
                    alt=""
                    className="mr-2"
                  />
                  가게 추가
                </button>
                {/* 가게 추가 컴포넌트 생성 공간 */}
                <div>{isLoading && <MyPageAdd />}</div>
              </div>
            </div>

            <div className="col-span-2" />

            {/* 내 가게 생성될 공간 */}
            <div className="md:col-span-4 col-span-7">
              <MyPageList />
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFixTest;
