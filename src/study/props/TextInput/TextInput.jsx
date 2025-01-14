function TextInput({id, text}) {     // 컴포넌트 함수는 변수 1개 (변수 타입: 객체) , 
    const user = { 
        username: "test",
        password: "1234",
        name: "김준일",
    };

    // const {username, name} = user;
    // console.log(username);          // 비구조할당  =>  props를 {id, text} 로 표현 가능

    // console.log(props);

    return <div>
        <label htmlFor={id}>{text}</label>
        <input type="text" id={id} />
    </div>
}

export default TextInput;