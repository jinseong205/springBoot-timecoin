import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ListPage from './pages/Board/ListPage';
import WritePage from './pages/Board/WritePage';

function App() {
  //상태

  return (
    <>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </>
  );
}

export default App;
