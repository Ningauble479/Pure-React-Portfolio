import React, { createContext, useEffect, useState } from 'react'


const listOfRoutes = [
    "About",
    "Projects",
    "Contact Me",
    "Resume"
]

const checkLocalStorage = () => {
    if(!localStorage.getItem("currentTab")){
        return "About"
    }
    return localStorage.getItem("currentTab")
}

export const PageRouteContext = createContext("")

export const PageRouteArea = ({children, initialPageRoute}) => {

    const [pageRoute, setPageRoute] = useState(initialPageRoute)
    const [routeList, setRouteList] = useState(listOfRoutes)
    const [currentTab, setCurrentTab] = useState(checkLocalStorage)
    const [previousTabs, setPreviousTabs] = useState([''])

    useEffect(()=>{
        if(localStorage.getItem("currentTab") !== currentTab)localStorage.setItem("currentTab", currentTab)
        localStorage.setItem("previousTabs", previousTabs)
    },[pageRoute, currentTab, previousTabs])

    return (
        <PageRouteContext.Provider value={{pageRoute, setPageRoute, routeList, setRouteList, currentTab, setCurrentTab, previousTabs, setPreviousTabs}}>
            {children}
        </PageRouteContext.Provider>
    )
}