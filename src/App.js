import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostYourResume from './components/PostYourResume';
import Employees from './components/Employess';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/next'element={<Employees/>}/>
      <Route path='/search' element={<PostYourResume/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
