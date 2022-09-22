import React from 'react'
import '../css/bookPage.css'

const BookPage = (props) => {
  return (
    <div className="bookPage">
      <div className="bookPageContainer">
        <div className="numberPage">[{props.pageNumber}]</div>
        <div className="textPage">{props.children}</div>
      </div>
    </div>
  )
}

export default BookPage
