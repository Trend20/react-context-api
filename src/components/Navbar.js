import {useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';


// CLASS COMPONENT
// class Navbar extends Component{
//   static contextType = ThemeContext;
//   render(){
//     const { light, dark, isLightTheme} = this.context;
//     const theme = isLightTheme ? light : dark;
//     return(
//       <nav style={{ background: theme.ui, color: theme.syntax }}>
//         <h1>Context App</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     )
//   }
// }

// FUNCTION COMPONENT
const Navbar = () =>{
  const { light, dark, isLightTheme} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return(
    <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
  )
}
export default Navbar;