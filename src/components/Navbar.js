import { Component } from "react";
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component{
  static contextType = ThemeContext;
  render(){
    const { light, dark, isLightTheme} = this.context;
    const theme = isLightTheme ? light : dark;
    return(
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <u>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </u>
      </nav>
    )
  }
}
export default Navbar;