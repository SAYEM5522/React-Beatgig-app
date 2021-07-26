import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
      <img
      className="header__left__image"
      src="https://beatgig.com/_next/static/images/beatgig-256-a2ce12989084a7604b2cb2994e29fccb.png"
      alt=""
      />
      </div>
      <div className="header__middle">
        <div style={{position:"relative"}}>
        <input
      className="header__middle__input"
      placeholder="Search artist to book..."
      />
       <SearchIcon  />
        </div>
     
     </div>
     <div className="header__right">
       <div className="header__right__list">
       <h3>Products</h3>
       <ExpandMoreIcon color="white"/>
       </div>
       <h3 >Sign Up</h3>
        <MenuIcon/>
    </div>
    </div>
  )
}

export default Header

