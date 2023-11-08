import { useEffect, useState } from 'react';
import axios from 'axios';

const useChat = (initialMessage) => {

  // 채팅창 사용자 입력 내용
  const [inputValue, setInputValue] = useState('');

  // 서버 데이터 도착 확인용
  const [waitingForResponse, setWaitingForResponse] = useState(false);

  // 메세지 내용
  const [messages, setMessages] = useState([]);

  // 초기화 여부
  const [initialized, setInitialized] = useState(false);

  // 컴포넌트가 처음 렌더링될 때와 initialMessage(사용자 입력 메세지)이 변경될 때 초기화 수행
  useEffect(() => {
    if (!initialized) {
      if (initialMessage) {
        setMessages(initialMessage);
      }
      setInitialized(true);
    }
  }, [initialized, initialMessage]);

  // 사용자가 메세지를 제출했을 때 호출되는 함수
  const chatHandleSubmit = async () => {
    // 현재 사용자가 입력한 메시지 저장
    const newMessage = { content: inputValue, isMine: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue('');

    // 로딩 중 표시
    const loadingMessage = {
      content: '로딩중...',
      isMine: false,
    };

    // 기존 메세지(서버 전송용) 저장하고 새로운 메세지(로딩중)으로 추가
    setMessages((prevMessages) => [...prevMessages, loadingMessage]);

    // 서버 응답 대기 true로 지정 의존성 배열(dependency array)에 사용
    setWaitingForResponse(true);

    axios.defaults.withCredentials = false;
    try {
      // 서버로 메시지를 보냅니다.
      const response = await axios.post(`https://3.36.133.196:5000/consult`, {
        'role': 'user',
        content: inputValue, // 메시지 내용을 서버로 보냅니다.
      });

      // 서버 응답 데이터를 가져옵니다.
      const serverResponse = response.data.choices?.[0]?.message;

      const serverMessage = {
        content: serverResponse?.content,
        isMine: false,
      };

      // 서버 응답을 받으면 "로딩 중..." 메시지를 삭제
      setMessages((prevMessages) => prevMessages.filter((message) => message !== loadingMessage));

      // 서버 응답 성공으로 false로 저장 의존성 배열(dependency array)에 사용
      setWaitingForResponse(false);

      // 서버 응답을 메세지로 추가
      setMessages((prevMessages) => [...prevMessages, serverMessage]);

    } catch (error) {
      console.error('메시지 전송 중 오류 발생:', error);

      // 오류가 발생하면 "로딩 중..." 메시지를 삭제
      setMessages((prevMessages) => prevMessages.filter((message) => message !== loadingMessage));
      console.log("서버 응답에 실패했습니다.")

      // 서버 응답 실패으로 false로 저장 의존성 배열(dependency array)에 사용
      setWaitingForResponse(false);
    }

    // 입력 필드를 초기화합니다.
    setInputValue('');
  };

  return {
    inputValue,
    setInputValue,
    waitingForResponse,
    messages,
    chatHandleSubmit,
  };
}

export default useChat;
