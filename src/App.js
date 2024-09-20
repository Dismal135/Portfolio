import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
    return (<>
        <header>
            <h1>Portfolio</h1>
            <nav>
                <a href={"#hero"}>Hero</a>
                <a href={"#project"}>Projects</a>
            </nav>
        </header>
        <main>
            <section id={'hero'} className="hero">
                <h1>Welcome to my Portfolio!I am PhyoThiha a front-end Webdeveloper.</h1>
                <div className={'content'}>
                    <div className={'content-container'}>
                    <h1 className={'skill-heading'}>Skills</h1>
                    <div className={'skill-wrapper'}>
                    <div className={'skill-container'}>
                    <i class="fa-brands fa-html5 fa-5x"></i>
                        <h1 className={'skill-title'}>HTML</h1>
                    </div>
                    <div className={'skill-container'}>
                    <i class="fa-brands fa-css3-alt fa-5x"></i>
                        <h1 className={'skill-title'}>CSS</h1>
                    </div>
                    <div className={'skill-container'}>
                    <i class="fa-brands fa-js fa-5x"></i>
                        <h1 className={'skill-title'}>JavaScript</h1>
                    </div>
                    <div className={'skill-container'}>
                    <i class="fa-brands fa-react fa-5x"></i>
                        <h1 className={'skill-title'}>ReactJs</h1>
                    </div>
                    </div>
                    </div>
                    <div className={'content-container'}>
                    <h1 className={'exp-heading'}>Level: 5months Exp</h1>
                    <div className={'exp-content'}>
                        <img className={'exp-img'} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCzA-fq6o_OlsV6jvzVLU0qYLCU8uGoscJatjLn-_8nJ1u95T7ga2HjxLEpKqEAg_ogA&usqp=CAU"} alt={'mml'} />
                        <h1 className={'exp-text'}>Myanmar Media LinkAge</h1>
                    </div>
                    </div>
                </div>
            </section>

            <section id={"project"} className={"project"}>
                <h1>My Projects</h1>
                <div className={'project-container'}>
                    <div className={'project-wrapper'}>
                        <a className={'project-link'} href={'https://randomquotemachinephyothiha.netlify.app'}>
                        <img className={"project-img"} src={'./images/quotemachine.png'} alt={'quotemachine'} />
                        <h1 className={"project-name"}>Random Quote Machine</h1>
                        </a>
                    </div>
                    <div className={'project-wrapper'}>
                        <a className={'project-link'} href={'https://reacttechnicaldocumentation.netlify.app'}>
                        <img className={"project-img"} src={'./images/technicaldoc.png'} alt={'reactdoc'} />
                        <h1 className={"project-name"}>React Documentation</h1>
                        </a>
                    </div>
                    <div className={'project-wrapper'}>
                        <a className={'project-link'} href={'https://productlandingpagephyothiha.netlify.app'}>
                        <img className={"project-img"} src={'./images/productlandingpage.png'} alt={'productlandingpage'} />
                        <h1 className={"project-name"}>Product Landing Page</h1>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    </>);
}

export default App;
