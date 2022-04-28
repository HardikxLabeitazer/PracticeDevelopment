// import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const  App =()=> {
  const pagesize = 12;
  // state={
  //   progress:0
  // }
  const [progress, setProgress] = useState(0)
  const apiKey=process.env.REACT_APP_NEWS_API
  // setProgress=((progress)=>{
  //   setState({progress:progress})
  // })
  

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pagesize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pagesize={pagesize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pagesize={pagesize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pagesize} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pagesize={pagesize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pagesize={pagesize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pagesize={pagesize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pagesize={pagesize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>

    )
  
}
export default App

