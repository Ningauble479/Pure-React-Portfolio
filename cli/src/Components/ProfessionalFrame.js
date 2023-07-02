import React, { useContext, useEffect, useState, useRef } from 'react'
import { AboutContext } from '../Context/AboutContext'
import { HackingMinigame } from './F04Terminal/HackingMinigame'
import { Canvas, useFrame } from '@react-three/fiber'
import {BsGithub} from 'react-icons/bs'
import reactGameIMG from '../Pictures/ReactGame.png'
import LuneIMG from '../Pictures/LuneIMG.jpg'
import GWTCImg from '../Pictures/GWTimeClock.png'
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

const Box = () => {
    const ref = useRef()
    useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry" args={[2, 2, 2]}/>
            <meshLambertMaterial attach="material" color="hotpink"/>
        </mesh>
    )
}

const FullCard = ({content, setActive}) => {
    return (
    <div className='cardFull'>
        <h1>{content.main}</h1>
        <div>{content.sections}</div>
        <button onClick={setActive}>Return</button>
    </div>
    )
}

const StartingOut = () => {
    return (
        <div className='flex'>
            <div className='flex flex-column width-50'>
                <h2>Gmod</h2>
                <p>As a young programmer I got into a game named <a href='https://gmod.facepunch.com/'>Gmod</a>. I even started a popular server for the game running on a roleplaying gamemode</p>
                <p>Gmod was made on the source engine however used LUA scripts to differentiate itself from other games on the same engine. After learning that I could modify the game however I wanted I began to learn lua.</p>
                <p>Learning LUA was the first step into my true dive into technology. After learning how fun coding was all I wanted to do was learn more.</p>
            </div>
            <div className='flex flex-column width-50'>
                <h2>The Elder Scrolls</h2>
                <p>As I began to grow bored of playing Gmod I was introduced to Bethesda's legendary IP The Elder Scrolls. I played Oblivion about four times over before learning you could mod the game on PC.</p>
                <p>I immediately began to make my own mods. Starting with a player home and some dungeons. I quickly began to learn that without understanding the programming language behind the games I would not be able to do much.</p>
                <p>I then attempted to learn my second programming language Papyrus. I had a hard time with it at first and didn't get as far as I would have liked but I soon moved on to something more usable to me.</p>
            </div>
        </div>
    )
}

const Career = () => {
    return (
        <div className='flex'>
            <div className='flex flex-column width-50'>
                <h2>CompTIA A+</h2>
                <p>As I began to learn about how amazing working with technology was I decided to start with the physical realm of IT and get my A+ Certification.</p>
                <p>I learned how a computer works inside and out and learned how operating systems function as well as how to maintain a physical server.</p>
                <p>I also began to learn that the more I learned about how current technology works the more I wanted to create new things and add to that technology.</p>
            </div>
            <div className='flex flex-column width-50'>
                <h2>UCI Bootcamp and Jobs</h2>
                <p>Once I decided to make the switch to programming it became very apparent that there was a lot to learn. So I decided to sign up for a bootcamp course at my local university to help me focus on learning.</p>
                <p>After completing the progam I decided to start working on some projects. With some connections I made at the bootcamp I decided to start with a tele-health platform to give myself something challenging to work on.</p>
                <p>Though the business ended up not working out it taught me enough about programming to get a job working for a company out in minnesota. They wanted me to make websites using Joomla for customers as well as work on a large project on the side.</p>
            </div>
        </div>
    )
}


const WhereAmI = () => {
    return (
        <div className='flex'>
            <div className='flex flex-column width-50'>
                <h2>Cabinetry</h2>
                <p>From the first company I worked with I met the owner of a semi-large custom cabinetry shop in the area. They liked my work and offered to directly employ me. As well as helping keep all of their physical systems running I was also making them personal software.</p>
                <p>I started with a simple time clock and was last working on an inventory management system to help keep track of how much wood we were going through and how much wood we had on hand.</p>
                <p>Sadly the owner of the shop no longer had the want to continue running the business and decided to liquidate the company.</p>
            </div>
            <div className='flex flex-column width-50'>
                <h2>Projects</h2>
                <p>I am currently working at Geek Squad to try and round out some of my physical IT skillset while I take time to work on more projects and improve my skillset.</p>
                <p>While working through some of these projects I have decided to delve back into the software engineering world in hopes that I can further expand my knowledge.</p>
                <p>With my ever expanding knowledge over all of the IT realm I hope to one day be a C-Suite employee. For now I just want to be a programmer making code and solving puzzles.</p>
            </div>
        </div>
    )
}


const startingOut = {
    main: "Starting Out",
    sections: <StartingOut/>
}

const career = {
    main: "Career",
    sections: <Career/>
}

const whereAmI = {
    main: "Where Am I Now",
    sections: <WhereAmI/>
}

const FrameTwo = () => {
    const { aboutJourney } = useContext(AboutContext)
    const [active, setActive] = useState("")
    const [content, setContent] = useState({
        main: 'Starting Out',
        sections: <StartingOut/>
    })

    const cardOpener = (active, content) => {
        setActive(active)
        setContent(content)
    }

    const setState = () => {
        setActive("")
    }

    return (
        <div className='professionalFrameTwo professionalFrame'>
            <div className="fullCardOpen">
                <FullCard content={content} setActive={setState}/>
            </div>
            <div className={active ? 'cardHolderClosed' : "cardHolderOuter"}>
                <div className='PFTAnimation'>
                <Canvas>
                    <ambientLight intensity={0.5}/>
                    <spotLight
                        position={[10, 15, 10]}
                        angle={0.3}
                    />
                    <Box/>
                </Canvas>
                </div>
                <div className={active ? 'cardHolderClosed' : 'cardHolder'}>
                    <div className='card' onClick={()=>cardOpener("Starting", startingOut)}>
                        <div className='frameText'>
                            <h4>{aboutJourney.sectionOne.header}</h4>
                            <p>{aboutJourney.sectionOne.bodySmall}</p>
                        </div>
                    </div>
                    <div className='card' onClick={()=>cardOpener("Careers", career)}>
                        <div className='frameText'>
                            <h4>{aboutJourney.sectionTwo.header}</h4>
                            <p>{aboutJourney.sectionTwo.bodySmall}</p>
                        </div>
                    </div>
                    <div className='card' onClick={()=>cardOpener("WhereAmI", whereAmI)}>
                        <div className='frameText'>
                            <h4>{aboutJourney.sectionThree.header}</h4>
                            <p>{aboutJourney.sectionThree.bodySmall}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProjectCard = ({img, desc, name, github, website}) => {
    const [active, setActive] = useState(false)
    const hover = "flex flex-column cardHover"
    const noHover = "flex flex-column cardCover"
    return (
        <a className='imgLink' href={website}>
        <div style={{backgroundImage: `url(${img})`}} className='professionalPCard' onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)}>
            <div className={active ? hover : noHover}>
                <h4>{name}</h4>
                <p>{desc}</p>
                <div className='flex'>
                        <a href={github}><BsGithub/></a>
                </div>
            </div>
            <h2>{active ? null : name}</h2>

        </div>
        </a>
    )
}

const luneDesc = "An unfinished social media platform meant to contend with Only Fans during a gap in their performance."
const gameDesc = "A full text based RPG fully made in react. Currently im hand building the systems so that I can add the actual content."
const TCDesc = "A simplistic time clock I made at one of my previous positions. Unfortunately the company went under so its no longer in use."
const FrameThree = () => {
    const { aboutProfessional } = useContext(AboutContext)
    return (
        <div className='professionalFramePadding professionalFrameThree professionalFrame'>
            <div className='frameText flex flex-column justify-center align-center'>
                <h1>Projects</h1>
                <p>These are a collection of projects I have been working on</p>
                <div className='projectCardContainer'>
                    <ProjectCard img={LuneIMG} desc={luneDesc} name={"Lune"} github={"https://github.com/MeowTaiga/Lune"} website={"https://www.instagram.com/lunenetwork/?fbclid=IwAR2SN6iijewsz8AcmCzHWvs3DiQpVCEUHL3Meftze6dpykQdVsFjZYPFrXM"}/>
                    <ProjectCard img={reactGameIMG} desc={gameDesc} name={"Untitled Game"} github={"https://github.com/Ningauble479/ReactGame"} website={"https://github.com/Ningauble479/ReactGame"}/>
                    <ProjectCard img={GWTCImg} desc={TCDesc} name={"Time Clock"} github={"https://github.com/Ningauble479/GreatWoods-TimeClock"} website={"https://github.com/Ningauble479/GreatWoods-TimeClock"}/>
                </div>
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