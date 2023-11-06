import React, { useEffect } from 'react';
import Lottie from 'react-lottie-player'
import Header from "../HeaderAfter";
import lottieJson from '../../lottie/coineffect.json';
import lottieJson2 from '../../lottie/progress.json';
import useGetCoin from "../../hook/mainPage/useGetCoin";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";




const CoinCheck = () => {


    // localStorage에서 가져온 코인 수
    const storedCoins = localStorage.getItem('coinsData');
    const coins = JSON.parse(storedCoins);

    const remainingCoins = coins


    const location = useLocation();
    const navigate = useNavigate();

    const coinmoney = location.state?.coinCount || 0; // 기본값 0으로 설정
    const coinCount = location.state?.coinCnt || 0; // 기본값 0으로 설정

    // 서버에서 코인 가져오는 함수
    const GetCoin = useGetCoin();

    useEffect(() => {

        const fetchCoinInfo = async () => {
            await GetCoin("");
        };

        fetchCoinInfo();

        // 4초 후에 main 페이지로 이동
        const timeoutId = setTimeout(() => {
            navigate('/main');
        }, 4000);

        // 컴포넌트가 언마운트 될 때 타임아웃 클리어
        return () => {
            clearTimeout(timeoutId);
        };
    }, [GetCoin, navigate]);

    return (
        <div>
            <Header />
            <div className="font-Pretendard flex flex-col justify-center items-center">
                <div className="hidden md:block"><br /><br /><br /><br /><br /></div>
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    option={{ speed: 0.1 }}
                    style={{ width: "100%", maxWidth: "300px" }}
                    className="mb-10 animate-bounce2"
                />



                <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">코인 {coinCount}개 충전 완료</h5>
                    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">코인이 충전되었습니다. 잠시 후 메인 화면으로 이동합니다.</p>
                    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div className="w-full sm:w-auto  bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-6 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <div className="text-left">
                                <div className="mb-1 text-sm">현재 잔여코인</div>
                                <div className="-mt-1 font-sans text-sm font-semibold text-center">{remainingCoins}개</div>
                            </div>
                        </div>

                        {/* 메인이동 버튼 */}
                        <Link to="/main">
                            <div className="w-full sm:w-auto  bg-[#0BB79B] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-12 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <div className="text-left">
                                    <div className="mb-1 text-sm font-semibold">메인으로</div>
                                    <div className="-mt-1 font-sans text-sm font-semibold text-center">이동하기</div>
                                </div>
                            </div>
                        </Link>


                        {/* 충전금액 확인 버튼 버튼 */}
                        <div className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-8 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <div className="text-left">
                                <div className="mb-1 text-sm">충전 금액</div>
                                <div className="-mt-1 font-sans text-sm font-semibold text-center">{coinmoney}원</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Lottie
                            loop
                            animationData={lottieJson2}
                            play
                            option={{ speed: 0.1 }}
                            style={{ width: "100%", maxWidth: "400px" }}
                            className="mb-10"
                        />
                    </div>
                </div>
            </div>


        </div>

    );
};


export default CoinCheck