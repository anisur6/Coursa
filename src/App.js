import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Header/Home';
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Courses from './components/Courses/Courses';
import Login from './components/Login/Login';

function App() {
  return (
    <>
        <Header/>
      <Routes>



            <Route path="/" element={  <Home/> }  />
            <Route path="/about" element={  <About/> }  />
        <Route path="/contact" element={<Contact />} />

        <Route path="/service" element={<Courses />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
