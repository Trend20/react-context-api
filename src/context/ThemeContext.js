import { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state={
    isLightTheme: true,
    dark:{syntax: '#555', ui: '#ddd', bg: '#eee' },
    light:{syntax: '#ddd', ui: '#333', bg: '#555' }
  }
  render() {
    return (
      <ThemeContext.Provider value={{...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;