import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage'
import Join from './components/Join'
import Pay from './components/Pay'
import Login from './components/Login'
import Place from './methodes/Place'
import './index.css';
import MainPageAfter from './components/MainPageAfter';
import ResultPage from './components/ResultPage';
import MainPageAfterPay from './components/MainPageAfterPay';
import MyPage from './components/MyPage';
import { TokenRefresherContext } from './context/TokenRefresherContext';
import TokenRefresher from './hook/userPage/TokenRefresher';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setAccessCK } from './store/accessCKSlice';
import store from './store';
import { AddressContext } from './context/AddressContext';
import { useState } from 'react';
import CoinCheck from './components/payPage/CoinCheck';
import Test from './components/testPage/Test';
import ProductTest from './components/testPage/ProductTest';

function App() {

  // 로그인 상태 확인 & 코인 상태 확인
  const loginCKData = useSelector((state) => state.accessCK);
  const storedCoins = localStorage.getItem('coinsData');
  const dispatch = useDispatch();
  if (loginCKData !== 'Exist') {
    if (storedCoins !== null) {
      dispatch(setAccessCK('Exist'));
    }
  }
  //console.log("현재 리덕스 값",loginCKData)

  const [company, setCompany] = useState({})
  // postContext에 담길 데이터  
  const inAddressContext = {
    // 주소
    company: company,
    setCompany: setCompany
  }

  return (
    <div className="App">
      <Provider store={store}>
        <TokenRefresherContext.Provider value={TokenRefresher}>
          <AddressContext.Provider value={inAddressContext}>
            <Routes>
              {/* 기본적으로 접근 가능한 페이지 */}
              <Route path="/" element={<MainPage />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/place" element={<Place />} />
              <Route path="/coincheck" element={<CoinCheck />} />

              {loginCKData === 'Exist' ? (
                <>
                  {/* 로그인 정보 있을 경우 접근 가능 */}
                  <Route path="/join" element={<MainPage />} />
                  <Route path="/login" element={<MainPage />} />
                  <Route path="/result" element={<ResultPage />} />
                  <Route path="/main" element={<MainPageAfter />} />
                  <Route path="/mainpay" element={<MainPageAfterPay />} />
                  <Route path="/mypage" element={<MyPage />} />
                  <Route path="/test" element={<Test />} />
                  <Route path="/producttest" element={<ProductTest />} />

                </>
              ) :
                <>
                  {/* 로그인 정보 없을 경우 접근 불가능 로그인 페이지로 우회 */}
                  <Route path="/join" element={<Join />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/result" element={<Login />} />
                  <Route path="/main" element={<Login />} />
                  <Route path="/mainpay" element={<Login />} />
                  <Route path="/mypage" element={<Login />} />



                </>
              }
            </Routes>
          </AddressContext.Provider>
        </TokenRefresherContext.Provider>
      </Provider>

    </div>
  );
}

export default App;
