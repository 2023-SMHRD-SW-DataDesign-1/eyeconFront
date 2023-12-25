import React from 'react';

const Intro04 = () => {
    return (
        <div className="mt-[-120px] font-Pretendard relative dark:bg-gray-800 dark:text-[#F2F2F2]">
            {/* 여백용 박스 */}
            <div className="w-[50px] h-[45px] md:w-[100px] md:h-[90px]" />

            {/* 타이틀 이미지 */}
            <div className="w-64 md:w-auto relative md:block hidden">
                <img
                    src="https://i.ibb.co/s2SgGy4/2.png"
                    alt="intro4"
                    className="h-auto pointer-events-none"
                />
            </div>


            {/* 컨테이너 박스 */}
            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-4">
                <div className="col-span-12 md:relative md:top-[50px]">
                    <span className="relative">
                        <span className="relative z-10 text-4xl md:text-6xl font-bold p-3">AI CHATBOT <br /> <span className=' p-3'>그리고 시선분석</span></span>

                    </span>
                    <p className="col-span-12 p-3" >
                        <br />
                        AI 챗봇을 활용해 우리는 서비스의 품질을 높입니다. 단순한 결과물이 아닌 인공지능이 분석한
                        결과물을 토대로 우리는 이용자들과 소통하고,  <br />그것의 결과물로 이용자들의 더 나은 마케팅을
                        돕습니다.
                    </p>
                </div>
            </div>

            {/* 내용 적는 곳 */}
            <div className="container mx-auto grid grid-cols-12  gap-4 max-w-screen-xl p-4 mt-4">
                <div className="col-span-12 md:col-span-6">
                    <div className=' grid grid-cols-4'>
                        {/* 첫번째 */}
                        <div className="col-span-1 p-2"><img src="https://i.ibb.co/dQGPp8B/pic1.png" className="w-[100x] transition duration-300 hover:scale-110" alt="pic1" border="0" /></div>
                        <div className="col-span-3 p-3">
                            <p className='text-xl font-bold'>우수한 사용성</p>
                            <p>eyecon 서비스는 가게를 운영하는 업주라면 누구든 쉽게 이용할 수 있는 서비스입니다. 사진 업로드 한번이면 어디서나 서비스 이용이 가능합니다.</p>
                        </div>
                        {/* 두번째 */}
                        <div className="col-span-1 p-2"><img src="https://i.ibb.co/tbfmptY/pic2.png" alt="pic2" border="0" className="w-[100x] transition duration-300 hover:scale-110"/></div>
                        <div className="col-span-3 p-3">
                            <p className='text-xl font-bold'>데이터 기반</p>
                            <p>고객의 시선 분석은 데이터를 기반으로 합니다. 수 많은 고객들의
                                시선 데이터를 분석하고 그 데이터를 기반으로 한 서비스입니다.
                            </p>
                        </div>
                        {/* 세번째 */}
                        <div className="col-span-1 p-2 "><img src="https://i.ibb.co/Ks6J4nN/pic3.png" alt="pic3" border="0" className="w-[100x] transition duration-300 hover:scale-110"  /></div>
                        <div className="col-span-3 p-3">
                            <p className='text-xl font-bold'>매출 향상</p>
                            <p> 고객의 시선을 분석해 최적의 매대 배치는 매출 향상에 도움이 되며 많은 사용자가 인정한 효과적인 마케팅 방법 중 하나입니다.
                            </p>
                        </div>
                    </div>
                </div>

            
                {/* 이미지 */}
                <div className="col-span-5 md:block hidden transition duration-300 hover:opacity-70">
                    <img
                        src="https://i.ibb.co/QCdvyg3/3.png"
                        alt="intro5"
                        className="h-auto pointer-events-none "
                    />
                </div>
            </div>
        </div>

    );
}

export default Intro04;
