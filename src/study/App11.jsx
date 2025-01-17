import React from 'react';

/**
 * 비동기
 * 
 * Promise(resolve,reject)
 * then, catch, finally
 * 
 * async / await
 * try, catch, finally
 * 
 */

function App11(props) {

    // setTimeout(() => {
    //     console.log("1");
    //     console.log("2");
    //     setTimeout(() => {
    //         console.log("3");
    //     } , 2000);
    // }, 3000);

    // resolve 결정하다
    // reject 거부하다
    const isSuccess = false;
    const isSuccess2 = true;

    console.log("1번");

    const p1 = new Promise((resolve, reject) => {
        console.log("Promise1 생성!!");

        if(isSuccess) {
            resolve();      // 정상동작 (try)    --> then()
        } else {
            reject();       // 에러동작 (catch)  --> catch()
        }
    });

    p1.then(() => {
        console.log("p1 then 호출");    // then 은 후순위로 동작한다 >> resolve와 reject는 실행 순서에 있어 후순위이기 때문
    }).catch(() => {
        console.log("p1 catch 호출");
    }).then(() => {
        console.log("p1 2번째 then 호출"); // 오류 처리(catch문)가 완료된 후 (true) then 호출
    });
    
    console.log("2번");

    const p2 = new Promise((resolve, reject) => {
        console.log("Promise2 생성!!");

        if(isSuccess2) {
            resolve();
        } else {
            reject();
        }
    });

    p2.then(() => {
        console.log("p2 then 호출");
    }).then(() => {
        console.log("p2 2번째 then 호출"); // then 의 리턴타입이 Promise 객체이기 때문에 p1.then 뒤에 .then 이 또 가능하다.
    });
    // 순서 : Promise 1 생성 >> Promise 2 생성 >> p1.then() >> p2.then() >> p1.then().catch() >> p2.then().then() >> p1.then().catch().then()

    const p3 = new Promise((resolve, reject) => {
        console.log("Promise3 생성!!");

        const response = {
            status: 200,        // 성공
            data: {
                username: "aaa",
                password: "1234",
            }
        }

        if(true) {
            resolve({response});
         // resolve({response: {
         //         status: 200,
         //         data: {
         //             username: "aaa",
         //             password: "1234",
         //         }
         //     }
         // })
        } else {
            reject();
        }
    });

    p3.then((r) => {
        console.log(r);
        if(true) {
            throw new Error("오류!!!"); // throw >> 무조건 catch로 넘어감
        }
        return {        // return >> 무조건 then으로 넘어감
            response: {
                ...r.response,
                data: {
                    ...r.response.data,
                    name: "김준일",
                    email: "aaa@gmail.com",
                }
            }
        }
    }).then((r) => {
        console.log(r);
    }).catch((error) => { // error: 위의 throw 에 있는 new Error 객체
        console.error(error);
    });

    const p4 = new Promise((resolve, reject) => {
        console.log("Promise4 생성!!");

        const response = {
            status: 400,        // 실패
            data: {
                errorMassage: "문자열 형식이 맞지 않습니다.",
            }
        }

        if(false) {
            resolve();
        } else {
            reject(new Error(JSON.stringify({response})));
        }
    });

    p4.catch((error) => {
        console.error(error);
    });

    // const then = (fx) => {
    //     return new Promise((resolve) => resolve(fx()));
    // }
    // then(() => {
    //     return {
    //         response: {}
    //     }
    // })


    return (
        <div>
            <h1>App11</h1>
        </div>
    );
}

export default App11;