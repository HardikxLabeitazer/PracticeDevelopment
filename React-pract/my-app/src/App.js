// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';


function App() {
  return (
   <>
    <Navbar title="TextUtils" aboutText ="About"></Navbar>
    <div className="container my-3">
      <TextForm heading="Enter the Text to analyze"/>
    </div>
    
   </>
  );
}

export default App;
