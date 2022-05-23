
import './App.css';
import HomePage from './components/homepage/HomePage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import { useState } from 'react';
function App() {

  const[user,setLoginUser]=useState({});
  return (
    <div className="App">
     

      
     
     
     <BrowserRouter>

     <Routes>

       <Route exact path="/" element={user && user._id?<HomePage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}></Route>
       <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
       <Route exact path="/register" element={<Register/> }/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
