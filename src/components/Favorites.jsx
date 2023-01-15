import React from 'react';
import  {useSelector} from  "react-redux";
import Card from './Card';
import styles from "./Favorites.modules.css";

export default function Favorites(props) {
const myFavorites = useSelector((s)=> s.myFavorites)
const characters= props.characters.filter((e)=>{
    return myFavorites.includes(e.id)
})
    return (
    <div >
    { characters.map((c) => {
            return (
              <div className={styles.favorite}> 
            <Card
            id={c.id}
             name={c.name}
             species={c.species}
             gender={c.gender}
             image={c.image}
           onClose={()=> props.onClose(c.id)}
           />   </div>);
          })
       }
    </div>
  );
}
