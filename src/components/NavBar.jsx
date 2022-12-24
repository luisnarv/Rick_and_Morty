import React from 'react'
import SearchBar from "./SearchBar"
import style from "./NavBar.module.css"


export default function NavBar(props) {
  return (
    <div className={style.Nav}>
       <div>
         <button>Home</button>
        </div>
         <div>
         <button>Filter</button>
         </div>
          <div>
            <SearchBar onSearch={props.onSearch}/>
          </div>    
    </div>
  )
}
