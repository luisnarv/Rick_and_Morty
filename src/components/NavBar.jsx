import React from 'react'
import SearchBar from "./SearchBar"
import style from "./NavBar.module.css"
import { Link } from 'react-router-dom'


export default function NavBar(props) {
  return (
    <div className={style.Nav}>
       <div>
        <Link to="/home">
         <button>Home</button>
        </Link>
        </div>
        <Link to="/About">
         <button>About</button>
        </Link>
          <div>
            <SearchBar onSearch={props.onSearch}/>
          </div>    
    </div>
  )
}
