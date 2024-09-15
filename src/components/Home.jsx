import React,{ useState,useEffect,useContext } from 'react'
import Slider from './Slider'
import { MyContext } from '../MyContext';
import News from './News';

const Home = ({ genre,lang,coun }) => {
    const [headlines, setheadlines] = useState([])
    const [open, setopen] = useState(false)
    const [i, setindex] = useState(0)
    const {apikey} = useContext(MyContext)
    const fetchHeadlines = async () => {
        let list=[]
        const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${genre}&lang=${lang}&country=${coun}&max=10&apikey=${apikey}`)
        const data=await response.json()
        list=[...list,...data?.articles]
        const response1 = await fetch(`https://gnews.io/api/v4/top-headlines?category=${genre}&lang=${lang}&country=${coun}&max=10&apikey=${apikey}`)
        const data1=await response1.json()
        list=[...list,...data1?.articles]
        if(list.length>0)
        setheadlines(list)
        else
        setheadlines(new Array(20).fill(-1))
    }
    useEffect(() => {
      fetchHeadlines()
    }, [genre,lang,coun])
  return (
    <div className='flex flex-col w-full text-black dark:text-white justify-center items-center'>
     <div className="flex w-[1800px]">
     <div className='slider w-2/3'>
     <Slider headlines={headlines.slice(0,8)} setIndex={setindex} setOpen={setopen}/>
     </div>
     <div className='w-1/3 flex flex-col gap-3 text-3xl'>
     <div className="text-4xl">Top Headlines</div>
      {headlines.slice(8,12).map((h,index)=>{
        return <div className='p-4 flex rounded-xl bg-slate-50 shadow-slate-400 dark:bg-slate-950 text-xl gap-1 shadow-mddark:shadow-slate-800 w-3/4' key={index} onClick={()=>{
          setopen(true)
          setindex(index+8)
        }}>
        <img src={h?.image} className=' h-full w-1/4' alt=""  />
        {h?.title}
        </div>
      })}
     </div>
     </div>
     <div className='grid-cols-3 grid w-11/12 my-3'>
      {headlines.slice(12,20).map((h,index)=>{
        return <div key={index} className='flex flex-col w-[500px] bg-slate-50 dark:bg-slate-950 h-[370px] m-6 items-center shadow-md shadow-slate-400 dark:shadow-slate-700 rounded-xl gap-4'>
          <img className="w-full h-2/3" src={h?.image} alt="" />
          <div className='text-2xl'>{h?.title}</div>
        </div>
      })}
     </div>
      <News on={open} setOn={setopen} headline={headlines[i]}/>
    </div>
  )
}

export default Home
