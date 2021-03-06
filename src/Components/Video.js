import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import "./Video.css"

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const data=[
  {
      id:'1',
      img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/irojobcsusv5hxgdq5ai",
      name:'SAINt JHN'
  },
  {
    id:'2',
    img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/eie3qfnvd7bxzlejbytz",
    name:'Key Glock'
},
{
  id:'3',
  img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-prod/bblld9gmkgm1xrpuobqd",
  name:'The Band Camino'
},
{
  id:'4',
  img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/eexyxfk0deprtvhwwfo2",
  name:'Key Glock'
},
{
  id:'5',
  img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-prod/djaq0nb1r5osi8b4mckf",
  name:'Key Glock'
},
{
  id:'6',
  img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/drgpu29k9hfl7z6zomdw",
  name:'Key Glock'
},
,

]
const Video = ({title}) => {
  const history=useHistory();
  const onclick=()=>{
      history.push("./Artist")
  }
  return (
    <div className="video">
      <h1 className="video__title">{title}</h1>
      <div className="video__posters">{
          data.map((item,i)=>(
            <div onClick={onclick} className="video__poster">
            <img
            src={item.img}
            key={item.id}
            className="video__image"
            />
            <FavoriteBorderIcon className="video__image__react" color="red"/>
            <div className="video__image__icon">
            
              $ 🔒
            </div>

            <h2 className="video__image__title">{item.name}</h2>
            </div>
          ))
          
        }</div>
        
        
    </div>
  )
}

export default Video
