import './App.css'
import { Routes, Route } from 
'react-router-dom';
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import AddSubject from './components/AddSubject';
import PageNotFound from './components/PageNotFound';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })


  return (
    <div className='appjs'>
      <Navbar />
      <div className="routesContainer">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/db/attendance" element={<Attendance />} />
          <Route path="/attendance/subject" element={<Attendance />} />
          <Route path='/db/attendance/addsubject' element={<AddSubject />} />




          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
