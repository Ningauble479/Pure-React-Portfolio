import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { ProfessionalPage } from '../Pages/Professional'
import { F04Page } from '../Pages/F04Page'

export const ThemeFrame = () => {

    const { theme } = useContext(ThemeContext)
    const [selectedTheme, setSelectedTheme] = useState("Professional")
    
    useEffect(()=>{
        switch(theme) {
            case "Professional":
                setSelectedTheme(<ProfessionalPage/>)
                break;
            case "F04 Terminal":
                setSelectedTheme(<F04Page/>)
                break;
            default:
                break;
        }
    }, [theme])

    return (
        <div className='themeFrame'>
            { selectedTheme }
        </div>
    )
}