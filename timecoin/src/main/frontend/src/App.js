import logo from './logo.svg';
import './App.css';

/*
0. React Engine - data 변경 감지하여 UI 그려주는 역할
1.실행과정 - SPA *Single Page Application
  >[package.json] scripts - start : react-scripts start 
  >[index.js] 순차 실행 > ReactDom.render(...<App>,document.getElementById('root')...) ++ jsx
  >[App.js] 을 [public/index.html -> <div id = "root">] 에 render
필요한 라이브러리는 index.html 에 추가
2. JSX 문법
 > 1) return시 하나의 Dom만 리턴 할 수 있다.
 > 2) 변수 선언은 let(변수) 혹은 const(상수) 로만 해야함.
 > 3) if 사용 불가능 X -> 삼항연산자
 > 4) 조건부 렌더링
 > 5) css 디자인
    - 내부에 적는 방법
    - 외부에 적는 방법
    - 라이브러리 사용 (bootstrp, component-sytled)
3. Babel ES6 -> ES5
4. webpack
*/
function App() {
  let a = 10;
  const b = 20;
  let c;
  let d = undefined;
  console.log(1, c);

  const mystyle = {
    color: 'red',
  };

  return (
    <div>
      <div style={{
        color: 'red',
      }}>안녕 {a === 10 ? '10입니다' : '10이 아닙니다.'}</div>
      <h1 className='box-style'>안녕 {b === 20 && '20입니다.'}</h1>
      <hr />
    </div>
  );
}

export default App;
