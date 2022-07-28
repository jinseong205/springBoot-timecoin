import { useEffect, useState } from 'react';
import './App.css';

function App() {
  /*실행 시점 
    > 1. App() 함수 최초 실행될때 == mount 될때
    > 2. 상태 변수가 변경 될때
  */
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log('useEffect 실행됨');
    //return () => {};
  });

  return (
    <div>
      <h1> 데이터 {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        add
      </button>
    </div>
  );
}

export default App;
