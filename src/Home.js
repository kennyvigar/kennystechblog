import './App.css';

function About() {
  return (
    <>
    <div className="Container">
        {/* <img className="Pic" src="http://placehold.it/900x400" alt="placeholder" /> */}
        <img className="Pic" src={process.env.PUBLIC_URL + 'kennymoustache.jpeg'} alt="moustache!" width="150" height="100"/>

        <div className="Blurb">
        <p>my name is kenny,</p> 
        <p> i like hanging out with my familiy, friends, music, playing <br></br>with techologies like data, web apps, hardware, hamburgers, snowboarding, gaming and best favorite animal friends</p>
        <p>i'd like to use this space to share cool stories, or snippets of things i am working on.  dive in!</p>
        
        </div>
      </div>
    </>
  );
}

export default About;