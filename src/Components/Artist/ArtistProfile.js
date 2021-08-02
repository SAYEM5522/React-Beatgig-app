import React from 'react'
import "./ArtistProfile.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const ArtistProfile = () => {
  return (
    <div className="artistprofile">
     <div className="artistprofile__left">
        <img
        src="https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,h_640/v1/beatgig-updated/eexyxfk0deprtvhwwfo2"
        className="artistprofile__image"
        />
     </div>
     <div className="artistprofile__middle">
        <h1 className="artistprofile__name">The Band Camino</h1>
        <h3 className="artistprofile__price">$ 🔒 per show</h3>
        <h2 className="artistprofile__type">Memphis, TN·Rock</h2>
    </div>
    <div className="artistprofile__right">
      <FavoriteBorderIcon className="artistprofile__right__icon"/>
      <h2>Book</h2>
    </div>
    </div>
  )
}

export default ArtistProfile
