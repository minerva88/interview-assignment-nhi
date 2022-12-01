import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Details from './components/details/Details';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/user/:username' element={ <Details /> } />
        </Routes>
    </Router>
  );
}

export default App;
