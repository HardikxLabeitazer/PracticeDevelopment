// import Star from './components/Stars/Stars'
import './App.css';
import colorData from "./components/Colors/colorData.json"
import { useState} from 'react';
import ColorList from './components/Colors/ColorList';
import Usingref from './components/buildingforms/Usingref';
import Color from './components/Colors/Color';
import WithoutUsingref from './components/buildingforms/WithoutUsingref';
import {v4} from "uuid"
function App(){
  // const[colors,setColors]=useState(colorData);

  return(
    <>
    <WithoutUsingref/>
    <ColorList />
    
    
    </>
    
  )
}










// function App(){
  
//   return(
//     <>
//     <WithoutUsingref/>
//     </>
//   )
// }



// function App() {
//  const[colors,setColors] =useState(colorData);

  // return (
  //   <div className="App">
  //   {/* <Star totalStars={10} style={{backgroundColor:"lightblue "}} onDoubleClick={e=>alert("double click")}/> */}
  //   <ColorList colors={colors}
  //   onRateColor={(id,rating)=>{
  //     const newColors= colors.map(color=>
  //       color.id===id ?{...color,rating}:color)
  //       setColors(newColors)
  //   }}
  //   onRemoveColor={id=>{
  //     const newColors = colors.filter(color=>color.id !== id);
  //     setColors(newColors);
  //   }}
  
  //   />
  //   </div>
  // );


    

  
// }

export default App;
