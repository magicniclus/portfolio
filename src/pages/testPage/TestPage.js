import React from 'react';
import { useState, useEffect } from 'react';
import "./_testPage.scss";

const TestPage = () => {

    const [active, setActive] = useState(false)
    const [secondShow, setSecondShow] = useState(false)
    const [blockActive, setBlockActive] = useState(null)

    const [blockOne, setBlockOne] = useState("blockOne block colorOne")
    const [blockTwo, setBlockTwo] = useState("blockTwo block colorTwo")
    const [blockThree, setBlockThree] = useState("blockThree block colorThree")
    const [blockFour, setBlockFour] = useState("blockFour block colorFour")

    const handleNameBlock = (index)=>{
        if(index === 1){
            setBlockOne("blockOne block active colorOne")
            setBlockTwo('blockTwo block colorTwo')
            setBlockThree("blockThree block colorThree")
            setBlockFour("blockFour block colorFour")
        }else if(index === 2){
            setBlockOne("blockTwo block colorOne")
            setBlockTwo('blockOne block active colorTwo')
            setBlockThree("blockTwo block colorThree")
            setBlockFour("blockThree block colorFour")
        }else if(index === 3){
            setBlockOne("blockThree block colorOne")
            setBlockTwo('blockTwo block colorTwo')
            setBlockThree('blockOne block active colorThree')
            setBlockFour("blockTwo block colorFour")
        }else if(index === 4){
            setBlockOne("blockFour block colorOne")
            setBlockTwo('blockThree block colorTwo')
            setBlockThree('blockTwo block colorThree')
            setBlockFour('blockOne block active colorFour')
        }
    }

    const handleClick = (value)=>{
        setActive(true)
        setBlockActive(value)
        handleNameBlock(value)
    }

    const handleClickBack = ()=>{
        setActive(false)
        setSecondShow(true)
    }

    const containerLeft = ()=>{
        return(
            <div className="containerLeft">
                <div onClick={handleClickBack} className='back'>Back</div>
            </div>
        )
    }

    const makeClassName = ()=>{
        if(active) return "testPageContainer containerActive"
        else if (secondShow) return "testPageContainer secondShow"
        else return "testPageContainer"
    }

    return (
        <div className='globalContainer'>
            {
                active ? containerLeft() : null
            }
            <div className={makeClassName()}>
                <div className="blockContainer">
                    <div className={blockOne} onClick={()=>handleClick(1)}>One</div>
                    <div className={blockTwo} onClick={()=>handleClick(2)}>Two</div>
                    <div className={blockThree} onClick={()=>handleClick(3)}>Three</div>
                    <div className={blockFour} onClick={()=>handleClick(4)}>Four</div>
                </div>
            </div>
        </div>
    );
};

export default TestPage;