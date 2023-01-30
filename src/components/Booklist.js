import  { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BooksContext";

// CLASS COMPONENT
// class Booklist extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { light, dark, isLightTheme} = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
//         <ul>
//           <li style={{ background: theme.ui }}>the way to the king</li>
//           <li style={{ background: theme.ui }}>time management</li>
//           <li style={{ background: theme.ui }}>master the art</li>
//         </ul>
//       </div>
//     );
//   }
// }

// FUNCTIONAL COMPONENT
const Booklist = () => {
  const {light, dark, isLightTheme }= useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {
          books.map(book =>{
            return(
              <li style={{ background: theme.ui }} key={book.id}>{book.title}</li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Booklist;
