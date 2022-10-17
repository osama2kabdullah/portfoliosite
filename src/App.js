import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/projects/Work';
import ResumePage from './pages/Resume/ResumePage';
import ProjectDetail from './pages/projects/ProjectDetail';
import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <section>
      <Header></Header>
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
