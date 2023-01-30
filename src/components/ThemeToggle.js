import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';


// CLASS COMPONENT
// class ThemeToggle extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const {toggleTheme} = this.context;
//     return (
//       <>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//       </>
//     )
//   }
// }

// FUNCTION COMPONENT
const ThemeToggle = () =>{
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}

export default ThemeToggle;
