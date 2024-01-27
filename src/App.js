import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Component/home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
     
    </Routes>
</Router>
  );
}

export default App;
