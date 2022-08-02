import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login/:id" exact={false} component={LoginPage} />
    </div>
  );
}

export default App;
