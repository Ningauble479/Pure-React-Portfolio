import React, { createContext } from 'react'

export const AboutContext = createContext("")

export const AboutArea = ({children}) => {

    const about = {
        name: "Devon Owen",
        location: "Eden Prairie, MN",
        age: "26",
        jobTitle: "Repair Agent"
    }
    const aboutMain = "I am an experienced web developer with a passion for IT. Ive spent many years honing my JS and React skill set as well as becoming very knowledgeable in help desk support. Not only do I know my way around a computer i'm also able to program on it."
    const aboutJourney = {
        sectionOne: {
            header: "Starting Out",
            bodySmall: "I started with lua script at a young age. Gaming played a large part in my programming skillset.",
            bodyLarge: "More Info Here"
        },
        sectionTwo: {
            header: "Careers Beginning",
            bodySmall: "My professional career started with a boot camp course. Through this course I made important connections and began learning react.",
            bodyLarge: "More Info Here"
        },
        sectionThree: {
            header: "Where I am at",
            bodySmall: "Currently I am working towards perfecting my programming skill set and further improving my control of javascript.",
            bodyLarge: "More Info Here"
        }
    }
    const aboutProfessional = "After years of editing and modifying games and learning how to do basic things like set up a raspberry pi, jailbreaking kids phones at school and even modding my xbox360 I decided that I wanted to start learning at a professional level. I got my A+ and then took a full-stack programming boot camp course through UCI. Thats where I found React and my love for web-development. After passing my boot camp course with flying colors I moved to Minnesota and began working for different companies as an entry-level software engineer."
    const aboutCurrent = "Ive recently been taking a small break from the programming industry and have been working at Geek Squad as a repair agent to hone some more of my skills working around operating systems and computer hardware. Im now proficient with macOS, Windows 10 and 11 and chromeOS(sadly). I even have my apple certifications and am able to fully take a Macbook or an IMac apart and reassemble it. With the combined knowledge of how computers work internally, how the operating system works and how to program I am now fully self proficient on any device."
    const aboutPlans = "Ive recently begun teaching myself C# and want to learn how to make full downloadable desktop applications using C# and WinForms. My main skill set still lies with React and front-end web development but my goal is full flexibility and the ability to code and operate in any environment. I also plan to teach myself python."
    const aboutHobbies = "My hobbies include gaming, programming and basic baking and cooking. I love starting new projects and "

    return (
        <AboutContext.Provider value={{about, aboutMain, aboutJourney, aboutProfessional, aboutCurrent, aboutPlans, aboutHobbies}}>
            {children}
        </AboutContext.Provider>
    )
}

    //About Journey Text
//!Card 1 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//?Heading
//Starting Out
//?Body
//I started with lua script at a young age. Gaming played a large part in my programming skillset.
//!Card 2 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//?Heading
//Careers Beginning
//?Body
//My professional career started with a boot camp course. Through this course I made important connections and began learning react.
//!Card 3 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//?Heading
//Where I am at
//?Body
//Currently I am working towards perfecting my programming skill set and further improving my control of javascript. 