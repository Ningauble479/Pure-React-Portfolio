import React, { useContext } from 'react'
import { PageRouteContext } from '../Context/PageRouteContext'

export const ProfessionalNavigator = () => {

    const { routeList, setCurrentTab, currentTab } = useContext(PageRouteContext)

    return(
        <div className='professionalNavigator'>
            {routeList.map((route)=>{
                const active = route === currentTab ? 'active' : null
                return(
                    <div className={`professionalNavigatorObject ${active}`} onClick={()=>setCurrentTab(route)}>{route}</div>
                )
            })}
        </div>
    )
}