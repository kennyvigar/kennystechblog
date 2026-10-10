import './App.css';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import Projects from './Projects'
import Footer from './Footer';
import DesignToggle from './DesignToggle';
import { useDesign } from './DesignContext';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// The original markup used `class` here. React silently drops it, so the
// Material Symbols font never applies and the header renders the word "bolt".
// Legacy mode keeps that exactly. AI mode uses `className` so the icon works.
// The bug IS the before/after, so it is preserved rather than fixed in place.
function BoltMark() {
  const { design } = useDesign();
  if (design === 'legacy') {
    return <span class="material-symbols-outlined">bolt</span>;
  }
  return <span className="material-symbols-outlined">bolt</span>;
}

// Legacy keeps the original four links in their original order. Projects did not
// exist on the pre-ai site, so it is not advertised there; the /projects route
// still resolves if you type it. AI mode gets the full nav with Contact last.
function SiteNav() {
  const { design } = useDesign();

  if (design === 'legacy') {
    return (
      <nav className="site-nav">
        <Link to="/">Home</Link> <Link to="/About">About Me</Link> <Link to="/Contact">Contact</Link> <Link to="/Blog">Blog</Link>
      </nav>
    );
  }

  return (
    <nav className="site-nav">
      <Link to="/">Home</Link> <Link to="/About">About Me</Link> <Link to="/Projects">Projects</Link> <Link to="/Blog">Blog</Link> <Link to="/Contact">Contact</Link>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <DesignToggle />
      <header className="h1">
        Kenny V
        <BoltMark />
        <br></br>
        <p >Hey welcome..</p>
        </header>
        <Router>

          {/* <nav> and <main> are new wrappers. They carry no styling in App.css,
              so legacy renders identically, but they give AI mode a real layout:
              .App is a flex column and <main> grows, which is what pins the
              footer to the bottom instead of leaving it mid-page. */}
          <SiteNav />
          <div className="HeaderPadding"></div>
          <main className="site-main">
            <Routes >
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/about' element={< About />}></Route>
              <Route exact path='/contact' element={< Contact />}></Route>
              <Route exact path='/projects' element={< Projects />}></Route>
              <Route exact path='/blog/*' element={< Blog />}></Route>

            </Routes>
          </main>
        </Router>


      <Footer / >
    </div>
  );
}

export default App;
