import React from 'react'
import '../App.css'
import "../Adp.css"
const Header = () => {
  return (
    <>
      <div className='body'>
        <div className="container">
            <div className="head">

                <div className='logo'>
            <a href="#home">

            <img src="./public/styopa.png" alt="" />
            </a>
                </div>
                <nav>
                    <a href="#Abt">ABOUT US</a>
                    <a href="#hnd">PROGRAMMS</a>
                    <a href="#lt">LECTORS</a>
                    <a href="#loc"></a>
                </nav>
                <a className='btn' href="#foot">get our contacts</a>
            </div>

        </div>
      </div>
    </>
  )
}

export default Header
