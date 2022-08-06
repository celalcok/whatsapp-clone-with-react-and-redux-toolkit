import React, { useState, useRef } from 'react'
import "./searchBox.css"
import {BiArrowBack, BiSearchAlt2} from "react-icons/bi"

function SearchBox({method}) {

  const ref = useRef();
  const [searchIcon, setSearcIcon] = useState(false)
  return (
    <div className='search-box'>
        <div className="input-container">
            {!searchIcon
            ?<BiSearchAlt2 
              size={20} 
              onClick={(e)=>{
                ref.current.focus();
                console.log(e)
                setSearcIcon(true)
              }} />
              :<BiArrowBack 
                className='green'
                size={20} 
                onClick={()=>setSearcIcon(false)} />}
            <input 
              className='search-input' 
              onFocus={(e)=>{
                setSearcIcon(true);
            }} onChange={(e)=>{
              setSearcIcon(true)
              method(e)
            }} type="text" placeholder='Search or start a new chat' />

        </div>
    </div>
  )
}

export default SearchBox