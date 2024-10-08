import './App.css';
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Penguin from "./Components/penguin/penguin";

function App() {
    const [visible, setVisible] = useState(false);
    const [read, setRead] = useState(false);
    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 60){
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            
        })
    }
    return (<>
    {visible ? <button onClick={handleScrollToTop} className={"scroll-to-top-button"}>^</button> : ''}
        <header>
            <h1>Portfolio</h1>
            <nav>
                <a className={"nav-link"} href={"#project"}>Projects</a>
                <a className={"nav-link"} href={"#contact"}>Contact</a>
            </nav>
        </header>
        <main>
            <section id={'hero'} className="hero">
                <h1>Welcome to my Portfolio!I am PhyoThiha a front-end Webdeveloper.</h1>
                <div className='about-hero'>
                <Penguin />
                <h1 className='introduction'>Hello! My name is PHYO THI HA. I was born on {read ? (<>November 24th 1996 in Myanmar Yangon by my father U MIN LWIN and my mother DAW YIN YIN Hla. I have one brother who is 6 years younger than me. I graduated from No.5 Education High School Botahtaung. My current education status is Dagon University English Major and learning programming at <a href='https://www.freecodecamp.org/'>FreeCodeCamp</a>. I like fantasy and mysteries although they are not real 😅. Above all I like to become a developer because I like to learn something incredible every seconds.</>) : ""}
                    <div onClick={()=>setRead(!read)} className='read-button'>{read ? 'read less...' : 'read more...'}</div>
                </h1>
                </div>
                <div className={'content'}>
                    <div className={'content-container'}>
                        <div className={'content-heading-container'}>
                        <h1 className={'skill-heading'}>Skills</h1>
                        <div className={"line"}></div>
                        </div>
                    <div className={'skill-wrapper'}>
                    <div className={'skill-container'}>
                    <i className="fa-brands fa-html5 fa-5x"></i>
                        <h1 className={'skill-title'}>HTML</h1>
                    </div>
                    <div className={'skill-container'}>
                    <i className="fa-brands fa-css3-alt fa-5x"></i>
                        <h1 className={'skill-title'}>CSS</h1>
                    </div>
                    <div className={'skill-container'}>
                    <i className="fa-brands fa-js fa-5x"></i>
                        <h1 className={'skill-title'}>JavaScript</h1>
                    </div>
                    <div className={'skill-container'}>
                    <i className="fa-brands fa-react fa-5x"></i>
                        <h1 className={'skill-title'}>ReactJs</h1>
                    </div>
                    </div>
                    </div>
                    <div className={'content-container'}>
                    <h1 className={'exp-heading'}>Level: 5months Exp🏅🏅🏅🏅🏅</h1>
                    <div className={'exp-content'}>
                        <img className={'exp-img'} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCzA-fq6o_OlsV6jvzVLU0qYLCU8uGoscJatjLn-_8nJ1u95T7ga2HjxLEpKqEAg_ogA&usqp=CAU"} alt={'mml'} />
                        <h1 className={'exp-text'}>Myanmar Media LinkAge</h1>
                    </div>
                    </div>
                    <div className={'content-container'}>
                        <div className={'content-heading-container'}>
                        <h1 className={'skill-heading'}>Certificates</h1>
                        <div className={"line"}></div>
                        </div>
                        <div className={'certificate-content'}>
                            <a target='_blank' href='https://www.freecodecamp.org/certification/PHYOTHIHA1056/responsive-web-design' className='certificate-link'>
                        <img className={'certificate-img'} src={"./images/responsive web design.png"} alt={'mml'} />
                        <h1 className={'certificate-text'}>Responsive Web Design</h1>
                        </a>
                    </div>
                    </div>
                </div>
            </section>

            <section id={"project"} className={"project"}>
                <h1>My Projects</h1>
                <div className={'project-container'}>
                    <div className={'project-wrapper'}>
                        <a target={"_blank"} rel={"noreferrer"} className={'project-link'} href={'https://randomquotemachinephyothiha.netlify.app'}>
                        <img className={"project-img"} src={'./images/quotemachine.png'} alt={'quotemachine'} />
                        <h1 className={"project-name"}>Random Quote Machine</h1>
                        </a>
                    </div>
                    <div className={'project-wrapper'}>
                        <a target={"_blank"} rel={"noreferrer"} className={'project-link'} href={'https://reacttechnicaldocumentation.netlify.app'}>
                        <img className={"project-img"} src={'./images/technicaldoc.png'} alt={'reactdoc'} />
                        <h1 className={"project-name"}>React Documentation</h1>
                        </a>
                    </div>
                    <div className={'project-wrapper'}>
                        <a target={"_blank"} rel={"noreferrer"} className={'project-link'} href={'https://productlandingpagephyothiha.netlify.app'}>
                        <img className={"project-img"} src={'./images/productlandingpage.png'} alt={'productlandingpage'} />
                        <h1 className={"project-name"}>Product Landing Page</h1>
                        </a>
                    </div>
                </div>
            </section>
            <section id={"contact"} className={"contact"}>
                <h1>Contact📜📜📜</h1>
                <h1>Address: 🏠Yangon, Thaketa, HtuParYone front 5th street, No.1268.</h1>
                <h1>Tel: 📞09758454815</h1>
                <h1>Email: 📧phyothiha97531@gmail.com</h1>
            </section>
        </main>
    </>);
}

export default App;
