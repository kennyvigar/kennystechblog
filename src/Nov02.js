import './App.css';

function Nov02() {
    return (
        <>
        <div className='blog-post'>
        <div className='datestyle h3'>Nov2nd</div>
        <p>Throwback to joystick replacement last month</p>
        <br></br>
        <img className="Pic" src={process.env.PUBLIC_URL + 'switch.jpeg'} alt="moustache!" width="250" height="100"/>
        <p></p>
        <a href="https://www.ifixit.com/Guide/Nintendo+Switch+Lite+Left+Joystick+Replacement/137385">ifixit teardown</a>
        </div>
        </>
    );
}

export default Nov02;