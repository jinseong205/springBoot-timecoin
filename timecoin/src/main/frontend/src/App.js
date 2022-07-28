import { useMemo, useState } from 'react';
import './App.css';

//useMemo => memorization (기억)
function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  //const [str, setStr] = useState('합계');
  alert('start');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => {
      sum += i;
    });
    console.log('sum = ' + sum);
    return sum;
  };

  //const addResult = useMemo(() => getAddResult(), [list]); //list 가 변경됬을때 호출

  return (
    <div>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트 값 추가
      </button>
      <div>
        {list.map((i) => (
          <li>{i}</li>
        ))}
      </div>
      <div>합계: {getAddResult}</div>
    </div>
  );
}

export default App;
