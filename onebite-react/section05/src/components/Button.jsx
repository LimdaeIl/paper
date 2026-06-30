// 구조 분해 할당으로 props 기본값 할당이 가능하다. defaultProps 18 버전 사라짐.
// 리액트는 크로스 브라우징 이슈 해결과 성능 최적화를 위해 합성 이벤트(Synthetic Event)시스템을 사용
const Button = ({children, text, color = "black"}) => {
  console.log(text);

  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  }

  return (
      <button
          onClick={onClickButton}
          // onMouseEnter={onClickButton}
          style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
      </button>
  );
};

export default Button;
