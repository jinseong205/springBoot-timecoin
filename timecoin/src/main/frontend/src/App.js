import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/:id" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
