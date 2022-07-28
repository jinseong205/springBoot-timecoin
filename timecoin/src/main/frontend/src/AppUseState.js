import './App.css';
import { useState } from 'react';
import Sub from './Sub';

function App() {
  const [number, setNumber] = useState(1); //React 안에 Hooks 라이브러리

  const add = () => {
    setNumber(number + 1); //react 한테 number 값 변경 요청
    console.log('add', number);
  };

  //랜더링 시점 = 상태값 변경
  return (
    <div>
      <div>
        <h1>숫자 : {number}</h1>
        <button onClick={add}>Add</button>
        <Sub />
      </div>
    </div>
  );
}

export default App;
