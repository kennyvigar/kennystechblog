import './App.css';
import { useDesign } from './DesignContext';

// Every word below is Kenny's existing copy, lifted verbatim from the original
// Home.js. No prose has been written for him.

function Home() {
  const { design } = useDesign();

  // Legacy: the original home page, markup and all. The AI design below is a
  // separate tree rather than a restyling of this one, so pre-ai mode renders
  // stock. Nothing new (no page head, no polaroid) reaches it.
  if (design === 'legacy') {
    return (
      <>
      <div className="Container mobileContainer">
          {/* <img className="Pic" src="http://placehold.it/900x400" alt="placeholder" /> */}
          <img className="Pic" src={process.env.PUBLIC_URL + 'kennymoustache.jpeg'} alt="moustache!" width="150" height="100"/>

          <div className="Blurb">
          <p>my name is kenny,</p> 
          <p>i'd like to use this space to share cool stories, or snippets of things i am working on.  dive in!</p>
          </div>
        </div>
      </>
    );
  }

  // The polaroid sits between the heading and the lede in the DOM, and the
  // .home-text wrapper is gone, so all three are direct children of the grid.
  // A float only affects what comes after it in the flow, so this order is what
  // lets the copy wrap around the polaroid at phone width. Desktop is unaffected
  // because ai.css places all three by explicit grid-column and grid-row rather
  // than by source order.
  return (
    <section className="home">
      <h1 className="display">my name is kenny,</h1>
      <div className="home-art">
        <figure className="polaroid">
          <img src={process.env.PUBLIC_URL + '/kennymoustache.jpeg'} alt="kenny" />
          <figcaption>kennymoustache.jpeg</figcaption>
        </figure>
      </div>
      <p className="lede">
        i&rsquo;d like to use this space to share cool stories, or snippets of
        things i am working on. dive in!
      </p>
    </section>
  );
}

export default Home;
