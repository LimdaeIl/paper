import './App.css'
import HookExam from "./components/HookExam.jsx";

// 리렌더링 되는 세 가지 상황
// 1. state 값이 변경되는 경우
// 2. 자신이 제공받는 props 가 변경되는 경우
// 3. 부모 컴포넌트에서 변경이 발생되는 경우
// 자신이 가지고 있는 App() 컴포넌트에서 변경이 발생하기 때문에 자식인 Bulb 또한 변경이 발생한다.
// 의미 없이 불필요한 변경이 발생되고 있다. 이를 방지하기 위해 React.memo()를 사용한다.
// 다른 컴포넌트로 분리하는 게 가장 좋다.

function App() {
  // 구조 분해 할당으로 state와 setState를 가져옵니다.
  // 자바스크립트 변수는 리렌더링되지 않지만, state는 리렌더링됩니다.

  return (
      <>
        <HookExam/>
      </>
  );
}

export default App;
