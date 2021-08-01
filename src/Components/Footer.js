import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
        <img
    
      className="footer__image"
      src="https://beatgig.com/_next/static/images/beatgig-256-a2ce12989084a7604b2cb2994e29fccb.png"
      alt=""
      />
      <div className="footer__list">
      <div className="footer__list1">
      <h3 >COMPANY</h3>
      <h1 className="footer__list1__text">Contact</h1>
      <h1 className="footer__list1__text">Privacy Policy</h1>
      <h1 className="footer__list1__text">Terms of Service</h1>
      <h1 className="footer__list1__text">Cookie Policy</h1>
      </div>
      <div className="footer__list2">
      <h3>COMPANY</h3>
      <h1 className="footer__list2__text">Colleges</h1>
      <h1 className="footer__list2__text">Venues</h1>
      <h1 className="footer__list2__text">Artists</h1>
      </div>
      <div className="footer__list3">
      <h3>ACCOUNT</h3>
      <h1 className="footer__list3__text">Sign Up</h1>
      <h1 className="footer__list3__text">Log In</h1>
     
      </div>
      <div className="footer__list4">
      <h3>SOCIAL</h3>
      <h1 className="footer__list4__text"></h1>
      <h1 className="footer__list4__copyRighttext">© 2021 BeatGig, LLC. All rights reserved.</h1>
      
      </div>
      </div>
    </div>
  )
}

export default Footer
