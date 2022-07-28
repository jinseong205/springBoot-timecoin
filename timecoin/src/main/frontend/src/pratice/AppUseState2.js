import { useState } from 'react';
import './App.css';

function App() {
  console.log('App 실행됨');

  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ];

  const [users, setUsers] = useState(sample);

  const download = () => {
    setUsers([...sample, { id: num, name: '진성' }]); //reference 변경되어야 render가 다시됨
    setNum(num + 1);
  };

  return (
    <div>
      <button onClick={download}> 다운로드 </button>
      {users.map((u) => (
        <h1>
          {u.id} , {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
