import { useState } from "react";

/**
 * useState 상태관리
 */
function App2() {
    const [ num, setNum ] = useState(0);

    let number = 0;

    console.log(num);
    console.log(number);

    const handleIncreaseOnClick = () => {
        // number += 1;
        setNum(num + 1);
    }
    

    return <>
        {/* <h1>{number}</h1> */}
        <h1>{num}</h1>
        <button onClick={handleIncreaseOnClick}>1증가</button>
        <button>1감소</button>
    </>
}

export default App2;