import './App.css';
import Oct25 from './Oct25'
import Oct27 from './Oct27'
import Oct31 from './Oct31'
import Nov02 from './Nov02'
import Feb24 from './Feb24'
import Feb26 from './Feb26'

function Posts() {
  return (
    <>
    <div className="Container">

      <h4>Posts</h4>
        <Feb26 />
        <Feb24 />
        <Nov02 />
        <Oct31 />
        <Oct27 />
        <Oct25 />
      </div>
    </>
  );
}

export default Posts;