import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = ({children}) =>{
  const [books, setBooks] = useState([
    {title: 'the way to the king', id: 1},
    {title: 'problem solving', id: 2},
    {title: 'ocean in the desert', id: 3},
    {title: 'a poor widow', id: 4},
    {title: 'wrestling with the devil', id: 5}
  ])
  return(
   <BookContext.Provider value={{ books }}>
    {children}
   </BookContext.Provider>
  )
}

export default BookContextProvider;