import { createRef, useRef, useState } from 'react';
import './App.css';

//useRef (디자인)
//dom 을 변경할 때 사용
function App() {
  const myRef = useRef(null);
  const [list, setList] = useState([
    { id: 1, name: '진성' },
    { id: 2, name: '푸른' },
  ]);
  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef);
          myRefs[1].current.style.backgroundColor = 'red';
        }}
      >
        색 변경
      </button>
      <div ref={myRef}>박스</div>
      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
}

export default App;
