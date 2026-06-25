import useInput from '../hooks/userInput.jsx';

// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 가능하다.
// 2. 조건부로 호출될 수는 없다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.
const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
      <div>
        <input
            onChange={onChange}
            value={input}
            type="text"
        />
        <input
            onChange={onChange2}
            value={input2}
            type="text"
        />
      </div>
  )
}

export default HookExam;
