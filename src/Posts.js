import './App.css';
import { postsNewestFirst } from './postRegistry';

// Legacy's stacked blog. Markup and order are the original: <h4>Posts</h4> then
// every post newest first, which is exactly what the hand-written list did.
// It reads from the registry now so that adding a post is still one line in one
// file and the diary stays complete in BOTH designs. Nothing visual changed.
function Posts() {
  return (
    <>
    <div className="Container">

      <h4>Posts</h4>
        {postsNewestFirst.map(({ slug, Component }) => (
          <Component key={slug} />
        ))}
      </div>
    </>
  );
}

export default Posts;
