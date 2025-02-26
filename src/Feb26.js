import './App.css';

function Feb26() {
    return (
        <>
        <div className='blog-post'>
        <div className='datestyle h3'>Feb26nd</div>
        <p>.. Lol.  Gonna need to add the year to these date components.  Been a long time since an update!</p>
        <p>I learned a lot with Python the last month.   It was great.   Spin up your venv and get it going 🚀</p>
        <p>On a less technical front.. which this blog can be about too (shhh!) I picked up an amazing set of windows for the "spring time greenhouse build". It's good to get your hands in the dirt after riffing on a keyboard amirite?</p>
        <img className="Pic" src={process.env.PUBLIC_URL + 'windows.jpg'} alt="windows" width="250" height="100"/>
         
        </div>
        </>
    );
}

export default Feb26;