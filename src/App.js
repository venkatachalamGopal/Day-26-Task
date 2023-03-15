import './App.css';
import {NavLink,Route, Routes}from 'react-router-dom';

import {Home} from './comp/home';
import { Users } from './comp/user';
import {About} from './comp/about';
import { Main } from './comp/main';

function App() {
  return (
    <div className="App">
      <div className='navigation'>
      <NavLink to="/" className='options'>Home</NavLink>
      <NavLink to="/about" className='options' >About</NavLink>
      <NavLink to="/main" className='options' >Main</NavLink>
      </div>

      <Routes>
      <Route path='/' Component={Home} /> 
      <Route path='/users/:id' Component={Users} /> 
      <Route path='/about' Component={About} />   
      <Route path='/main' Component={Main} />   
      </Routes>
      
    </div>
  );
}

export default App;
