import React from 'react';
import ReactDOM from 'react-dom';
//css
import "./index.css";
//import books and Book
import {books} from "./books";
import Book from "./Book";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



function BookList() {
  return (<section className="booklist">
  {books.map((book)=> {
    return <Book key={book.id} book={book}></Book>
  })};
  </section>);
}



ReactDOM.render(<BookList/>, document.getElementById("root"));