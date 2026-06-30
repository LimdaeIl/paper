import './App.css'
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import {useEffect, useRef, useState} from "react";
import Even from "./components/Even.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMounted = useRef(false);

  // 1. 마운트: 탄생
  useEffect(() => {
    console.log("mounted");
  }, []);

  // 2. 업데이트: 변화, 리렌더링(deps 생략: 업데이트가 발생할 때마다 계속 실행)
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("updated");
  });

  // 3. 언마운트 : 죽음
  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}/>
        </section>
        <section>
          <Viewer count={count}/>
          {count % 2 === 0 ? <Even/> : null}
        </section>
        <section>
          <Controller onClickButton={onClickButton}/>
        </section>
      </div>
  )
}

export default App
