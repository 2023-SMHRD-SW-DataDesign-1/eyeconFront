import { useContext } from 'react'
import { TokenRefresherContext } from '../../context/TokenRefresherContext';

const useUserUpdatePw = (PWErrorMessage, PWMErrorMessage) => {
    const TokenRefresher = useContext(TokenRefresherContext);

    const updatePwFunc = (pwRef1, pwRef2) => {
        // 유효성검사 통과시 진행
        if (PWErrorMessage !== "" || PWMErrorMessage !== "") {
            alert("올바르게 입력해주세요");
            return
        } else {
            const updatePw = pwRef1.current.value;
            console.log("updatePw : ", updatePw);

            // 백엔드 전송용 코드
            const updatePassword = async () => {
                const res = await TokenRefresher.post("/user/updatePw", { pw: updatePw })
                if (res.status === 200) {
                    alert("비밀번호 변경 완료");
                    pwRef1.current.value = '';
                    pwRef2.current.value = '';
                }
            }
            updatePassword();
        }
    }
    return { updatePwFunc }
}
export default useUserUpdatePw
