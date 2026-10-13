import Oct25 from './Oct25';
import Oct27 from './Oct27';
import Oct31 from './Oct31';
import Nov02 from './Nov02';
import Feb24 from './Feb24';
import Feb26 from './Feb26';
import Oct132026 from './oct132026';
// Unpublished until Kenny dictates the body. Uncomment this and the entry
// below to put it live. The component in oct092026.js is untouched.
// import Oct092026 from './oct092026';

// One entry per post. Newest first is derived from `date`, not from the order here.
// `date` is a real date so sorting works and the ordinals stop being hand-typed.
// To add a post: write the component, add a line here. Nothing else to touch.
export const posts = [
  // {
  //   slug: 'revamping-with-agentic-tools',
  //   title: 'Revamping with Agentic Tools',
  //   date: '2026-10-09',
  //   Component: Oct092026,
  // },
  {
    slug: 'site-redesign',
    title: 'site redesign',
    date: '2026-10-13',
    Component: Oct132026,
  },
  {
    slug: 'first-post-sql-backup-report',
    title: 'first post, and a SQL backup report',
    date: '2024-10-25',
    Component: Oct25,
  },
  {
    slug: 'catblog',
    title: 'wait, you haven’t heard of CatBlog?',
    date: '2024-10-27',
    Component: Oct27,
  },
  {
    slug: 'testing-overflow',
    title: 'testing overflow, and happy halloween',
    date: '2024-10-31',
    Component: Oct31,
  },
  {
    slug: 'joystick-replacement',
    title: 'joystick replacement',
    date: '2024-11-02',
    Component: Nov02,
  },
  {
    slug: 'deploy-songs',
    title: 'what’s your deploy song?',
    date: '2025-02-24',
    Component: Feb24,
  },
  {
    slug: 'python-and-greenhouse-windows',
    title: 'python, and windows for the greenhouse',
    date: '2025-02-26',
    Component: Feb26,
  },
];

// Newest first.
export const postsNewestFirst = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const findPost = (slug) => posts.find((p) => p.slug === slug);

// "Feb 26, 2025" - casual, matching the blog's voice rather than a changelog.
export function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[m - 1]} ${d}, ${y}`;
}
