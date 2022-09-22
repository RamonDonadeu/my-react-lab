import React from 'react'

const Reference = (props) => {
  console.log(props)
  return (
    <div className="referencia">
      <div className="numeroPagina">{props.pageNumber}</div>
      <div className="textoPagina">{props.children}</div>
    </div>
  )
}

export default Reference
