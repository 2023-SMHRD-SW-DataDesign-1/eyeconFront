import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import DarkModeSwitch from "./mainPage/darkMode/DarkModeToggle";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import useUserLogin from "../hook/userPage/useUserLogin";
import { setAccessCK } from "../store/accessCKSlice";

function Header() {

  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useUserLogin()

  // 로그인 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginCKData = useSelector((state) => state.accessCK);



  // console.log("리덕스에 저장된 값", loginCKData)
  // 리덕스 값 테스트용 
  useEffect(() => {

    if (loginCKData === "Exist") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [loginCKData]); // loginCKData가 변경될 때만 실행



  // 로그아웃
  const url = process.env.REACT_APP_MASTER_URL;
  async function goLogout() {
    await axios.post(`${url}/auth/logout`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setAccessCK(null));
    setIsLoggedIn(false)
    // 로컬 스토리지 클리어
    localStorage.removeItem('coinsData');
    localStorage.removeItem('resultImageData');
  }

  return (
    <div>
      <header className="shadow-sm dark:bg-gray-800 fixed top-0 z-50 w-full bg-white p-5 text-white font-Pretendard  ">
        <nav>
          <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl ">
            {/* 로고 */}
            <div className="col-span-10 md:col-span-2 flex items-center">
              <Link to="/#" className="flex items-center">
                <img
                  src="https://i.ibb.co/HrC0TWJ/Group-6348.png"
                  className="w-[140px] h-[54px] dark:hidden "
                  alt="logo"
                />
                <img src="https://i.ibb.co/dKwGbXx/Kakao-Talk-20231026-151815812.png"
                  className="w-[120px] h-[44px] hidden dark:block"
                  alt="logo2" />
              </Link>
            </div>

            {/* 메뉴바 */}
            <div className="col-span-4 flex items-center hidden md:flex ">
              <Link to="/#" className="text-black hover:underline dark:text-[#F2F2F2]">
                About
              </Link>
              <Link to="/pay" className="ml-4 text-black hover:underline dark:text-[#F2F2F2]">
                Pricing
              </Link>

              {/* 추가 버튼 시 "ml-4" 넣기 */}
            </div>

            {/* 서비스 시작 버튼 & 회원 가입 */}
            <div className="col-span-6 flex items-center justify-end hidden md:flex">
              <div className="flex flex-wrap">
                <DarkModeSwitch />
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/main"
                      className="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 bg-white border border-[#d9dbe9] rounded-[90px] h-[52px] flex items-center justify-center mb-2 md:mb-0"
                    >
                      서비스 시작하기
                    </Link>
                    <Link
                      to="/"
                      className="flex items-center justify-center text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[52px] rounded-[90px] bg-[#15c3a7] border border-[#d9dbe9] mb-2 md:mb-0"
                      onClick={goLogout}
                    >
                      로그아웃
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 bg-white border border-[#d9dbe9] rounded-[90px] h-[52px] flex items-center justify-center mb-2 md:mb-0"
                    >
                      서비스 시작하기
                    </Link>
                    <Link
                      to="/join"
                      className="flex items-center justify-center text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[52px] rounded-[90px] bg-[#15c3a7] border border-[#d9dbe9] mb-2 md:mb-0"
                    >
                      회원가입
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* 모바일 화면시 나오는 햄버거 버튼 */}
            <div className="col-span-2 relative md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            {/* 모바일 메뉴 목록 */}
            <div>
              {menuOpen && (
                <div className="absolute justify-between items-center w-full lg:w-auto lg:order-1 md:hidden z-10">
                  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 font-light w-full">
                    <li
                      className="block py-2 pr-4 pl-3 px-2 text-white rounded bg-[#15c3a7] lg:bg-transparent lg:text-gray-600 lg:p-0 dark:text-white transition-transform hover:font-semibold hover:text-blue-500"
                      aria-current="page"
                    >
                      <Link to="/">About</Link>
                    </li>
                    <li
                      className="block py-2 pr-4 pl-3 px-2 text-white rounded bg-gray-400 lg:bg-transparent lg:text-gray-200 lg:p-0 dark:text-white transition-transform hover:font-semibold hover:text-blue-500"
                      aria-current="page"
                    >
                      <Link to="/pay">Pricing</Link>
                    </li>



                    {isLoggedIn ? (
                      <>
                        <Link
                          to="/main"
                          className="block py-2 pr-4 pl-3 px-2 text-white rounded bg-[#15c3a7] lg:bg-transparent lg:text-gray-600 lg:p-0 dark:text-white transition-transform hover:font-semibold hover:text-blue-500"
                        >
                          서비스 시작하기
                        </Link>
                        <Link
                          to="/"
                          className="block py-2 pr-4 pl-3 px-2 text-white rounded bg-gray-400 lg:bg-transparent lg:text-gray-200 lg:p-0 dark:text-white transition-transform hover:font-semibold hover:text-blue-500"
                          onClick={goLogout}
                        >
                          로그아웃
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block py-2 pr-4 pl-3 px-2 text-white rounded bg-[#15c3a7] lg:bg-transparent lg:text-gray-600 lg:p-0 dark:text-white transition-transform hover:font-semibold hover:text-blue-500"
                        >
                          서비스 시작하기
                        </Link>
                        <Link
                          to="/join"
                          className="block py-2 pr-4 pl-3 px-2 text-white rounded bg-gray-400 lg:bg-transparent lg:text-gray-200 lg:p-0 dark:text-white transition-transform hover:font-semibold hover:text-blue-500"
                        >
                          회원가입
                        </Link>
                      </>
                    )}




                  </ul>
                </div>
              )}
            </div>

          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
