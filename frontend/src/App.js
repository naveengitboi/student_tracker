import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import AddSubject from './components/AddSubject';
import PageNotFound from './components/PageNotFound';
function App() {
  return (
    <div className='appjs'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/attendance" element={<Attendance/>} ></Route>
        <Route path='/addsubject' element={<AddSubject />}/>

        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
