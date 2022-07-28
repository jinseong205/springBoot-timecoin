import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    //다운로드 (통신)
    let downloadData = 5;
    setData(downloadData);
  };

  /*실행 시점 
    > 1. App() 함수 최초 실행될때 == mount 될때
    > 2. 상태 변수가 변경 될때 (dependency list에 등록 되있어야함)
    > 3. 의존 리스트를 관리를 할 수 있다.
  */
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
    //return () => {};
  }, [search /*dependency list*/]);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setSearch(2);
          }}
        >
          검색
        </button>
      </div>
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
