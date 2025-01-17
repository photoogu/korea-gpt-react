import React, { useState } from 'react';

function App13(props) {
    const getUser = (username) => {
        const userList = [
            {
                username: "aaa",
                name: "김준일",
            },
            {
                username: "bbb",
                name: "김준이",
            },
            {
                username: "ccc",
                name: "김준삼",
            },
        ];
        return new Promise((resolve, reject) => {
            const foundUser = userList.find(user => user.username === username);
            if(!!foundUser){
                resolve(foundUser);
            }else {
                reject(new Error("사용자를 찾지 못함."));
            }
        });
    }

    const generateToken = (user) => {
        return new Promise((resolve, reject) => {
            if(!!user) {
                resolve("새로만든 토큰!");
            }else {
                reject(new Error("토큰 생성 실패!"));
            }
        });
    }

    const generateToken2 = async (user) => {
        if(!user) {
            throw new Error("토큰 생성 실패!");
        }
        return "새로만든 토큰!";
    }

    const [ username, setUserName ] = useState("");
    
    const handleUsernameOnChange = (e) => {
        setUserName(e.target.value);
    }

    const handleButtonOnClick = () => {
        // let user = null;
        // getUser(username)
        // .then(result => {
        //     user = result;
        // })
        // .catch(error => console.error(error));
        // generateToken(user)
        // .then(token => console.log(token));
        // 위의 코드는 어디가 문제일까?
        // getUser 호출하면 바로 then으로 넘어가지 않는다. 끝!
        // 그 후 then 이 아닌 generateToken으로 넘어가서 user에 user=result 가 아닌 null 값이 담긴다.
        // 그 후!! getUser.then 이 호출되어 user=result 로 할당된다.
        // 따라서 generateToken에는 user=null 이 들어가게 되어 에러가 발생한다.

        getUser(username)
        .then(user => {
            generateToken(user)
            .then(token => console.log(token));
        })
        .catch(error => console.error(error));
    }
    
    /**
     * async 키워드를 함수에 사용하면 return type 이 Promise 객체가 된다.
     * 
     * async 와 await 키워드 사용 조건
     * 1. await 은 async 함수 안에서만 사용가능.
     * 2. await 은 promise 를 return 하는 함수에만 사용가능.
     *      === Promise 객체 앞에 사용할 수 있다.
     * 
     * async 는 함수 앞에!
     * 이때, 화살표 함수는 () => {} 가 함수이므로 이 앞에 async 가 붙는다!
     * return 이 없으면 Promise<void>, return 이 있으면 해당 return 타입으로 <> 내의 타입이 정해진다(제네릭타입). 
     */

    // async function handleButtonOnClick2() {
    //     const result = await getUser(username);
    //     const token = await generateToken(result);
    // }
    const handleButtonOnClick2 = async () => {
        try { // reject, 즉 예외 처리는 try-catch 를 사용한다.
            const result = await getUser(username);
            console.log(result);
            // const token = generateToken(result);  >>  token 에 Promise 객체를 할당하게 됨
            const token = await generateToken2(result); // >> generateToken 에 result 를 전달한 resolve를 할당
            console.log(token);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <input type="text" value={username} onChange={handleUsernameOnChange} />
            <button onClick={handleButtonOnClick}>토큰 생성</button>
            <button onClick={handleButtonOnClick2}>토큰 생성2</button>
        </div>
    );
}

export default App13;