import './App.css';
import { Routes, Route, NavLink, Navigate, useParams } from 'react-router-dom';
import { useDesign } from './DesignContext';
import Posts from './Posts';
import { postsNewestFirst, findPost, formatDate } from './postRegistry';

// AI mode: one post per URL, picked from the sidebar.
function PostRoute() {
  const { slug } = useParams();
  const post = findPost(slug);

  if (!post) {
    return (
      <div className="blog-post">
        <p>No post at that address.</p>
        <NavLink to={`/blog/${postsNewestFirst[0].slug}`}>Go to the latest post</NavLink>
      </div>
    );
  }

  const { Component } = post;
  return (
    <article className="blog-post">
      <header className="post-head">
        <h2 className="post-title">{post.title}</h2>
        <time className="post-date" dateTime={post.date}>{formatDate(post.date)}</time>
      </header>
      <Component />
    </article>
  );
}

function Sidebar() {
  return (
    <nav className="post-sidebar" aria-label="Posts">
      <h4 className="sidebar-head">Posts</h4>
      <ul className="sidebar-list">
        {postsNewestFirst.map((p) => (
          <li key={p.slug}>
            <NavLink to={`/blog/${p.slug}`} className="sidebar-link">
              <span className="sidebar-title">{p.title}</span>
              <span className="sidebar-date">{formatDate(p.date)}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Blog() {
  const { design } = useDesign();

  // Legacy: the original stacked scroll, untouched.
  if (design === 'legacy') {
    return (
      <div className="Container">
        <div className="BlogNav">
          <Posts />
        </div>
      </div>
    );
  }

  return (
    <div className="blog-layout">
      <Sidebar />
      <div className="post-pane">
        <Routes>
          <Route index element={<Navigate to={postsNewestFirst[0].slug} replace />} />
          <Route path=":slug" element={<PostRoute />} />
        </Routes>
      </div>
    </div>
  );
}

export default Blog;
