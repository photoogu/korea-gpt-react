import React, { useState } from 'react';

function App5myself(props) {
    /**룰루랄라 문제당 어흑흑 동기 비동기 보고있었는데 ㅠㅠㅠ
     * 회원 정보를 입력받아 userList 에 user객체들을 가입하기 버튼을 누를 때마다 저장한다.
     * 로그인 정보를 입력받아 userList에 해당 username이 있는지 확인하고
     * 없으면 '사용자 정보를 다시 확인하세요.' 메세지 출력(alert)
     * 있으면 비밀번호가 일치하는지 검사
     * 비밀번호가 일치하지 않으면 '사용자 정보를 다시 확인하세요.' 메세지 출력(alert)
     * 일치하면 이름(이메일)님 환영합니다. 출력(alert)
     */

    const [ userList, setUserList ] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    });

    const [ userResisterInput, setUserResisterInput ] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    })

    const [ userInfoInput, setUserInfoInput ] = useState({
        username: "",
        password: "",
    });

    const handleResisterInputOnChange = (e) => {
        const { name, value } = e.target;
        setUserResisterInput({
            ...userResisterInput,
            [name]: value,
        });
    };

    const handleResisterOnClick = () => {
        setUserList({
            ...userList,
            username: userResisterInput.username,
            password: userResisterInput.password,
            name: userResisterInput.name,
            email: userResisterInput.email,
        });
        setUserResisterInput({
            username:"",
            password:"",
            name:"",
            email:"",
        })
    };

    const handleLogInInputOnChange = (e) => {
        const { name, value } = e.target;
        setUserInfoInput({
            ...userInfoInput,
            [name]: value,
        });
    };

    const handleLogInOnClick = () => {
        const inputCheck = userList.username === userInfoInput.username && userList.password === userInfoInput.password;
        const user = {
            username: inputCheck ? userInfoInput.username : "",
            password: inputCheck ? userInfoInput.password : "",
            name: inputCheck ? userList.name : "",
            email: inputCheck ? userList.email : "",
        }

        if(user.username !== "" && user.password !== "") {
            alert(`${user.name}(${user.email})님 환영합니다.`);
        } else {
            alert('사용자 정보를 다시 확인하세요.');
        }
        setUserInfoInput({
            username: "",
            password: "",
        });
    };

    return (
        <div>
            <h1>회원가입</h1>
            <input type="text" name='username' onChange={handleResisterInputOnChange} placeholder='username' value={userResisterInput.username} />
            <input type="password" name='password' onChange={handleResisterInputOnChange} placeholder='password' value={userResisterInput.password} />
            <input type="text" name='name' onChange={handleResisterInputOnChange} placeholder='name' value={userResisterInput.name} />
            <input type="text" name='email' onChange={handleResisterInputOnChange} placeholder='email' value={userResisterInput.email} />
            <div>
                <button onClick={handleResisterOnClick}>가입하기</button>
            </div>
            <h1>로그인</h1>
            <input type="text" name='username' onChange={handleLogInInputOnChange} placeholder='username' value={userInfoInput.username} />
            <input type="password" name='password' onChange={handleLogInInputOnChange} placeholder='password' value={userInfoInput.password} />
            <div>
                <button onClick={handleLogInOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default App5myself;