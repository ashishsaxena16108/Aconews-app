import React from 'react'
import Remove from '../assets/remove.svg'
import Expand from '../assets/expand-solid.svg'
const News = ({ headline,on,setOn }) => {
  const setFS = () => {
    if(document.fullscreenElement){
      document.exitFullscreen()
    }
    document.getElementsByClassName('news')[0].requestFullscreen()
    
  }
  
  return (
    <>
   { on ?
    <div className='news absolute rounded-lg w-3/4 h-[850px] dark:bg-slate-800 top-10 flex flex-col justify-center items-center gap-4 overflow-y-scroll h-s'>
      <div className='h-full mt-48'>
      <img src={headline?.image} className='rounded-xl mt-2 h-full' alt="" />
      </div>
      <div className='flex w-3/4 text-xl items-start'>{headline?.publishedAt}</div>
      <div className='flex text-xl w-3/4 items-start'><a href={headline?.source?.url} target='_blank'>{headline?.source?.name}</a></div>
      <div className='text-3xl font-bold w-3/4 items-start'>{headline?.title}</div>
      <div className='w-3/4 justify-start text-2xl'>
      <div className="">{headline?.description}</div>
      <div className="">{headline?.content}</div>
      </div>
      <div className='absolute top-3 right-3' onClick={()=>setOn(false)}>
        <img src={Remove} width={36} alt="" />
      </div>
      <div className='absolute top-4 right-20' onClick={setFS} >
        <img src={Expand} width={36} alt="" />
      </div>
    </div>
    :
    <div></div> 
    }
    </>
  )
}

export default News
