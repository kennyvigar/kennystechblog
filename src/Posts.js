import './App.css';
import Oct25 from './Oct25'
import Oct27 from './Oct27'
import Oct31 from './Oct31'


function Posts() {
  return (
    <>
    <div>
      
      <h4>Posts</h4>
      <div className="posts">
        <Oct31 />
        <Oct27 />
        <Oct25 />
      </div>
    </div>
    </>
  );
}

export default Posts;