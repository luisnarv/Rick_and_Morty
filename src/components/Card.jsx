import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "../Redux/action";


export default function Card(props) {
const [isFav,setIsfav]= useState (false)
const dispatch = useDispatch()
const myFavorites= useSelector((s)=>s.myFavorites)

function handleFavorite(id){
if(isFav){
   setIsfav(false)
   dispatch(deleteFavorites(id));
}else{
   setIsfav(true)
   dispatch(addFavorites(id));   
}}

useEffect(()=>{
   myFavorites.forEach((id)=>{
   if(id === props.id){
    setIsfav(true); }});
},[myFavorites]);


   return (
      
      <div className={styles.Card}>
         
         
          <img className={styles.img} src={props.image} alt={props.image}/>
        
         <div className={styles.texto}>
         {isFav ?(
            <button className={styles.boton}  onClick={()=>handleFavorite(props.id)}>❤️</button>
            ):(
               <button  className={styles.boton}  onClick={()=>handleFavorite(props.id)}>💔</button>
            ) }
         <button className={styles.botonx} onClick={props.onClose}>❌</button>
            <Link to= {`/detail/${props.id}`}>
            <h2>{props.name}</h2>
            <p> {props.species} {props.gender}</p>
         {/*  <p>{props.gender}</p>
         */}
          </Link>
         </div>
    
        
      </div>
   );
}
