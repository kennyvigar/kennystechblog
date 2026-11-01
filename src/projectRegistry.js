// One entry per project.
//
// `facts` were read out of each repo and are verifiable. Everything else is a
// stub for Kenny to fill: the voice is his, not the model's. Any field left as
// null renders a visible TODO placeholder, so nothing ghost-written can ship.
//
// Add a project: add an object. Reorder: move it. Nothing else to touch.
//
// FIELDS
//   title    display name
//   period   when
//   stack    one line, middot separated
//   image    optional screenshot, served from /public. null = no image
//   blurb    YOUR WORDS. what it is, why you built it. 2-4 sentences.
//   approach YOUR WORDS. how it got built. the spec-driven angle.
//   prompt   a real prompt or spec excerpt, verbatim. renders in a mono block.
//   lesson   YOUR WORDS. what you'd do differently. optional, omit if dull.
//   facts    verified bullets. already filled in.
//   links    [{ label, href }]

export const projects = [
  {
    slug: 'checkoutmy-garden',
    title: 'checkoutmy.garden',
    period: 'May 2026 – present',
    stack: 'React Native / Expo · Postgres · Deno edge functions',
    image: null,
    blurb: 'I was tracking my own garden progress through pictures and sensor data and rendering it to a front end netlify page.  I figured it would be nice to scale it out for anyone who wanted the same digital aspect to thier garden.',
    approach: null,
    prompt: null,
    lesson: null,
    facts: [
      'scheduled ingest from six public data providers, weather, space, garden apis and data stores',
      '40 numbered feature specs, 625 unit tests across 70 suites.. Diary, encyclopedia, event tracking, graphing, reporting, mini game,',
      'defects, accepted tech debt and as-built behaviour in three separate logs',
    ],
    links: [{ label: 'checkoutmy.garden', href: 'https://checkoutmy.garden' }],
  },
  {
    slug: 'jobscout',
    title: 'jobscout',
    period: 'Oct 2026',
    stack: 'Python · public ATS APIs · Claude Code',
    image: null,
    blurb: null,
    approach: null,
    prompt: null,
    lesson: null,
    facts: [
      'you can check out my blog post on this one, but it is just me making my career search more efficient',
      'i wrote my resume and coverletter because i found that even with a `humanizer` the documentation still just read like cringe ai.. the intention is to keep the job search manual with a full human lead',
      'this tool does pull in jobs from multiple sources so i can get a match based on keywords from my resume.  the job matches are then put on a dashboard for me to view their "match score" and provide me with the link to apply, key skills, and track my applications through the weeks',
      'built to hand to a friend. they clone it and set it up against their own resume and their own writing',
    ],
    links: [{ label: 'github.com/kennyvigar/jobscout (private)', href: 'https://github.com/kennyvigar/jobscout' }],
  },
  {
    slug: 'airpi',
    title: 'AirPi',
    period: '2026',
    stack: 'Raspberry Pi Zero W · Python · local models',
    image: null,
    blurb: null,
    approach: null,
    prompt: null,
    lesson: null,
    facts: [
      'voice assistant with a pixel creature for a face',
      'the Pi is the body: mic ears, camera eyes, speaker mouth, 3.5" screen. A laptop runs the models so the pi processing power isnt going to be a concern',
      'reacts to news, movement, noise.  Will end up having an army of them!',
    ],
    links: [],
  },
  {
    slug: 'catblog',
    title: 'CatBlog',
    period: '2024',
    stack: 'React · REST APIs',
    image: null,
    blurb: null,
    approach: null,
    prompt: null,
    lesson: null,
    facts: [
      'built with my daughter as an excuse to learn React together <3',
      'a catalogue of our favourite online beasts, with API integrations to cat facts and cat pics.  Its a vibe.  Questionable color clash styling may have been her choice :) hah',
    ],
    links: [{ label: 'evescatblog.netlify.app', href: 'https://evescatblog.netlify.app/' }],
  }
];
