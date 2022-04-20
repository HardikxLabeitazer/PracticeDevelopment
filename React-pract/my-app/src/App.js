// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'

function App() {
  const [mode,setMode]= useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white'
    }
  }
  return (
   <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
    <div className="container my-3">
      <TextForm heading="Enter the Text to analyze" mode={mode}/>
    </div>
    {/* <div className='container'>
      <About/>
    </div> */}
    
   </>
  );
}

export default App;
