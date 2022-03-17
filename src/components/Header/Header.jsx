import React from 'react'
import "./Header.scss"
import dice from "../../assets/images/dice.png"


const Header = () => {
  return (
    <div className='header'>
        <h1>Welcome to Slice and Dice</h1>
        <img src={dice} alt="dice" />
    </div>
  )
}

export default Header; 
