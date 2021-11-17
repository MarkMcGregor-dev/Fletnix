import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { WhosWatchingPage } from './pages/WhosWatchingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}>
        </Route>
        <Route exact path="/ww" element={<WhosWatchingPage />}>
        </Route>
        <Route exact path="/*" element={<h1>404</h1>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
