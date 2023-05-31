import '../Style/App.css';
import { ThemePicker } from '../Components/ThemePicker'
import { ThemeArea } from '../Context/ThemeContext';
import { ThemeFrame } from '../Components/ThemeFrame';
import React from 'react';
import { PageRouteArea } from '../Context/PageRouteContext';
import { AboutArea } from '../Context/AboutContext';

export const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <ThemeArea initialTheme={"Professional"}>
        <PageRouteArea initialPageRoute={"About"}>
        <AboutArea>
          <ThemePicker/>
          <ThemeFrame/>
        </AboutArea>
        </PageRouteArea>
        </ThemeArea>
      </header>
    </div>
  );
}
