import React, { useContext, useEffect, useState } from 'react';
import { TokenRefresherContext } from '../../context/TokenRefresherContext';
import axios from 'axios';

const ResultMain = ({ onImageMove }) => {
    const [fileOrderList, setfileOrderList] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedStore, setSelectedStore] = useState(null);

    // 결과데이터
    const [resultList, setResultList] = useState([]);
    // 가게데이터
    const [storeList, setStoreList] = useState([]);

    // 테스트용
    // useEffect(() => {
    //     const testStore = [
    //         { id: 1, storeName: 'SMHRD편의점' },
    //         { id: 2, storeName: 'SMHRD마트' },
    //         { id: 3, storeName: 'SMHRD편의점 2호' }
    //     ];
    //     const testResult = [
    //         { id: 1, data: "2023-11-02", beforeimg: 'https://i.ibb.co/n1prKVV/20160305-192947.jpg', hitmap: 'https://i.ibb.co/61WLv05/image.jpg', content: 'SMHRD편의점 결과 내용 1번 입니다.', storeName: 'SMHRD편의점' },
    //         { id: 2, data: "2023-11-03", beforeimg: '', hitmap: '', content: 'SMHRD마트 결과 내용 2번 입니다.', storeName: 'SMHRD마트' },
    //         { id: 3, data: "2023-11-04", beforeimg: '', hitmap: '', content: 'SMHRD편의점 2호 결과 내용 3번 입니다.', storeName: 'SMHRD편의점 2호' }
    //     ];
    //     setStoreList(testStore);
    //     setResultList(testResult);
    // }, []);


    // 백엔드 함수 가져오기 함수? 2개 받아와짐?
    // url 주소
    const url = process.env.REACT_APP_MASTER_URL;
    axios.defaults.withCredentials = true;
    const TokenRefresher = useContext(TokenRefresherContext);
    useEffect(() => {
        try {
            const response = TokenRefresher.get(`${url}/flask/printImg`)
                .then((response) => {
                    setResultList(response.data);
                    console.log('결과 리스트: ', resultList);
                    // setStoreList(response.data.storeData);
                })
                .catch((error) => {
                    console.error('결과데이터 가져오기 실패:', error);
                });

        } catch (error) {
            console.error("에러 내용:", error);
        }
    }, []);

    // 드롭다운의 항목(가게 리스트)
    const handleSelect = (storeName) => {
        setSelectedStore(storeName);
        setIsOpen(false);
    };

    // 최신순, 오래된순 변경 함수
    const togglefileOrderList = () => {
        setfileOrderList(!fileOrderList);
        setResultList([...resultList].reverse());
    };

    // 가게 필터링 삼항 연산자
    const filteredResultList = selectedStore
        ? resultList.filter((item) => item.storeName === selectedStore)
        : resultList;

    // 이미지 정보 전달 하기!
    const handleImageMove = (beforeimg, hitmap) => {
        console.log(beforeimg)
        console.log(hitmap)
        onImageMove(beforeimg, hitmap);
    };


    return (
        <div className="dark:bg-gray-800 flex flex-col items-center font-Pretendard">
            <div className="w-[90%] md:w-[70%] md:h-[95%] rounded-2xl" style={{ background: "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)", boxShadow: "0px 4px 50px 0 rgba(190,190,190,0.47)" }}>

                {/* 시선 분석 헤더 박스 */}
                <div className='grid grid-cols-12 mb-3'>
                    {/* 타이틀 */}
                    <p className="col-span-12 text-center text-2xl font-bold mt-5">시선 분석 결과</p>

                    {/* 가게 드롭 박스 */}
                    <div className="col-start-1 col-end-9 md:col-start-2 md:col-end-4 relative">
                        <button
                            className="text-center w-[50%] md:w-[70%] bg-[#46cfb9] border border-[#46cfb9] rounded-[10px] p-2"
                            style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.43)", color: "white" }}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {selectedStore || '내 가게 선택 ↓'}
                        </button>
                        {isOpen && (
                            <div className="text-center absolute w-[70%] bg-white border border-gray-300 rounded-md mt-1">
                                <div
                                    key="showAll"
                                    className={`p-2 hover:bg-gray-100 cursor-pointer ${!selectedStore ? 'bg-gray-100' : ''}`}
                                    onClick={() => {
                                        setSelectedStore(null);
                                        setIsOpen(false);
                                    }}
                                >
                                    모두 표시
                                </div>

                                {/* 스토어 이름 불러오는 map함수 */}
                                {/* {storeList.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`p-2 hover:bg-gray-100 cursor-pointer ${selectedStore === item.storeName ? 'bg-gray-100' : ''}`}
                                        onClick={() => handleSelect(item.storeName)}
                                    >
                                        {item.storeName}
                                    </div>
                                ))} */}
                            </div>
                        )}
                    </div>

                    {/* 최신순 오래된순 변경용*/}
                    <div className="font-Pretendard col-start-9 col-end-13 md:col-start-10 md:col-end-12">
                        <p className='text-right p-2 cursor-pointer select-none' onClick={togglefileOrderList}>
                            {fileOrderList ? '↓ 최신순' : '↑ 오래된순'}
                        </p>
                    </div>
                </div>
                {/* 시선분석 결과 헤더 박스 끝 */}


                {/* 결과 파일 맵함수 */}
                {filteredResultList.map((item, index) => (
                    <div key={index} className='grid grid-cols-12 mb-5'>
                        <div className="rounded-2xl col-start-2 col-end-12 grid grid-cols-12 gap-3 p-3 bg-white" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>

                            {/* 일자 표시 */}
                            <div className="col-span-12 ml-20 text-xl font-bold  text-[#535353]"> {item.date} </div>

                            {/* 업로드 사진 */}
                            <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-7 border border-gray-200 rounded-2xl mr-0 md:mr-5" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
                                <div className="w-full flex justify-center items-center ">
                                    <div className="h-80 w-full overflow-hidden rounded-t-2xl">
                                        <img
                                            src={item.beforeimg}
                                            alt="테스트"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex justify-between items-center p-3">
                                    <span className="text-xl font-bold p-1">시선분석 전</span>
                                    <a href={item.beforeimg} download="image.jpg">
                                        <button className="rounded-3xl border-[2px] border-[#19ab93] p-2 text-sm font-bold transition duration-300 hover:scale-110">Download ↓</button>
                                    </a>
                                </div>
                                <div className="w-full p-3">
                                    시선 분석 전 매대 사진입니다.<br />
                                    다운로드를 원하시면 상단의 버튼을 눌러주세요.
                                </div>
                            </div>

                            {/* 히트맵 사진 */}
                            <div className="col-start-1 col-end-13 md:col-start-7 md:col-end-12 border border-gray-200 rounded-2xl ml-1 md:ml-5" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
                                <div className="w-full flex justify-center items-center">
                                    <div className="h-80 w-full overflow-hidden rounded-t-2xl">
                                        <img
                                            src={item.hitmap}
                                            alt="테스트"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex justify-between items-center p-3">
                                    <span className="text-xl font-bold">시선분석 후</span>
                                    <a href={item.hitmap} download="image.jpg">
                                        <button className="rounded-3xl border-[2px] border-[#19ab93] p-2 text-sm font-bold transition duration-300 hover:scale-110">Download ↓</button>
                                    </a>
                                </div>
                                <div className="w-full p-3 text-base">
                                    시선 분석 후 매대 사진입니다.<br/>
                                    빨간색이 분포된 곳이 고객들의 시선이 많이 <br/>머무는 곳입니다.
                                    
                                    
                                </div>
                            </div>

                            {/* 가져온 내용 박스 */}
                            <div className="col-start-2 col-end-12 text-[#313131]">
                                {item.content}
                            </div>

                            {/* 상품 배치 하기 버튼 */}
                            <button className="transition duration-300 hover:bg-[#1DB59C] font-bold text-white col-start-2 col-end-12 bg-[#46cfb9] p-3 rounded-2xl mb-3 md:block hidden"
                                onClick={() => handleImageMove(item.beforeimg, item.hitmap)}
                            >
                                {/* list 페이지 이동 */}
                                가상 상품 배치 하기<img className="  inline-block ml-2 w-4" src="https://i.ibb.co/0Cbr629/icon-arrow-right-1.png" />

                            </button>

                        </div>
                    </div>
                ))}
            </div>




        </div>
    );
}

export default ResultMain;
