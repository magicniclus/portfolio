import React, { useEffect, useState, useRef  } from 'react';
import "./_skillText.scss"
import moi from "../../assets/me/moi-optimizate.jpg"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const SkillText = (props) => {
    const showLight = ["js", "gsap", "react", "jest", "sass"];

    const [showSkillText, setShowSkillText] = useState(false);

    const [light, setLight] = useState("");

    const text = useRef(null);
    const image = useRef(null);

    useEffect(()=>{
        udateLight()
    }, [])

    const udateLight = ()=>{
        setInterval(async ()=>{
            const randomIndex = Math.floor(Math.random()*5)
            await setLight(showLight[randomIndex])
        }, numberRandom(2000, 6000))
    }

    const numberRandom = (min, max)=>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className={showSkillText ? "skillTextContainer visible" : "skillTextContainer"}>
            <div ref={text}  onMouseEnter={()=>setShowSkillText(true)}  className='lignContainer'>
                <div className="lignOneContainer container">
                    <p className='lign lignOne'>It is a long established fact that a reader will be distracted <span className={light === "js" ? 'jsText show' : "jsText"}>Js</span></p>
                </div> 
                <div className="lignTwoContainer container">
                    <p className="lign lignTwo">when lookingat its layout. The point of using more-or-less sites</p> 
                </div>
                <div className="lignThreeContainer container">
                    <p className="lign lignThree">Lorem Ipsum is that it has a more-or-less normal distribution, </p>
                </div>
                <div className="lignFourContainer container">
                    <p className="lign lignFour">as opposed to using 'Conten tweb sites still in here sometimes.</p>
                </div>
                <div className="lignFiveContainer container">
                    <p className="lign lignFive">'lorem ipsum' will uncover many sites still in Ipsum <span className={light === "gsap" ? 'gsapText show' : "gsapText"}>Gsap</span> infancy. </p>
                </div>
                <div className="lignSixContainer container">
                    <p className="lign lignSix">Now use Many desktop <span className={light === "react" ? 'reactText show' : "reactText"}>react</span> packages and web page editors </p> 
                </div>
                <div className="lignSevenContainer container">
                    <p className="lign lignSeven">It is a long established sometimes by accident<span className={light === "jest" ? 'jestText show' : "jestText"}>jest</span> will be distracted.</p>
                </div>
                <div className="lignEightContainer container">
                    <p className="lign lignEight">Now use Lorem Ipsum as their default model text, and a search for</p>
                </div>
                <div className="lignNineContainer container">
                    <p className="lign lignNine">'lorem ipsum' will still in The point of using<span className={light === "sass" ? 'sassText show' : "sassText"}>Sass</span> infancy. Various </p>
                </div>
                <div className="lignTenContainer container">
                    <p className="lign lignTen">versions have evolved over the years, sometimes by accident</p>
                </div>
            </div>
            <div ref={image} className="imgContainer">
                <img src={moi} alt="Nicolas Castera" />
            </div>
        </div>
    );
};

export default SkillText;