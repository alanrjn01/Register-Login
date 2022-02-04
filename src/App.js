import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Inicio from './components/Inicio.jsx'
import Menu from './components/Menu.jsx'
import Admin from './components/Admin.jsx'
import Login from './components/Login.jsx'
import Gatito from './components/Gatito';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
