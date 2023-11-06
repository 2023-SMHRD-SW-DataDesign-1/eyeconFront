import React, { useState } from "react";



/* 마이페이지 내 내 가게관리 컴포넌트 */

const MyPageList = () => {

  // 내 가게 임시 데이터 
  const [myPageList, setMyPageList] = useState([
    {
      index: 0,
      storeName: "아이콘 편의점",
      category: "편의점",
      place1: "광주광역시 동구 충장로 1가",
      place2: "102번지 1층",
    },
  ]);


  // 내가게 삭제 버튼
  const handleDelete = (id) => {
    const updatedList = myPageList.filter((item) => item.id !== id);
    setMyPageList(updatedList);
  };



  return (
    <div className="">
      {myPageList.map((item) => (
        <div
          key={item.index}
          className="col-span-1 p-5 mt-3 bg-white rounded-lg filter drop-shadow-lg"
        >
          <p className="font-bold text-xl">{item.storeName}</p>
          <div />
          <div className="col-span-3 p-3">
            <p className="font-bold">업종 분류</p>
            <p className="mt-1">{item.category}</p>

            <div className="col-span-4">
              <p className="col-span-1 mt-3 mb-1 font-bold">매장 주소</p>
              <p className="col-span-1 mb-1">
                {item.place1}
                {item.piace2}
              </p>
            </div>

            <button
              onClick={() => handleDelete(item.id)}
              className="absolute right-5 top-4"
            >
              <img src="https://i.ibb.co/r5HV0bW/x.png" alt="Delete" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPageList;
