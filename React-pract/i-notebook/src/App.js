import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom"
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';
function App() {
  return (
    <>
      <NoteState>

        <Router>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<Home>Hello</Home>} />
            <Route exact path="/about" element={<About>Hllo</About>} />
          </Routes>
        </Router>

      </NoteState>
    </>
  );
}

export default App;
