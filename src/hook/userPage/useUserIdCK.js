import { useEffect, useState } from 'react';
import axios from 'axios';

const useUserIdCK = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = async () => {
    const emailInput = document.querySelector('input[name="email"]');
    const email = emailInput.value;
    const url = process.env.REACT_APP_MASTER_URL;

    // 유효성 검사 조건식
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
      // 이메일이 비어있는 경우 오류 메시지 설정
      setErrorMessage('이메일을 입력하세요.');
    } else if (!emailPattern.test(email)) {
      // 이메일 형식이 올바르지 않은 경우 오류 메시지 설정
      setErrorMessage('올바른 이메일 형식이 아닙니다.');

    } else {
      //  post 방식
      try {
        console.log('이메일:', email);
        const user = { email: email }
        const response = await axios.post(`${url}/user/checkEmail`, user);
        console.log(response.data);
        // 중복으로 있으면 트루, 중복으로 없으면 펄스
        if (response.data === true) { // 중복이 있을 때 실행
          setErrorMessage("이미 사용 중인 이메일입니다.");
        } else { // 없을 때 실행
          setErrorMessage('');
        }
      } catch (error) {
        console.error("이메일 중복 확인 중 오류 발생:", error);
      }
    }
  };

  useEffect(() => {
    // 입력 필드에서 벗어날 때 validateEmail 함수 호출
    const emailInput = document.querySelector('input[name="email"]');
    emailInput.addEventListener('blur', validateEmail);
    return () => {
      emailInput.removeEventListener('blur', validateEmail);
    };
  }, []);

  return errorMessage;
};
export default useUserIdCK;
