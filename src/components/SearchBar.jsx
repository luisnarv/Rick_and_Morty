import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {


   const [character,setCharacter] = useState("")
   function handleInput (evento){
    setCharacter(evento.target.value)
   } 

    return (
       <div>
          <input type='text' name= "search" placeholder="ID" onChange={(e) => handleInput(e)} value={character}/>
       <button  className={styles.search} onClick={()=> {props.onSearch(character); setCharacter("")} }>Agregar</button>
       </div>
    );
 }
 