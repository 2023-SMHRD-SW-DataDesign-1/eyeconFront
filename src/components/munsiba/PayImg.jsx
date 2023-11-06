import React from "react";
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/transaction.json';


const img = () => {

    function Transaction() {
        return (
            <Lottie
                loop
                animationData={lottieJson}
                play
                option={{ speed: 0.8 }}
                style={{ width: '100%', maxWidth: '200px' }}
            />
        );
    }



    return (
        <div>
            <div className="w-64 md:w-auto dark:text-[#F2F2F2]">
            <div className="h-[150px] bg-white dark:bg-gray-800"/>
                <img
                    src="https://i.ibb.co/TBpkqFb/price.png"
                    alt="pay1"
                    className="h-auto pointer-events-none"
                />
            </div>

            <div className="container mx-auto grid grid-cols-12 max-w-screen-xl font-Pretendard dark:text-[#F2F2F2]">
                <div className="col-span-12 md:col-span-5">
                    {/* 첫번째 줄 내용 겹치는 박스 */}
                    <div className="box md:absolute md:top-60 relative p-6 sm:p-3 md:p-5">
                        <p className="text-4xl md:text-7xl font-bold">REASONABLE<br />
                            GOOD<br />
                            PRICE</p>
                    </div>
                </div>

                <div className="col-span-7 md:col-span-7 md:ml-0 ml-40">
                  <Transaction/>
                </div>

                {/* 나중에 글씨 폰트 디자인 넣을것 */}
                <div className="col-span-12 md:col-span-5 dark:text-[#F2F2F2]" />
                <div className="col-span-12 md:col-span-2 text-center">
                <br />
                    <p className="text-2xl font-bold text-[#001D6C]">Pricing</p>
                    <p className="text-4xl font-bold">서비스 플랜</p>
                    <br />
                </div>
                <div className="col-span-12 md:col-span-5" />
            </div>
        </div>
    )
}

export default img