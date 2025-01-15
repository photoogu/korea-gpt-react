import React, { useState } from 'react';

/**
 * input 에 문자열 넣고 확인 버튼 누르면
 * 이름: 문자열   로 나타나게 하기
 * + gender checkbox 추가
 */

function App3(props) {
    const [ name, setName ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ nameInputValue, setNameInputValue ] = useState("");
    const [ genderInputValue, setGenderInputValue ] = useState("male");

    const handleNameInputOnChange = (e) => {
        setNameInputValue(e.target.value);
    }
    
    const handleGenderInputOnChange = (e) => {
        setGenderInputValue(e.target.value);
    }

    const handleOkOnClick = () => {
        setName(nameInputValue);
        setNameInputValue("");
        setGender(genderInputValue === "male" ? "남" : "여");
    }

    return (
        <div>
            <h1>이름: {name}({gender})</h1>
            <input type="text" onChange={handleNameInputOnChange} value={nameInputValue} />
            <input type="radio" id="male" name="gender" onChange={handleGenderInputOnChange} checked={genderInputValue === "male"} value={"male"} />
            <label htmlFor="male">남</label>
            <input type="radio" id="female" name="gender" onChange={handleGenderInputOnChange} checked={genderInputValue === "female"} value={"female"} />
            <label htmlFor="female">여</label>
            <button onClick={handleOkOnClick}>확인</button>
        </div>
    );
}

export default App3;