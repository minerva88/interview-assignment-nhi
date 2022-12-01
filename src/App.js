import Header from './components/layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Details from './components/details/Details';
import './sass/style.scss';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/user/:username' element={ <Details /> } />
        </Routes>
    </Router>
  );
}

export default App;
