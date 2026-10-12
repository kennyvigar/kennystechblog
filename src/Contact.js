import './App.css';

function Contact() {
  return (
    <>
      <div className="Container">
        {/* New markup. Hidden in legacy mode by ai.css so the original renders unchanged. */}
        <header className="page-head">
          <h1 className="page-title">contact</h1>
        </header>
        {/* <img className="Pic" src="http://placehold.it/900x400" alt="placeholder" /> */}
        {/* Same polaroid device as Home. In legacy the figure is display:contents
            and the caption is hidden, so the original page renders unchanged. */}
        <figure className="polaroid hero-polaroid">
          <img className="Pic" src={process.env.PUBLIC_URL + '/kennycoffee.webp'} alt="coffeeimage" />
          <figcaption>kennycoffee.webp</figcaption>
        </figure>

        <div className="Blurb">
          <p>find me at</p>
          {/* The spelled-out syntax is Kenny's and stays exactly as written. The
              href underneath is the real destination, so the joke reads but the
              link actually goes somewhere. Trade-off he accepted: a real href
              means a scraper can read the address, which the obfuscation alone
              was hiding from it. */}
          <ul>
            <li><b>Github</b> - <a href="https://www.github.com/kennyvigar/" target="_blank" rel="noreferrer">https *colon* *slash* *slash* www *dot* github *dot* com *slash* kennyvigar/</a></li>
            <li><b>Email</b>  - <a href="mailto:kvigar@gmail.com">k v i ga  r   *at* g m AI l  *dot* com</a></li>
            <li><b>LinkedIn</b>  - <a href="https://www.linkedin.com/in/kenny-vigar/" target="_blank" rel="noreferrer">https *colon* *slash* *slash* www *dot* linkedin *dot* com *slash* in *slash* kenny-vigar/</a></li>

          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;