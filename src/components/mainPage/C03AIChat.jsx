import React from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/robot.json";
import lottieJson2 from "../../lottie/mobileLoading.json";
import lottieJson3 from "../../lottie/eyeload.json";



import AIchatStart from './technology/AIchatStart';
import AIchat from './technology/AIchat';
import useChat from '../../hook/mainPage/useChat';
import useChatChange from '../../hook/mainPage/useChatChange';

const C03AIChat = ({ handleButtonClick }) => {

    //시작시 기존 로컬 이미지 삭제
    localStorage.removeItem('resultImageData');

    // 시작시 메시지 입력 장소(isMine: false = AI 대답)
    const initialMessage = [
        {
            content: "안녕하세요. 상권 분석과 매대 시선분석을 도와드릴 챗봇 이콘입니다.",
            isMine: false,
        }, {
            content: "이콘이와 상권 분석을 원하시면 채팅창에 '상권 분석'을 입력해주세요. 만약 바로 시선 분석을 원하시면 하단의 '시선분석 바로가기' 버튼을 클릭해주세요. ",
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

    // 서버 데이터 의존성 확인용
    console.log(waitingForResponse);


    //  체인지 함수 채팅 시작전 컴포넌트에서 채팅 컴포넌트 변경
    const { showAIchatStart, showAIchat, changeButtonClick } = useChatChange();

    //  엔터키를 채팅 전송으로 할당
    const chatHandleKeyDown = (e) => {
        if (e.key === 'Enter') {
            chatHandleSubmit();
        }
    };

    return (
        <div className='font-Pretendard text-center items-center justify-center container mx-auto grid grid-cols-12 p-3 gap-4 max-w-screen-xl h-[100%]'>

            {/* 모바일 버튼 */}
            <div className="col-span-0 md:hidden block" />

            <button className="block md:hidden col-span-10 md:col-span-0 inline-block text-white bg-gray-400 rounded-lg text-sm px-5 py-2.5 text-center mb-2" onClick={() => handleButtonClick(4)}>
                <div className='inline-block mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="w-[30px] inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <span className='inline-block text-base text-white whitespace-nowrap'>시선분석 바로가기</span>
            </button>

            {/* 여백용 박스 */}
            <div className="hidden md:block col-span-0 md:col-span-1" />

            {/* 로봇 */}
            {/* 로봇 또는 다른 컴포넌트 */}
            <div className="hidden block md:block col-span-3 grid grid-cols-3 p-3" style={{ position: 'relative' }}>
                <div className="col-span-3 mt-40" style={{ height: "325px" }} >
                    {waitingForResponse ? (
                        // 서버 응답을 기다리는 동안 보여줄 컴포넌트
                        <Loading />
                    ) : (
                        // 응답을 기다리지 않는 경우에는 로봇 컴포넌트를 보여줍니다.
                        <Robot />
                    )}
                    <div className="fixed hidden md:block col-span-3 flex justify-center items-center" style={{ position: 'absolute', top: '510px', left: '0', width: '100%', zIndex: 999 }}>
                        {showAIchatStart && <></>}
                        {showAIchat && <button onClick={() => handleButtonClick(4)} className="hover:scale-110 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <img src="https://i.ibb.co/xz2LhwC/eye.png" className="w-[40px] mr-3" />
                            <span className='inline font-gray-800 text-lg whitespace-nowrap'>시선분석 바로가기</span><img className="ml-2 w-4" src="https://i.ibb.co/sJJB3Nh/icon-arrow-right.png" />
                        </button>}
                    </div>
                </div>

                {/*     <div className="grid col-span-3 hidden md:block col-span-3 flex justify-center items-center  inline-block " style={{ position: 'absolute', top: '500px', left: '-30px', width: '100%', zIndex: 1 }}>
                    {showAIchatStart && <></>}
                    {showAIchat && <button onClick={() => handleButtonClick(4)} className="hover:scale-110 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <Eyebutton />
                        <span className='inline font-gray-800 text-xl whitespace-nowrap'>시선분석 바로가기</span><img className="ml-2 w-4" src="https://i.ibb.co/sJJB3Nh/icon-arrow-right.png" />
                    </button>

                    }
                </div> */}
                {/* PC화면시 등장하는 버튼 */}

            </div>

            {/* 내용 박스 */}
            {showAIchatStart && <AIchatStart onButtonClick={changeButtonClick} />}



            {/* 의존성 베열 추가 */}
            {showAIchat && < AIchat messages={messages} dependency={waitingForResponse} />}

            {/* 여백용 박스 */}
            <div className="hidden md:block col-span-0 md:col-span-1" />

            {/* 여백용 박스 */}
            <div className="hidden md:block col-span-0 md:col-span-1" />

            {/* 내용 박스 */}
            <div className="text-base md:text-xl h-[100px] overflow-hidden col-span-12 md:col-span-10 bg-neutral-100 p-3 flex flex-col items-center justify-center rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] "
                style={{ filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))" }}>
                {showAIchatStart &&
                    <div className="text-center text-black animate-typing overflow-hidden md:whitespace-nowrap whitespace-pre-wrap">
                        <p className='md:block hidden'>서비스를 위해 내 가게를 선택 후 대화하기 버튼을 눌러주세요</p>
                        <p className='block md:hidden'>서비스를 위해 내 가게를 선택 후<br /> 대화하기 버튼을 눌러주세요</p>
                    </div>
                }

                {showAIchat &&
                    <div className="h-[100%] w-[100%] grid grid-cols-12 p-3 mr-10 md:mr-0 hover:bg-gray-100 ">
                        <input
                            type="text"
                            className='ml-5 col-span-11 bg-transparent focus:outline-none '
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={chatHandleKeyDown}
                        />
                        <button
                            className='mr-20 col-span-1 w-12 h-12 rounded-full bg-[#15c3a7] flex items-center justify-center'
                            onClick={chatHandleSubmit}
                        >
                            <img src="https://i.ibb.co/mFsvnL7/image.png" alt="Vector" border="0" />
                        </button>
                    </div>
                }

            </div>


            {/* 여백용 박스 */}
            <div className="hidden md:block col-span-0 md:col-span-1" />

        </div>
    )
}

function Robot() {
    return (
        <Lottie
            className='translate3d-10-55-0 animate-wiggle'
            loop
            animationData={lottieJson}
            play
        />
    );
}

function Loading() {
    return (
        <Lottie
            loop
            animationData={lottieJson2}
            play
            option={{ speed: '0.7' }}
        />
    );
}

function Eyebutton() {
    return (
        <Lottie
            loop
            animationData={lottieJson3}
            play
            option={{ speed: '0.3' }}
            style={{ width: '100%', maxWidth: '150px', display: "inline-block" }}
        />
    );
}

export default C03AIChat