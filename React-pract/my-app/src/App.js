import logo from './logo.svg';
import './App.css';

let name ="Natsuki";
function App() {
  return (
   <>
   <nav>
     <ul>
       <li>Home</li>
       <li>About</li>
       <li>Contact</li>
     </ul>
   </nav>
   <div><h1>Hello {name}</h1></div>
   </>
  );
}

export default App;
