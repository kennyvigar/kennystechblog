import './App.css';
import { projects } from './projectRegistry';

// TODO: swap for the projects-page photo. One line, nothing else to touch.
// Same register as kennymoustache / Kenny McCormick / kennycoffee.
const HERO = '/kennycoffee.webp';

// An empty slot renders NOTHING. It used to render a loud orange box, which was
// right while the page was empty and wrong once the facts were written. Which
// keys are still empty is tracked in projectRegistry.js, not on the page.
function Slot({ value, className = 'project-prose' }) {
  if (!value) return null;
  return <p className={className}>{value}</p>;
}

function Project({ p }) {
  return (
    <article className="project">
      <h2 className="project-title">{p.title}</h2>
      <p className="project-meta">
        <span>{p.period}</span>
        <span className="project-stack">{p.stack}</span>
      </p>

      {p.image && (
        <img className="project-shot" src={process.env.PUBLIC_URL + p.image} alt={p.title} />
      )}

      <Slot value={p.blurb} />
      <Slot value={p.approach} />

      <ul className="project-facts">
        {p.facts.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      {p.prompt && (
        <div className="project-prompt">
          <span className="eyebrow">the prompt</span>
          <pre>{p.prompt}</pre>
        </div>
      )}

      {p.lesson && (
        <p className="project-lesson">
          <span className="eyebrow">what i&rsquo;d do differently</span>
          {p.lesson}
        </p>
      )}

      {p.links.length > 0 && (
        <p className="project-links">
          {p.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </p>
      )}
    </article>
  );
}

function Projects() {
  return (
    <div className="Container">
      <header className="page-head">
        <h1 className="page-title">projects</h1>
      </header>
      {/* The wrapper exists for phone width only. The hero is a four-up collage,
          so shrinking the whole thing to a thumbnail makes four unreadable
          photos. .pic-frame is a window ai.css opens on one quadrant instead.
          It adds nothing on desktop, where the full collage still shows. */}
      <div className="pic-frame">
        <img className="Pic" src={process.env.PUBLIC_URL + HERO} alt="" />
      </div>
      <div className="Blurb">
        {projects.map((p) => (
          <Project key={p.slug} p={p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
