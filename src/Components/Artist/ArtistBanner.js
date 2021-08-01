import React from 'react'
import "./ArtistBanner.css"
import ArtistProfile from './ArtistProfile'
const ArtistBanner = () => {
  return (
    <div className="artistbanner">
      <img
      src="https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,h_1400/v1/beatgig-prod/mmhv8dk9if8zc4xrrzha"
      style={{height:'550px',width:'100%',position:'relative'}}
      />
      <div className="artistbanner__gradient"/>
      <ArtistProfile/>
    </div>
  )
}

export default ArtistBanner
