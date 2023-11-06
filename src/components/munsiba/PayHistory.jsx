import React, { useState } from 'react';

const PayHistory = ({ paymentHistory, itemsPerPage }) => {
  // 상태 변수로 현재 페이지 번호를 관리합니다. 초기값은 1입니다.
  const [currentPage, setCurrentPage] = useState(1);

  // 전체 페이지 수를 계산합니다.
  const totalPages = Math.ceil(paymentHistory.length / itemsPerPage);

  // 현재 페이지에 해당하는 결제 내역을 추출합니다.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPayments = paymentHistory.slice(startIndex, endIndex);

  // 페이지 번호를 클릭할 때 호출되는 함수를 정의합니다.
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 빈칸으로 버튼 위치 고정 시키는 위한 틀?
  const remainingPayments = itemsPerPage - currentPayments.length;
  if (remainingPayments > 0 && currentPage === totalPages) {
    for (let i = 0; i < remainingPayments; i++) {
      currentPayments.push({
        date: '',
        time: ' ',
        coinId: -1, // 빈 결제 내역을 식별하기 위한 값 (실제 결제 내역과 중복되지 않는 값)
        coin: <p className="text-transparent pointer-events-none user-select-none">-</p>,
        price: ' ',
        finance: ' ',
      });
    }
  }

  return (
    <div className="font-Pretendard text-center container grid grid-cols-12 p-3 gap-4">
      {/* 여백용 박스 */}
      <div className="col-span-12 p-3" />

      {/* 타이틀 */}
      <h2 className="text-2xl font-semibold mb-4 col-span-12">결제 내역</h2>

      {/* 여백용 박스 */}
      <div className='col-span-1' />

      {/* 내역박스 */}
      <div className='col-span-10 grid grid-cols-12 gap-3'>
        <hr className="col-span-12 my-4" />
        <div className="col-span-6 md:col-span-2">날짜</div>
        <div className="col-span-6 md:col-span-2">시간</div>
        <div className="col-span-12 md:col-span-2">상품명</div>
        <div className="col-span-4 md:col-span-2">코인 개수</div>
        <div className="col-span-4 md:col-span-2">금액</div>
        <div className="col-span-4 md:col-span-2">결제 방식</div>
        <hr className="col-span-12 my-4" />

        {/* Map함수 */}
        {currentPayments.map((payment, index) => (
          <>
            <div key={index} className="dark:text-white text-gray-500 col-span-6 md:col-span-2">{payment.date}</div>
            <div className="dark:text-white text-gray-500 col-span-6 md:col-span-2">{payment.time}</div>

            {/* 코인 서비스에 대한 이름? 타이틀? */}
            <div className="dark:text-white text-gray-600 col-span-12 md:col-span-2">{payment.coinId === 0 ? "BASIC" : payment.coinId === 1 ? "PREMIUM" : payment.coinId === 2 ? "PRO" : ""}</div>
            <div className=" dark:text-white text-gray-600 col-span-4 md:col-span-2">{payment.coin}</div>
            <div className="dark:text-white text-gray-600 col-span-4 md:col-span-2">{payment.price}</div>
            <div className="dark:text-white text-gray-600 col-span-4 md:col-span-2">{payment.finance}</div>
            <hr className="dark:text-white col-span-12 my-4" />
          </>
        ))}
      </div>

      {/* 페이지네이션 컴포넌트를 추가합니다. */}
      {/* 여기서 페이지 버튼 생성 코드*/}
      <div className="col-span-12 my-4 ">
        <ul className="flex justify-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`mx-1 cursor-pointer ${currentPage === i + 1 ? 'dark:text-green-400 text-blue-500 font-bold' : 'dark:text-white text-gray-500'
                }`}
              onClick={() => handlePageClick(i + 1)}
            >
              {i + 1}
            </li>
          ))}
        </ul>
      </div>

      {/* 여백용 박스 */}
      <div className='col-span-1' />
    </div>
  );
};

export default PayHistory;
