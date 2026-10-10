import './App.css';

// Post body only. The title and date live in postRegistry.js and are rendered
// by Blog.js, so there is no date div and no <h2> in here. The old posts still
// carry a .datestyle div from before the registry existed; it is hidden in the
// new design and new posts do not need one.

function Oct092026() {
    return (
        <>
        <div className='blog-post'>
        <p>Yeeeaaa its been a while</p>
        <p className='todo'>TODO: the rest of the post. Dictate it to me and I will drop it in here.</p>
        </div>
        </>
    );
}

export default Oct092026;
