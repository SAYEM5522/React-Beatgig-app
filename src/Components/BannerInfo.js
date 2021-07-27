import React from 'react'
import "./Bannerinfo.css"
const BannerInfo = () => {
  return (
    <div className="bannerinfo">
      <div className="bannerinfo__header">
      <div className="bannerinfo__header__left">
        <div className="bannerinfo__header__left-info">
        <div className="bannerinfo__header__left-color1"/>
        <div className="bannerinfo__header__left-color2"/>
        <div className="bannerinfo__header__left-color3"/>
        </div>
      </div>
      <div className="bannerinfo__header__middle">
        <h3>beatgig.com</h3>
      </div>
      </div >
      <div className="bannerinfo__body">
        <div className="bannerinfo__body__info">
        <div className="bannerinfo__body__left">
        <img
        alt=""
        className="bannerinfo__body__left-image"
        src="https://res.cloudinary.com/dn29xlaeh/image/upload/q_50,h_576/v1/beatgig-prod/g2gs4co6gmgud38lj7zl"
        />
        </div>
        <div className="bannerinfo__body__right">

        </div>
        </div>
      </div>
    </div>
  )
}

export default BannerInfo
