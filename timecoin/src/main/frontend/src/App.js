import logo from './logo.svg';
import './App.css';

function App() {
  let number = 1; //상태 값

  const add = () => {
    number++;
    console.log('add', number);
  };
  //랜더링 시점 = 상태값 변경
  return (
    <div>
      <div>
        <h1>숫자 : {number}</h1>
        <button onClick={add}>Add</button>
      </div>
    </div>
  );
}

export default App;
