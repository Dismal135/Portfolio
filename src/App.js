import './App.css';

function App() {
    return (<>
        <header>
            <h1>Portfolio</h1>
            <nav>
                <a href={"#hero"}>About</a>
                <a href={"#project"}>Projects</a>
                <a href={"#contact"}>Contact</a>
            </nav>
        </header>
        <main>
            <section id="hero">
                <div className="avatar"></div>
                <h1>Hi! I am PhyoThiha a Front end web developer.<a className={"readmore-button"} href={"#hero"}>Read
                    More...</a></h1>
                <div className={'wrapper'}>
                    <h1>Skills<p>Html, Css, JavaScript, ReactJs, JavaScript Libraries, PHP</p></h1>
                    <h1>Experience<p>MyanmarMediaLinkAge(1year)</p></h1>
                </div>
                <div className={'wrapper'}>
                    <h1>From<p>Yangon,Thaketa</p></h1>
                    <h1>BirthDate<p>24/11(Novemember)/1996</p></h1>
                    <h1>Graduate From<p>No.5 Education High School Botahtaung</p></h1>
                    <h1>Education<p>Civil-Engineering (Thanlyin Technology University), Dagon University English Major
                        Distance</p></h1>
                </div>
            </section>

            <section id={"project"}>
                <h1>My Projects</h1>
                <div className={'wrapper'}>
                    <a className={"project-link"} href={"https://randomquotemachinephyothiha.netlify.app"}
                       target={'_blank'} rel={'noreferrer'}>
                        <img className={'project-img'} src={'/images/quotemachine.png'} alt={"quotemachine"}/>
                        <h1 className={'project-title'}>Random Quote Machine</h1>
                    </a>
                </div>
                <div className={'wrapper'}>
                    <a className={"project-link"} href={"https://reacttechnicaldocumentation.netlify.app"}
                       target={'_blank'} rel={'noreferrer'}>
                        <img className={'project-img'} src={'/images/technicaldoc.png'} alt={"technicaldocument"}/>
                        <h1 className={'project-title'}>Technical Documentation</h1>
                    </a>
                </div>
                <div className={'wrapper'}>
                    <img className={'project-img'} src={'/images/quotemachine.png'} alt={"quotemachine"}/>
                    <h1 className={'project-title'}>Random Quote Machine</h1>
                </div>
                <div className={'wrapper'}>
                    <img className={'project-img'} src={'/images/quotemachine.png'} alt={"quotemachine"}/>
                    <h1 className={'project-title'}>Random Quote Machine</h1>
                </div>
            </section>
        </main>
    </>);
}

export default App;
