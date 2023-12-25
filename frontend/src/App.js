import './App.css'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
      </Routes>
    </>
  );
}

export default App;
