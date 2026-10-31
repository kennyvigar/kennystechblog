import './App.css';

// Post body only. The title and date live in postRegistry.js and are rendered
// by Blog.js, so there is no date div and no <h2> in here.
//
// Dictated by Kenny on 2026-10-31. Transcribed and cleaned of spoken filler and
// false starts, nothing else. One correction he gave mid-dictation is applied:
// "additional features", not "additional tooling".

function Oct312026() {
    return (
        <>
        <div className='blog-post'>
        <p>I've been looking at the output of job boards like Indeed or LinkedIn, where the value add on a premium account is to provide an almost endless stream of jobs and opportunities. But in reality the problem is that there is a finite number of roles you qualify for as a top candidate, and there are a lot of people competing against you for them.</p>
        <p>So I've created a new project that I've been using for a couple of weeks now, where I build myself a dashboard with Claude using specification-driven development.</p>
        <p>I know people use AI for their job searches, but this one is unique in a way, in that it is not going to give endless opportunities that do not fit your skill. It accurately tracks the ones you apply for, and you can add skill blocks to it. Let's say you don't, and you keep seeing Kubernetes posts come up with deep knowledge. And you're just like, why am I getting this recommendation? You can block that.</p>
        <p>It hits the same job aggregators that LinkedIn uses and does comparisons against the different platforms, Workday, Greenhouse, the Job Bank. Then it parses the resume you gave it, as a human written source, and compares it to the posting.</p>
        <img className="Pic" src={process.env.PUBLIC_URL + '/jobscout.webp'} alt="job scout dashboard" width="250" height="100"/>
        <p>It gives you a health score for the role. Of course it does. You know I'm all about the health scores. And it bases it all on the fit between the job posting and your resume.</p>
        <p>When you set it up, you also provide it a human written cover letter. I really did try to humanize it. I used the humanizer package, I tried to finesse the AI with verbiage from myself, and it is still just so terrible. I can't submit content to someone that is so terribly written, i.e. AI documentation. So I build my own cover letter still. But I do have the tool display the cover letter with the date swapped for the month, and with the role and the company in it. There will be some additional features I bake in there to make the cover letter a little more dynamic, and you can obviously select different cover letters.</p>
        <p>The cool thing about it is that the dashboard gives you the cover letter as plain text. Now you wrote this. So after it has been surgically edited, you copy it out to your document app of choice, Google Docs or whatever you use, give it a quick format if you like, and review it.</p>
        <p>The point of all of this is that it is still a manual process, to make sure you are not submitting yourself as garbage AI slop to these recruiters. If you do get in front of them, you just don't want to blow that shot. That is why I keep this tool as more of a detail gatherer, and then you take these details and manually run through the process.</p>
        <p>And honestly, in this age of AI we are in right now, where we are kind of backwards engineering existing applications, I do feel like the $20 Claude subscription is better than the $40 LinkedIn subscription based on the features I built. The only difference is that the social network game on LinkedIn is where you are seen.</p>
        <p>But it has been a very interesting tool. It should be able to be set up by anybody. It does benefit from having an agentic subscription of any kind, so you can keep the whole process dynamic. I haven't explored the idea of making it static yet, but I think it's worth it. And it's got me hitting probably 60 jobs a week in some cases. So it's very cool.</p>
        <p>Keep me posted, of course, on what you're building.</p>
        </div>
        </>
    );
}

export default Oct312026;
