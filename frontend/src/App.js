import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='appjs'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
      </Routes>
    </div>
  );
}

export default App;
