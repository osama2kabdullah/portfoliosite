
import './App.css';
import Header from './pages/Header';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/projects/Work';
import ResumePage from './pages/Resume/ResumePage';
import ProjectDetail from './pages/projects/ProjectDetail';
import { useState } from 'react';


function App() {
  const mode = JSON.parse(localStorage.getItem('darkmode'));
  const [darkmode, setDarkmode] = useState(mode.darkmode || false);
  localStorage.setItem('darkmode', JSON.stringify({darkmode}));
  
  return (
    <section className={darkmode && 'dark'}>
      <Header setDarkmode={setDarkmode} darkmode={darkmode}></Header>
      <Routes>
        <Route path='/' element={<About></About>}></Route>
        <Route path='/works' element={<Work></Work>}></Route>
        <Route path='/detail/:name' element={<ProjectDetail></ProjectDetail>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/resume' element={<ResumePage></ResumePage>}></Route>
      </Routes>
    </section>
  );
}

export default App;
