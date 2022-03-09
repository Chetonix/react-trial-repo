import React from 'react'


function Book(props) {
  const {img, title, author} = props.book;
  return (
  <article className='book'>
    <img className="book-img" src= {img} alt="Book Image" />  
    <h1>{title}</h1>  
    <h4>{author}</h4>  
</article>);
}

export default Book;