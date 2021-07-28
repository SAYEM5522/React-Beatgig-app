import React, { useEffect, useState } from 'react'
import "./Video.css"

const data=[
  {
      id:'1',
      img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/6bfRYZqcGu5FVQSp4SakfWkcF9eQd0",
      name:'Key Glock'
  },
  {
    id:'2',
    img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/BB1V3SRieHxOtocB6rNK75pUF0cXvz",
    name:'Key Glock'
},
{
  id:'3',
  img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-prod/bblld9gmkgm1xrpuobqd",
  name:'Key Glock'
},
{
  id:'4',
  img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/BEySRdJ9NZIWEDP74JNj7Jw58Zegkl",
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
//   [{
//     id:'1',
//     img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/6bfRYZqcGu5FVQSp4SakfWkcF9eQd0",
//     name:'Key Glock'
// },
// {
//   id:'2',
//   img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/6bfRYZqcGu5FVQSp4SakfWkcF9eQd0",
//   name:'Key Glock'
// },
// {
//   id:'3',
//   img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/6bfRYZqcGu5FVQSp4SakfWkcF9eQd0",
//   name:'Key Glock'
// },
// {
//   id:'4',
//   img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/6bfRYZqcGu5FVQSp4SakfWkcF9eQd0",
//   name:'Key Glock'
// },
// {
//   id:'5',
//   img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/6bfRYZqcGu5FVQSp4SakfWkcF9eQd0",
//   name:'Key Glock'
// },
// {
//   id:'6',
//   img:"https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_300/v1/beatgig-updated/6bfRYZqcGu5FVQSp4SakfWkcF9eQd0",
//   name:'Key Glock'
// },]
]
const Video = ({title}) => {
  // const [item,setItem]=useState("")
  // useEffect(()=>{
  //     data.map((data,id)=>{
  //       setItem(data)
  //     })
  // },[])
  return (
    <div className="video">
      <h1 className="video__title">{title}</h1>
      <div className="video__posters">{
          data.map((item,i)=>(
            <div className="video__poster">
            <img
            src={item.img}
            key={item.id}
            className="video__image"
            />
            </div>
          ))
        }</div>
    </div>
  )
}

export default Video
