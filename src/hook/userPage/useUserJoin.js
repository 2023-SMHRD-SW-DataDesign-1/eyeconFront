import { useRef } from 'react';


const useUserJoin = () => {
  const formRef = useRef(null);
const url = process.env.REACT_APP_MASTER_URL
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get('email');
    const password = formData.get('password');
    const category = formData.get('category');
    const storeName = formData.get('storeName');
    const place1 = formData.get('place1');
    const place2 = formData.get('place2');


    // 확인용 콘솔log
    // console.log(email);
    // console.log(password);
    // console.log(category);
    // console.log(storeName);
    // console.log(place1);
    // console.log(place2);



    // axios.post(`${url}:`, {
    
    // // 객체 만들기
    
    
    
    // }, [, config])



    // json 묶는  로직 + axios 방식
    // 여기서 DB확인용 로직 작성하면 될듯? ^^
  };

  return { formRef, handleSubmit };
};

export default useUserJoin;
