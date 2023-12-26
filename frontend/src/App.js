import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className='appjs'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/about" element={<h2>About</h2>} />
      </Routes>
    </div>
  );
}

export default App;
