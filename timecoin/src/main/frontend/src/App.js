//import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Top from './components/Top';
import Bottom from './components/Bottom';

import ListPage from './pages/Board/ListPage';
import WritePage from './pages/Board/WritePage';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <h1> 최상단 화면 </h1>
        <Top />
        <Bottom />
      </div>
    </>

    /*
    <>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </>
    */
  );
}

export default App;
