import React,{ useState,useEffect,useContext } from 'react'

import Slide from './Slide';
const Slider = ({ headlines,setIndex,setOpen }) => {
    const [fade, setFade] = useState('fade-in');
    const [index, setindex] = useState(0)
    
    useEffect(() => {
    if (headlines.length === 0) return;
    
    const interval = setInterval(() => {
      setFade('fade-out')
      setTimeout(() => {
        setindex((prevIndex) => {
          const newIndex = prevIndex === headlines.length - 1 ? 0 : prevIndex + 1
          setFade('fade-in')  
          return newIndex
        })
      }, 1000)
    }, 5000)
    return () => clearInterval(interval)
  }, [headlines])
    const handleBack = () => {
    setFade('fade-out')
    setTimeout(() => {
      setindex((previndex) => {
        const newindex = previndex === 0 ? headlines.length - 1 : previndex - 1
        setFade('fade-in')  // Trigger fade-in
        return newindex
      })
    }, 500)
  }
  const handleFront = () => {
    setFade('fade-out')

    setTimeout(() => {
      setindex((prevIndex) => {
        const newIndex = prevIndex === headlines.length - 1 ? 0 : prevIndex + 1
        setFade('fade-in')
        return newIndex
      });
    }, 500);
  }
  return (
    <div className='flex justify-center items-center  w-[1200px] h-[600px]' >
        <button onClick={handleBack} className="back text-3xl relative left-16 opacity-15 hover:opacity-100 bg-slate-400 z-10 w-10 h-36 p-6 flex justify-center items-center text-white">&lt;</button>
        <Slide fade={fade} title={headlines[index]?.title} imgSrc={headlines[index]?.image} source={headlines[index]?.source?.name} setIndex={setIndex} Index={index} setOpen={setOpen}/>
        <button onClick={handleFront} className="back relative text-3xl bg-slate-400 w-10 h-36 opacity-15 p-6 flex justify-center hover:opacity-100 items-center -left-16 text-white">&gt;</button>
    </div>
  )
}

export default Slider
