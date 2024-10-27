import './App.css';

function Oct25() {
    return (
        <>
        <div className='blog-post'>
        <div className='datestyle h3'>Oct25st</div>
        <p>Hey, first post.  Initial commit.   Might as well share something though I guess hey?</p>
        <p>For my SQL and DBA nerds out there - here is Powershell script to dynamically identify all SQL servers in your Active Directory and check each database on each server to see if it's missing a backup in the last 24 hours.</p>
        <br></br>
        <p>Get this - it'll email ya too!</p>
        <p></p>
        <a href="https://github.com/kennyvigar/someSQLStuff/blob/main/SQLBackupReport.ps1">Kenny's Github</a>
        </div>
        </>
    );
}

export default Oct25;