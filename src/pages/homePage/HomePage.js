import React, { useEffect, useState, useRef } from 'react';
import SkillText from '../../components/skillText/SkillText';
import './_homePage.scss';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import AllProjects from '../../components/allProjects/AllProjects';
import { useDispatch, useSelector } from 'react-redux';
import { homePageLoading } from '../../redux/actions/actions';
import Loader from '../loader/Loader';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
    const [showSkillText, setShowSkillText] = useState(true);
    const [makeScroll, setMakeScroll] = useState(true);
    const [lockScroller, setLockScroller] = useState(false);

    let locationOne;
    let locationTwo;

    const sectionOneRef = useRef(null);
    const sectionTwoRef = useRef(null);
    const homePage = useRef(null);

    const h = useRef(null);
    const i = useRef(null);
    const y = useRef(null);
    const o = useRef(null);
    const u = useRef(null);
    const point = useRef(null);

    const buttonOne = useRef(null)
    const buttonTwo = useRef(null)
    const buttonThree = useRef(null)
    const buttonFour = useRef(null)
    const buttonContact = useRef(null)

    const tl = useRef();

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const projectIsOpen = useSelector(state=> state.projectIsOpen);
    const backgroundColor = useSelector(state => state.color);
    const textColor = useSelector(state => state.textColor);

    // Manage load
    // useEffect(()=>{
    //     window.addEventListener('load', (event) => {
    //         setTimeout(()=>{
    //             dispatch(homePageLoading())
    //             window.scrollTo(0, 0);
    //         }, 5000)
    //     });
    // })

    //TL Manage scrolltrigger
    useEffect(() => {
        let sectionOneSelect = document.querySelector("#root > div > main > section.sectionOne")
        let sectionTwoSelect = document.querySelector("#root > div > main > section.sectionTwo")
        if(!isLoading){
            tl.current = gsap.timeline({
                defaults:{
                    duration: 0.2,
                    ease: "Power4.inOut"
                },
                scrollTrigger: {
                    trigger: sectionTwoSelect,
                    start: "top 50%",
                    toggleActions: "play complete reverse reverse",
                }
            })
            .to(
                h.current, {
                    rotationY: -180,
                }, "-=0.1"
            )
            .to(
                i.current,{
                    rotationY: -180,
                }, "-=0.1"
            )
            .to(
                y.current,{
                    rotationY: -180,
                }, "-=0.1"
            )
            .to(
                o.current,{
                    rotationY: -180,
                }, "-=0.1"
            )
            .to(
                u.current,{
                    rotationY: -180,
                }, "-=0.1"
            )
            .to(
                point.current,{
                    rotationY: -180,
                }, "-=0.1"
            )
            .reverse()
        }
    }, [isLoading])

    //TL Manage appartion background text
    useEffect(()=>{
        if(!isLoading){
            setTimeout(()=>{}, 2000)
            tl.current = gsap.timeline({
                defaults: {
                    duration: 0.1,
                    ease: "Power2.inOut",
                    opacity: 1
                }
            })
            .to(h.current,{
                y: 0,
            })
            .to(i.current,{
                y: 0
            })
            .to(y.current,{
                y: 0
            })
            .to(o.current,{
                y: 0
            })
            .to(u.current,{
                y: 0
            })
            .to(point.current,{
                y: 0
            })
        }
    }, [isLoading])

    //manage project apparition
    useEffect(()=>{
        if(lockScroller){
            tl.current = gsap.timeline({
                defaults: {
                    duration: 0.05,
                    ease: "Power2.inOut",
                    opacity: 1
                }
            })
            .to(h.current,{
                y: 300,
            })
            .to(i.current,{
                y: 300
            })
            .to(y.current,{
                y: 300
            })
            .to(o.current,{
                y: 300
            })
            .to(u.current,{
                y: 300
            })
            .to(point.current,{
                y: 300
            }) 
            .to(buttonOne.current, {
                y:40
            }, 0)    
            .to(buttonTwo.current, {
                y:40
            }, '<0.09')  
            .to(buttonThree.current, {
                y:40
            }, '<0.09')  
            .to(buttonFour.current, {
                y:40
            }, '<0.09')   
            .to(buttonContact.current, {
                y:40
            }, '<') 
        }else if(!isLoading && !lockScroller){
            tl.current = gsap.timeline({
                defaults: {
                    duration: 0.04,
                    ease: "Power2.inOut",
                    opacity: 1
                }
            })
            .to(h.current,{
                y: 0,
            })
            .to(i.current,{
                y: 0
            })
            .to(y.current,{
                y: 0
            })
            .to(o.current,{
                y: 0
            })
            .to(u.current,{
                y: 0
            })
            .to(point.current,{
                y: 0
            })   
            .to(buttonOne.current, {
                y:0,
                duration: 0.6
            }, 0)    
            .to(buttonTwo.current, {
                y:0,
                duration: 0.6
            }, '<')  
            .to(buttonThree.current, {
                y:0,
                duration: 0.6
            }, '<')  
            .to(buttonFour.current, {
                y:0,
                duration: 0.6
            }, '<')
            .to(buttonContact.current, {
                y:0
            }, '<') 
        }
    }, [lockScroller])

    //TL Manage scroll section apparition
    useEffect(() => {
        let sectionOneSelect = document.querySelector("#root > div > main > section.sectionOne")
        let sectionTwoSelect = document.querySelector("#root > div > main > section.sectionTwo")
        if (sectionTwoSelect !== null && sectionOneSelect !== null) {
            locationOne = sectionOneSelect.offsetTop;
            locationTwo = sectionTwoSelect.offsetTop;
        }
    }, [])

    /* Creating an observer that will trigger the scrollTo function when the user scrolls up or down. */
    useEffect(()=>{
        if (makeScroll && projectIsOpen===false) {
            Observer.create({
                target: homePage.current,
                type: "wheel",
                onDown: () => {
                    gsap.to(window, { duration: 1, scrollTo: locationTwo, ease: "power1.out" });
                },
                onUp: () => {
                        gsap.to(window, { duration: 1, scrollTo: locationOne, ease: "power1.out" });
                },
                tolerance: 10,
                preventDefault: true,
            })
        }
    }, [])

    const sendMail = ()=>{
        window.open('mailto:casteranicolas.contact@gmail.com?subject=Do%20we%20work%20together?&body=Hi%20Nicolas!')
    }

    /**
     * It returns a section element with a ref attribute that references the sectionTwoRef variable, a
     * className attribute that references the sectionTwo class, and a child element that is the
     * AllProjects component
     * @returns A section with the className of sectionTwo.
     */
    const sectionTwo = () => {
        return (
            <section ref={sectionTwoRef}className="sectionTwo" style={projectIsOpen ? {zIndex: "10000"}: {zIndex: "0"}}>
                <AllProjects observer={locationTwo} location={sectionTwoRef} setLockScroller={setLockScroller} lockScroller={lockScroller} />
            </section>
        )
    }

    return (
        <>  
            {
                /* A ternary operator that checks if the isLoading variable is true. If it is, it will
                return the Loader component. If it is not, it will return null. */
                isLoading ? <Loader /> : null
            }
            <header className='homePageHeader'>
                <div className="topContainer">
                    <div className="titleContainer">
                        <h1 style={{color: textColor}} className='title'>Nicolas Castera</h1>
                        <h2 style={{color: textColor}} className="skill">Frontend developper</h2>
                    </div>
                </div>
            </header>
            <main ref={homePage} className='homePageMain' style={{backgroundColor: backgroundColor}}>
                <div className="hiYou">
                    <div className='hiYouContainer'>
                        <div ref={h} className="cards">
                            <span className="front">h</span>
                            <span className="back">m</span>
                        </div>
                        <div ref={i} className="cards">
                            <span className="front">i</span>
                            <span className="back">y</span>
                        </div>
                        <div ref={y} className="cards">
                            <span className="front">Y</span>
                            <span className="back">W</span>
                        </div>
                        <div ref={o} className="cards">
                            <span className="front">o</span>
                            <span className="back">o</span>
                        </div>
                        <div ref={u} className="cards">
                            <span className="front">u</span>
                            <span className="back">r</span>
                        </div>
                        <div ref={point} className="cards">
                            <span className="front">.</span>
                            <span className="back">k</span>
                        </div>
                    </div>
                </div>
                {/* <section ref={sectionOneRef} className="sectionOne" > */}
                <section ref={sectionOneRef} className={projectIsOpen ? "sectionOne invisible" : "sectionOne"} >
                    <SkillText timeline={tl} translate={200} show={showSkillText} observation={locationTwo} />
                </section>
                {
                    makeScroll ? sectionTwo() : null
                }
            </main>
            <footer>
                <div className="bottomContainer">
                    <div className="reseauxContainer">
                        <div className="buttonContainer">
                            <button ref={buttonOne} className="reseaux github" onClick={()=> window.open("https://github.com/magicniclus")}>Github</button>
                        </div>
                        <div className="buttonContainer">
                            <button ref={buttonThree} className="reseaux twitter" onClick={()=> window.open("https://twitter.com/CasteranicolasC")}>Twitter</button>
                        </div>
                        <div className="buttonContainer">
                            <button ref={buttonFour} className="reseaux linkedin" onClick={()=> window.open("https://www.linkedin.com/in/nicolas-castera-771a45a6/")}>Linkedin</button>
                        </div>
                    </div>
                    <div className="contactContainer">
                        <div className="buttonContainer">
                            <button onClick={sendMail} ref={buttonContact} className="contact">Contact</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomePage;