/**
 *          useEffect()
 */

import React, { useEffect, useState } from 'react';

function App10(props) {
    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);
    
    const unmount = () => {     // 해제할 때 동작해야하는 것이 있는 경우 필요, 그 외엔 안써도 됨
        console.log("장착해제됨");
    }

    const mount = () => {
        console.log("장착됨");
        return unmount;
    }

    useEffect(mount);

    useEffect(() => {
        console.log(num1);
        setNum2(num1 + 100);
    }, [num1]);     // num1 이 바뀔때마다 mount 실행

    useEffect(() => {
        console.log(num2);
    }, [num2]);

    useEffect(() => {
        console.log(num1);
        console.log(num2);
    }, [num1, num2]);   // 둘 중 하나라도 상태가 변하면 mount 실행

    useEffect(() => {
        console.log("마운트!!!");
        return () => { console.log("최초의 한번!!") };
    }, [])          // 빈 배열 : 최초의 한번만 mount 실행됨

    const handleOnClick = () => {
        setNum1(num1 + 10);
    }
    
    return (
        <div>
            <h1>Num1: {num1}</h1>
            <h1>Num2: {num2}</h1>

            <button onClick={handleOnClick}>클릭</button>
        </div>
    );
}

export default App10;