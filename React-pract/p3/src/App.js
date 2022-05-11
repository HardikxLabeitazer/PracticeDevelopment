import Star from './components/Stars/Stars'
import './App.css';
function App() {
 
  return (
    <div className="App">
    <Star totalStars={10} style={{backgroundColor:"lightblue "}} onDoubleClick={e=>alert("double click")}/>
    </div>
  );
}

export default App;
