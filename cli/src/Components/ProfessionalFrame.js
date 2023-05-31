import React, { useContext, useEffect, useState } from 'react'
import { AboutContext } from '../Context/AboutContext'
import { HackingMinigame } from './F04Terminal/HackingMinigame'


const FrameOne = () => {
    const { about, aboutMain } = useContext(AboutContext)
    const [animationFrame, setAnimationFrame] = useState("backgroundTop")
    useEffect(()=>{
        const animationOne = ["frame1", "frame2"]
        const intervalId = setInterval(()=>{
            console.log(animationFrame)
            if(animationOne.indexOf(animationFrame) >= animationOne.length-1){
                setAnimationFrame(animationOne[0])
            } else {
                // console.log(animationOne[animationOne.indexOf(animationFrame) + 1])
                setAnimationFrame(animationOne[animationOne.indexOf(animationFrame) + 1])
            }
        },500)
        return () => {
            clearInterval(intervalId)
        }
    },[animationFrame])
    return (
        <div className='gradientFade aboutFrameOne professionalFrame'>
            <div className={animationFrame}></div>
            <div className='aboutFrameHeader'>
                <div className='aboutFramePicture u-non-blurred'> 
                    <p></p>
                </div>
                <div className='aboutFrameInfo u-non-blurred'>
                    <h1 className='name'>{about.name}</h1>
                    <p className='location'>Location: {about.location}</p>
                    <p className='age'>Age: {about.age}</p>
                    <p className='jobTitle'>Title: {about.jobTitle}</p>
                    <p className='smallerText'>Bio: {aboutMain} </p>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

const FrameTwo = () => {
    const { aboutJourney } = useContext(AboutContext)
    return (
        <div className='professionalFrameTwo professionalFrame'>
            <div className='cardHolder'>
                <div className='card'>
                    <div className='frameText'>
                        <h4>{aboutJourney.sectionOne.header}</h4>
                        <p>{aboutJourney.sectionOne.bodySmall}</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='frameText'>
                        <h4>{aboutJourney.sectionTwo.header}</h4>
                        <p>{aboutJourney.sectionTwo.bodySmall}</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='frameText'>
                        <h4>{aboutJourney.sectionThree.header}</h4>
                        <p>{aboutJourney.sectionThree.bodySmall}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FrameThree = () => {
    const { aboutProfessional } = useContext(AboutContext)
    return (
        <div className='professionalFramePadding professionalFrameThree professionalFrame'>
            <div className='frameText'>
                <h1>Professional Career</h1>
                <p>{aboutProfessional}</p>
            </div>
        </div>
    )
}

const FrameFour = () => {
    const{ aboutCurrent } = useContext(AboutContext)
    return (
        <div className='professionalFramePadding professionalFrameFour professionalFrame'>
            <div className='backdropFilter'></div>
            <div className='flex flex-row background backdropFilter flex-align-center'>
                <div style={{width: '50vw'}} className='u-non-blurred geekSquadPicture'></div>
                <div className='professionalFrameText'>
                    <h1 className='u-non-blurred'>Current Life</h1>
                    <p className='u-non-blurred'>{aboutCurrent}</p>
                </div>
            </div>
        </div>
    )
}

const FrameFive = () => {
    const { aboutPlans } = useContext(AboutContext)
    return (
        <div className='professionalFramePadding professionalFrameFive professionalFrame'>
            <h1>Plans For The Future</h1>
            <p>{aboutPlans}</p>
        </div>
    )
}

const FrameSix = () => {
    const { aboutHobbies } = useContext(AboutContext)
    return (
        <div className='professionalFramePadding professionalFrameSix professionalFrame'>
            <h1>Hobbies</h1>
            <p>{aboutHobbies}</p>
        </div>
    )
}

export const ProfessionalFrame = ({frameNumber}) => {
    switch(frameNumber) {
        case 1:
            return <FrameOne/>;
        case 2:
            return <FrameTwo/>;
        case 3:
            return <FrameThree/>;
        case 4:
            return <FrameFour/>;
        case 5:
            return <FrameFive/>;
        case 6:
            return <FrameSix/>;
        case 7:
            return <HackingMinigame/>
        default:
            break;
    }
        
}