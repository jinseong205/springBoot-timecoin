import logo from './logo.svg';
import './App.css';

/*
1.실행방식
>[package.json] scripts - start : react-scripts start 
>[index.js] 순차 실행 > ReactDom.render(...<App>,document.getElementById('root')...) ++ jsx
>[App.js] 을 [public/index.html -> <div id = "root">] 에 render

2. JSX 문법
*/
function App() {
  return <div>안녕1</div>;
}

export default App;
