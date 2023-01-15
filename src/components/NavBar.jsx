import React from 'react'
import SearchBar from "./SearchBar"
import style from "./NavBar.module.css"
import { Link } from 'react-router-dom'


export default function NavBar(props) {
  return (
    <div className={style.Nav}>
       <div>
            <Link to="/home">
              <button className={style.home}>  Home 🚀 </button>
            </Link>
       </div>
            <Link to="/About">
              <button>      About      </button>
            </Link>

            <div>
            <Link to="/favorites"> 
              <button className={style.favorite} >  Favorites ❤️ </button>
            </Link>
       </div>

        <div>
            <SearchBar onSearch={props.onSearch}/>
        </div>    
            <Link to="/">
              <button className={style.logout} onClick={props.logout}>Logout 🚪</button>
            </Link>
    </div>
  )
}
