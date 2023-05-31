import React, { createContext, useEffect, useState } from 'react'

const checkLocalStorage = (item, defaultItem) => {
    if(!localStorage.getItem(item))return defaultItem
    return localStorage.getItem(item)
}

export const ThemeContext = createContext("")

//Set the area that we are sending the context down to.
//To use wrap a section with this as a react component.
export const ThemeArea = ({ children }) => {
    const [ theme, setTheme ] = useState (checkLocalStorage("theme", "Professional"));
    const [ themePicker, setThemePicker ] = useState(checkLocalStorage("themePicker", false));
    
    useEffect(()=>{
        localStorage.setItem("theme", theme)
        localStorage.setItem("themePicker", themePicker)
        console.log(themePicker)
    })

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themePicker, setThemePicker }}>
            {children}
        </ThemeContext.Provider>
    )
}

