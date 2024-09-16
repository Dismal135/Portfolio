import './App.css';

function App() {
  return (
      <>
      <header>
        <h1>Portfolio</h1>
        <nav id="navbar">
          <a href={"#welcome-section"}>About</a>
          <a href={"#project"}>Projects</a>
          <a href={"#footer"}>Contact</a>
        </nav>
      </header>
  <main>
    <section id="welcome-section">
      <h1>Hi! I am Phyo Thiha <span>a Front end web developer.</span></h1>
    </section>

    <section id="projects">
      <h1>These are some of my projects</h1>
      <div className="projects">
        <div className="project">
          <img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg" alt="#"/>
            <div className="project-tile">lorem ipsum</div>
        </div>
        <div className="project">
          <img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png" alt="#"/>
            <div className="project-tile">lorem ipsum</div>
        </div>
        <div className="project">
          <img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png" alt="#"/>
            <div className="project-tile">lorem ipsum</div>
        </div>
        <div className="project">
          <img className="project-img" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/map.jpg" alt="#"/>
            <div className="project-tile">lorem ipsum</div>
        </div>
      </div>
      <a href={"#footer"} id="show">Show All <span>></span></a>
    </section>
  </main>
  <footer id="footer">
    <section id="upper">
      <div id="description">
        <h1>Let's work together...</h1>
        <p>Do you like coffee?</p>
      </div>
      <div id="icons">
        <div className="icon">
          <a href={"#footer"} className="fa fa-facebook"><span>Facebook</span></a>
        </div>
        <div>
          <a href={"#footer"} className="fa fa-facebook"><span>Facebook</span></a>
        </div>
        <div>
          <a href={"#footer"} className="fa fa-facebook"><span>Facebook</span></a>
        </div>
        <div>
          <a href={"#footer"} className="fa fa-facebook"><span>Facebook</span></a>
        </div>
      </div>
    </section>

    <section id="bottom">
      <p>© Created for freeCodeCamp</p>
    </section>
  </footer>
  </>
  );
}

export default App;
