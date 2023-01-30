import { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state={
    isLightTheme: false,
    dark:{syntax: '#555', ui: '#ddd', bg: '#eee' },
    light:{syntax: '#ddd', ui: '#333', bg: '#555' }
  }

  toggleTheme = () =>{
    this.setState({isLightTheme: !this.state.isLightTheme});
  }
  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;