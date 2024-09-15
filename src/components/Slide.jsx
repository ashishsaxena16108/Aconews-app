import React from 'react'

const Slide = ({ fade,source,title,imgSrc,Index,setIndex,setOpen }) => {
  return (
    <div className={`w-full h-full rounded-xl text-2xl ${fade}`} onClick={()=>{setOpen(true) 
       setIndex(Index)}} >
      <img className= 'relative h-full w-full rounded-[inherit] hover:brightness-50' src={imgSrc} alt="" />
      <div className='relative flex flex-col -top-40 p-2  font-semibold'>
      <div className='text-xl'>
       {source}
      </div>
      <div className='text-4xl'>
      {title}
      </div>
      </div>
    </div>
  )
}

export default Slide
