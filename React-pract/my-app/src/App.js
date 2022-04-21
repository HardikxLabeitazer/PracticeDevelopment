// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  Routes,
  BrowserRouter,
  Route,

} from "react-router-dom";
import About from './components/About'

function App() {
  const [mode, setMode] = useState('light');
  // const [alert, setAlert]= useState(null);

  // const showAlert = (message,type1) =>{
  //     setAlert({
  //       msg:message,
  //       type:type1,
  //     })
  // setTimeout(() => {
  //   setAlert(null);
  // }, 2000);
  // }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';

      // showAlert("DarkMode","OK");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

      // showAlert("LightMode","OK");
    }
  }
  return (
    <>

      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm  heading='Enter Text Here' mode={mode}></TextForm>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>


      {/* <Router>

  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>

    <Alert alert="This is alert" ></Alert>

    <div className="container my-3">
     
    </div>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
             <TextForm heading="Enter the Text to analyze" mode={mode}/>
          </Route>
        </Switch>

   </Router> */}

      {/* <div className='container'>
      <About/>
    </div> */}

    </>
  );
}

export default App;
