import "./style.css";

export function printConsole() {        // 일반 함수는 export 를 함수 앞에 적어야함
    console.log("hello2파일 입니다.");
}

export function printConsole2() {       // 컴포넌트 함수는 무조건 default, 근데 무조건 있어야하는건 아님
    console.log("hello2파일 입니다...");
}

function Hello2() {
    const h1Text = 'Hello React!!';
    const h1 = <h1>{h1Text}</h1>;

    return <>
        {h1}
        <label className="box" htmlFor="username">아이디</label>
        <input id = "username" />
    </>
}

export default Hello2;                  // import 를 위해서는 export 필요