import './App.css';

function About() {
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

export default About;