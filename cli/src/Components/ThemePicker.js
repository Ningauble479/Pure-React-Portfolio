import React, { useContext,  useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const ThemeBox = ({themeName}) => {
    const { setTheme, setThemePicker } = useContext(ThemeContext)
    return (
        <div className='themeBox' onClick={()=>{
            setTheme(themeName)
            setThemePicker(false)
            }}>
            <p>{themeName}</p>
        </div>
    )
}


export const ThemePicker = () => {

    const [ open ] = useState(false)

    if(open){
    return (
    <div className='themePickerOuter'>
        <div className='themePicker'>
            <div>
                <p>Please choose a theme</p>
            </div>
            <div>
                <ThemeBox themeName={"Professional"} />
                <ThemeBox themeName={"F04 Terminal"} />
                <ThemeBox themeName={"Pip Boy (Coming Soon)"}/>
                <ThemeBox themeName={"God Complex (Coming Soon)"}/>
                <ThemeBox themeName={"Artsy (Coming Soon)"}/>
                <ThemeBox themeName={"Anime (Coming Soon)"}/>
            </div>
        </div>
    </div>
    )
} else {
    return (null)
}
} 
 
