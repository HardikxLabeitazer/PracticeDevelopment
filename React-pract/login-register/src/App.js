
import './App.css';
import HomePage from './components/homepage/HomePage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Routes } from 'react-router';
function App() {
  return (
    <div className="App">
     

      
     
     
     <BrowserRouter>

     <Routes>
       <Route exact path="/" element={<HomePage/>}/>
       <Route exact path="/" element={<Login/>}/>
       <Route exact path="/" element={<Register/> }/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
