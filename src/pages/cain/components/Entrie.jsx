import React from 'react'

const Entrie = (props) => {
  return (
    <div>
        <div className="entrieHeader">
            <div className='entrieTitle'>{props.title}</div>
            <div className="entrieDate">{props.date}</div>
        </div>
        <div className="entrieContent">{props.children}</div>
    </div>
  )
}

export default Entrie
