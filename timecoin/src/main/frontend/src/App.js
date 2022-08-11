//import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Top from './components/Top';
import Bottom from './components/Bottom';

import ListPage from './pages/Board/ListPage';
import WritePage from './pages/Board/WritePage';
import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(1);

  const addNumber = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <div className="container">
        <h1> 최상단 화면 </h1>
        <Top number={number} />
        <Bottom addNumber={addNumber} />
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
