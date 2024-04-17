import './App.css'; import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/SignUp';
import Login from './components/Login';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
