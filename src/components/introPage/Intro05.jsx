import React from 'react'
const Intro05 = () => {
    return (
        <div className="font-Pretendard relative dark:bg-gray-800 dark:text-[#F2F2F2] mt-[-150px] ">

            {/* 여백용 박스 */}
            <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]" />

            {/* 내용 적는 곳 */}
            <div className='border-2 border-gray-100 dark:bg-[#343434] '>
                <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">

                    {/* 여백용 박스 */}
                    <div className="col-span-12 md:h-20 h-10" />

                    {/* 첫번째 */}
                    <div className="col-span-12 md:col-span-5 ">
                        <div style={{ height: '80px' }} className="mt-10 flex md:block items-center justify-center">
                            <img
                                src="https://i.ibb.co/D7RP29Z/4.png"
                                alt="logo"
                            />
                        </div>
                    </div>

                    {/* 두번째 */}
                    <div className="col-span-12 md:col-span-3 items-center">
                        <div className="md:h-20 h-10 md:flex items-center block text-center">
                            <p className="text-2xl font-bold">
                                Our Services
                            </p>
                        </div>

                        <ul className="list-none md:list-disc text-center md:text-left">
                            <li>EYE-TRACKING</li>
                            <li>AI CHATBOT</li>
                            <li>COMMERCIAL ANALYSIS</li>
                        </ul>
                    </div>

                    {/* 세번째 */}
                    <div className="col-span-12 md:col-span-3 items-center ">
                        <div className="md:h-20 h-10 md:flex items-center block text-center">
                            <p className="text-2xl font-bold whitespace-nowrap ">
                                Contact Us
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <p>주소: 광주 동구 스마트인재개발원</p>
                            <p>전화: 062 - 123 -</p>
                            <p>메일:eyecon@gmail.com</p>
                        </div>
                    </div>

                    {/* 여백용 박스 */}
                    <div className="col-span-12 md:h-20 h-10" />

                </div>
                {/* 페이지소개? */}
                <div className="bg-[#00bfa1]">
                    <p className="text-center text-xl text-[#fbfbfb] whitespace-nowrap p-4">
                        Copyright © 2023 eyecon
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Intro05