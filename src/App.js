import './App.css';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="h1">
        Kenny V
        {/* <span class="material-symbols-outlined">
          bolt
        </span> */}
           <span class="material-symbols-outlined">
          bolt
        </span>
        <br></br>
        <p >Hey welcome..</p>
        </header>
        <Router>
          
          <Link to="/">Home</Link> <Link to="/About">About Me</Link> <Link to="/Contact">Contact</Link> <Link to="/Blog">Blog</Link>
          <div className="HeaderPadding"></div>
          <Routes >
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/blog/*' element={< Blog />}></Route>

          </Routes>
        </Router>
        

      <Footer / >
    </div>
  );
}

export default App;
