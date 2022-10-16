import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <section>
      <Header></Header>
      <Routes>
        <Route path='/' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </section>
  );
}

export default App;
