import './App.css';

function About() {
  return (
    <div className="Container">
        <img className="Pic" src={process.env.PUBLIC_URL + 'Unhooded-KennyMcCormick.webp'} alt="moustache!" />

        <div className="Blurb">
        <p>techology i'm familiar with... there's more even!</p>  
          <ul>
            <li>database administration (sql server, mongo, oracle)</li>
            <li>automation scripting (powershell, node, python)</li>
            <li>aws and terraform (s3, ecs, eventbridge, step functions, secret vaults, etc)</li>
            <li>data engineering (sql, python, node, experienced with big data and pipeline builds)</li>
            <li>react (jsx, html, css (ugh..), bootstrap, stylized compontents,hooks)</li>
            <li>integrations (rest api, mqtt, sftp, etl)</li>
          </ul>
        <p>other cool stuff i enjoy</p>
        <ul>
            <li>lowkey games like animal crossing</li>
            <li>music</li>
            <li>aws and terraform (s3, ecs, eventbridge, step functions, secret vaults, etc)</li>
            <li>data engineering (sql, python, node, experienced with big data and pipeline builds)</li>
            <li>react (jsx, html, css (ugh..), bootstrap, stylized compontents,hooks)</li>
            <li>integrations (rest api, mqtt, sftp, etl)</li>
          </ul>
        </div>
      </div>
  );
}

export default About;