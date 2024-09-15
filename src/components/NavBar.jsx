import React,{ useState,useEffect } from 'react'
import News from '../assets/news.svg'
import '../App.css'


const NavBar = ({ setTheme,Mode,toggledark,handleLang,handleCount,selectedLang,selectedCountry}) => {
 
  
  
  const handleClick=(theme) => {
    setTheme(theme);
  }
  
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between text-3xl  text-white bg-blue-700 flex-2'>
         <div className='flex m-2 gap-2 protest-guerrilla-regular text-4xl'><img src={News} width={44} alt="" /><span className=' py-1'><span className=' bg-blue-100 rounded-lg p-2 m-1 text-blue-700'>aco</span>news</span></div>
         <div className='flex py-1 gap-2'>
         <div className="lang">
          <select name="" value={selectedLang}
        onChange={handleLang} className="block text-lg w-full mt-2 px-2 py-1 border border-gray-300 bg-white text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="">
            <option value='ar'>Arabic</option>
            <option value='zh'>Chinese</option>
            <option value='nl'>Dutch</option>
            <option value='en'>English</option>
            <option value='fr'>French</option>
            <option value='de'>German</option>
            <option value='el'>Greek</option>
            <option value='he'>Hebrew</option>
            <option value='hi'>Hindi</option>
            <option value='it'>Italian</option>
            <option value='ja'>Japanese</option>
            <option value='ml'>Malayalam</option>
            <option value='mr'>Marathi</option>
            <option value='no'>Norwegian</option>
            <option value='pt'>Portuguese</option>
            <option value='ro'>Romanian</option>
            <option value='ru'>Russian</option>
            <option value='es'>Spanish</option>
            <option value='sv'>Swedish</option>
            <option value='ta'>Tamil</option>
            <option value='te'>Telugu</option>
            <option value='uk'>Ukrainian</option>
          </select>
         </div>
         <div className="count">
         <select name="" value={selectedCountry}
        onChange={handleCount} className="block text-lg w-full mt-2 px-2 py-1 border border-gray-300 bg-white text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="">
      <option value='au'>Australia</option>
      <option value='br'>Brazil</option>
      <option value='ca'>Canada</option>
      <option value='cn'>China</option>
      <option value='eg'>Egypt</option>
      <option value='fr'>France</option>
      <option value='de'>Germany</option>
      <option value='gr'>Greece</option>
      <option value='hk'>Hong Kong</option>
      <option value='in'>India</option>
      <option value='ie'>Ireland</option>
      <option value='il'>Israel</option>
      <option value='it'>Italy</option>
      <option value='jp'>Japan</option>
      <option value='nl'>Netherlands</option>
      <option value='no'>Norway</option>
      <option value='pk'>Pakistan</option>
      <option value='pe'>Peru</option>
      <option value='ph'>Philippines</option>
      <option value='pt'>Portugal</option>
      <option value='ro'>Romania</option>
      <option value='ru'>Russian Federation</option>
      <option value='sg'>Singapore</option>
      <option value='es'>Spain</option>
      <option value='se'>Sweden</option>
      <option value='ch'>Switzerland</option>
      <option value='tw'>Taiwan</option>
      <option value='ua'>Ukraine</option>
      <option value='gb'>United Kingdom</option>
      <option value='us'>United States</option>
          </select>
         </div>
         <div className='m-2  toggle'>
          <button onClick={toggledark}><img src={Mode} width={30} alt="" /></button>
        </div>
        </div>
      </div>
      <div className='flex items-center text-xl bg-blue-500 text-white '>
        <div className="p-3 border-r-4 text-center border-white hover:bg-blue-300 px-auto w-[180px]" onClick={()=>handleClick('general')}>General</div>
        <div className="p-3 border-r-4 text-center border-white hover:bg-blue-300 px-auto w-[180px]" onClick={()=>handleClick('world')}>World</div>
        <div className="p-3 border-r-4 text-center border-white hover:bg-blue-300 px-auto w-[180px]" onClick={()=>handleClick('nation')}>Nation</div>
        <div className="p-3 border-r-4 text-center border-white hover:bg-blue-300 px-auto w-[180px]" onClick={()=>handleClick('business')}>Business</div>
        <div className="p-3 border-r-4 text-center border-white hover:bg-blue-300 px-auto w-[180px]" onClick={()=>handleClick('technology')}>Technology</div>
        <div className="p-3 border-r-4 text-center border-white hover:bg-blue-300 px-auto w-[180px]" onClick={()=>handleClick('entertainment')}>Entertainment</div>
        <div className="p-3 border-r-4 text-center border-white hover:bg-blue-300 px-auto w-[180px]" onClick={()=>handleClick('sports')}>Sports</div>
        <div className="p-3 border-r-4 text-center border-white hover:bg-blue-300 px-auto w-[180px]" onClick={()=>handleClick('science')}>Science</div>
        <div className="p-3 border-r-4 text-center border-white hover:bg-blue-300 px-auto w-[180px]" onClick={()=>handleClick('health')}>Health</div>
      </div>
    </div>
  )
}

export default NavBar
