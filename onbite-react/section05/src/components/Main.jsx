import "./Main.css"
// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식 {} 만 넣을 수 있다.
// 2. JSX 내부에서 if 문을 사용할 수 없다. 대신 삼항 연산자나 && 연산자를 사용해야 한다.
// 3. 숫자, 문자열, 배열 값만 렌더링 된다.(객체, undefined, null, boolean 값은 렌더링 되지 않는다.)
// 4. 모든 태그는 닫혀 있어야만 한다.
// 5. 최상위 태그는 반드시 한 개이어야만 한다. (마땅한 태그가 없다면 <> 빈 태그로 감싸줘도 된다.)

const Main = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  }

  if (user.isLogin) {
    return (
        <div className="logout">로그아웃</div>
    )
  } else {
    return <div>로그인</div>
  }

  // return (
  //     <>{
  //       user.isLogin ?
  //           (<div>로그아웃</div>) :
  //           (<div>로그인</div>)
  //     }</>
  // );

}

export default Main;
