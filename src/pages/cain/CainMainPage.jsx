import React from 'react'
import EntrieOne from './pages/EntrieOne'
import './css/cain.css'
import titulo from './img/cainJawbone.png'
import PageTwentyOne from './cainPages/PageTwentyOne'

const CainMainPage = () => {
  return (
    <div className="cainContainer">
      <div className="cainHeader">
        <img src={titulo} alt="" />
      </div>
      <div className="cainMain">
        <div className="cainEntries">
          <EntrieOne />
        </div>
        <div className="cainPageDisplay">
          <PageTwentyOne></PageTwentyOne>
        </div>
      </div>
    </div>
  )
}

export default CainMainPage
