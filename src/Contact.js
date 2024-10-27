import './App.css';

function Contact() {
  return (
    <>
      <div className="Container">
        {/* <img className="Pic" src="http://placehold.it/900x400" alt="placeholder" /> */}
        <img className="Pic" src={process.env.PUBLIC_URL + 'kennycoffee.webp'} alt="coffeeimage" />

        <div className="Blurb">
          <p>find me at</p>
          <ul>
            <li><b>Github</b> - https *colon* *slash* *slash* www *dot* github *dot* com *slash* kennyvigar/</li>
            <li><b>Email</b>  - k v i ga  r   *at* g m AI l  *dot* com</li>
            <li><b>LinkedIn</b>  - https *colon* *slash* *slash* www *dot* linkedin *dot* com *slash* in *slash* kenny-vigar/</li>

          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;