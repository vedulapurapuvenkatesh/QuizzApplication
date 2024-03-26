import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Sql from './pages/Sql';
import Java from './pages/Java';
import Python from './pages/Python';
import Navbar from './components/Navbar';
import './App.css'
export default function App() {
  return (
    <div>
      <h1>Welcome To The QuizApplication</h1>
      <h1>Choose the Test</h1>
      <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/sql' element={<Sql/>}></Route>
      <Route path='/java' element={<Java/>}></Route>
      <Route path='/python' element={<Python/>}></Route>
    </Routes>
    </div>
  );
}





