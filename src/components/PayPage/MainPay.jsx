import React, { useContext, useEffect, useState } from "react";
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/transaction.json';

import { TokenRefresherContext } from '../../context/TokenRefresherContext';
import usePayment from '../../hook/userPage/usePayment';
import DarkOverlay from "../../hook/userPage/useDarkOverlay";


const MainPay = () => {
    /* 검정 백그라운드 */
    const [showOverlay, setShowOverlay] = useState(false);

    const TokenRefresher = useContext(TokenRefresherContext);
    const [coinList, setCoinList] = useState([]);
    // usePayment.js의 requestPay함수 불러오기
    const { requestPay } = usePayment();

    useEffect(() => {
        // db에 있는 코인 상품들 불러오기
        /* 아진짜 타이밍 어떻게 잡지 */
        setShowOverlay(true);
        const fetchData = async () => {
            setShowOverlay(false);
            const res = await TokenRefresher.get("/coin");
            
            // console.log('====================================');
            // console.log(res.data);
            // console.log('====================================');
            setCoinList(res.data);
        };
        
        
        fetchData();
        
        
  

    }, [TokenRefresher]);


    const image1 = "https://i.ibb.co/zbHnGYX/icon.png";
    const image2 = "https://i.ibb.co/M5rqSD4/icon-1.png";

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
            {showOverlay && <DarkOverlay />}

            {/* 나중에 글씨 폰트 디자인 넣을것 */}
            <div className="flex flex-col items-center justify-center text-center font-Pretendard ">
                <img
                    src="https://i.ibb.co/BKYsFcQ/image.png"
                    alt="content-inside"
                    className="mx-auto mt-8 hidden sm:block"
                />
                <div className="md:hidden">
                    <Transaction />
                </div>
                <br />
                <p className="text-2xl font-bold text-[#001D6C] ">Pricing</p>
                <p className="text-4xl font-bold">서비스 플랜</p>
                <br />
                <p>eyecon은 소비자의 데이터를 정밀하게 분석해 매대의 시선 배치를 정확히 분석합니다. <br />
                    효과적인 마케팅 방법을 고민 중인 소매업자를 위한 다양한 플랜이 준비되어 있습니다.</p>
            </div>


            <div className="container mx-auto grid grid-cols-11 p-3 max-w-screen-xl">

                {/* 여백용박스 */}
                <div className="col-span-0 md:col-span-1" />

                {/* 첫번째 박스 */}
                <div className="col-span-11 md:col-span-3 p-3">
                    <div className="group rounded-lg border border-[#d9d9d9] p-5 hover:bg-[#15c3a7] bg-[#FFFFFF] bg-opacity-10">
                        <div className="inline-block rounded-lg border border-[#5d6a85]">
                            <p className="font-semibold text-left uppercase text-black px-3">
                                BASIC
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold p-3">￦{coinList[0] && coinList[0].price}</p>
                        </div>
                        <div>
                            <p className="text-xm p-3">
                                <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
                                <img className="inline-block  group-hover:hidden" src={image1} alt="image1" />  {coinList[0] && coinList[0].coinCnt} Coins
                            </p>
                            <p className="text-xm p-3">
                                <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
                                <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> 10 Shares
                            </p>
                            <p className="text-xm p-3">
                                <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
                                <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> Custom Domains
                            </p>
                        </div>
                        <button className="p-3 px-4 py-1.5 rounded-[20px] bg-transparent border border-white hover:bg-white ">
                            <span className="text-xs text-center text-[#020202]" onClick={() => {
                                requestPay(coinList[0].price, coinList[0].coinName, coinList[0].coinCnt)
                            }} >
                                Start today</span>
                        </button>
                    </div>
                </div>


                {/* 두번쨰 박스 */}
                <div className="col-span-11 md:col-span-3 p-3">
                    <div className="group rounded-lg border border-[#d9d9d9] p-5 hover:bg-[#15c3a7] bg-[#FFFFFF] bg-opacity-10">
                        {/* 두번째 박스 */}

                        <div className="inline-block rounded-lg border border-[#5d6a85]">
                            <p className="font-semibold text-left uppercase text-black px-3">
                                premium
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold p-3">￦{coinList[1] && coinList[1].price}</p>
                        </div>
                        <div>
                            <p className="text-xm p-3">
                                <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
                                <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> {coinList[1] && coinList[1].coinCnt} Coins
                            </p>
                            <p className="text-xm p-3">
                                <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
                                <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> 125 Shares
                            </p>
                            <p className="text-xm p-3">
                                <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
                                <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> Analytics
                            </p>
                        </div>
                        <button className="p-3 px-4 py-1.5 rounded-[20px] bg-transparent border border-white hover:bg-white">
                            <span className="text-xs text-center text-[#020202]" onClick={() => {
                                requestPay(coinList[1].price, coinList[1].coinName, coinList[1].coinCnt)
                            }}>
                                Start today</span>
                        </button>
                    </div>
                </div>


                {/* 세번째 박스 */}
                <div className="col-span-11 md:col-span-3 p-3">
                    <div className="group rounded-lg border border-[#d9d9d9] p-5 hover:bg-[#15c3a7] bg-[#FFFFFF] bg-opacity-10">
                        <div className="inline-block rounded-lg border border-[#5d6a85]">
                            <p className="font-semibold text-left uppercase text-black px-3">
                                PRO
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold p-3">￦{coinList[2] && coinList[2].price}</p>
                        </div>
                        <div>
                            <p className="text-xm p-3">
                                <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
                                <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> {coinList[2] && coinList[2].coinCnt} Coins
                            </p>
                            <p className="text-xm p-3">
                                <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
                                <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> Unlimited
                            </p>
                            <p className="text-xm p-3">
                                <img className="hidden  group-hover:inline-block" src={image2} alt="image2" />
                                <img className="inline-block  group-hover:hidden" src={image1} alt="image1" /> Custom Brand
                            </p>
                        </div>
                        <button className="p-3 px-4 py-1.5 rounded-[20px] bg-transparent border border-white hover:bg-white">
                            <span className="text-xs text-center text-[#020202]" onClick={() => {
                                requestPay(coinList[2].price, coinList[2].coinName, coinList[2].coinCnt)
                            }}>
                                Start today</span>
                        </button>
                    </div>
                </div>

                {/* 여백용박스 */}
                <div className="col-span-0 md:col-span-1" />

            </div>
        </div>

    )
}

export default MainPay