import Booklist from './components/Booklist';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BooksContext';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}
export default App;
