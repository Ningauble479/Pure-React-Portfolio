import React, { useContext, useEffect, useState } from 'react'
import { ProfessionalNavigator } from '../Components/ProfessionalNavigator'
import { ProfessionalFrame } from '../Components/ProfessionalFrame'
import { PageRouteContext } from '../Context/PageRouteContext'

const ProfessionalAbout = () => {
    return (
        <>
            <ProfessionalFrame frameNumber={1}/>
            <ProfessionalFrame frameNumber={2}/>
            <ProfessionalFrame frameNumber={3}/>
            <ProfessionalFrame frameNumber={4}/>
            <ProfessionalFrame frameNumber={5}/>
            <ProfessionalFrame frameNumber={6}/>
        </>
    )
}

const ProfessionalContact = () => {
    return (
        <>
            <ProfessionalFrame frameNumber={7}/>
        </>
    )
}

const ProfessionalProjects = () => {
    return (
        <>
            <ProfessionalFrame frameNumber={3}/>
        </>
    )
}

const ProfessionalLanguages = () => {
    return (
        <>
            <ProfessionalFrame frameNumber={4}/>
        </>
    )
}

const ProfessionalResume = () => {
    return (
        <>
            <ProfessionalFrame frameNumber={5}/>
        </>
    )
}

export const ProfessionalPage = () => {
    const { currentTab } = useContext(PageRouteContext)
    const [ display, setDisplay ] = useState(ProfessionalAbout)
    useEffect(()=>{
        switch(currentTab) {
            case "About":
                setDisplay(ProfessionalAbout)
                break;
            case "Contact Me":
                setDisplay(ProfessionalContact)
                break;
            case "Projects":
                setDisplay(ProfessionalProjects)
                break;
            case "Programming Languages":
                setDisplay(ProfessionalLanguages)
                break;
            case "Resume":
                setDisplay(ProfessionalResume)
                break;
            default:
                setDisplay(ProfessionalAbout)
                break;
                
        }
    },[currentTab])

    return (
        <div>
            <div className='professionalPage'>
            <ProfessionalNavigator/>
                {display}
            </div>
        </div>
    )
}