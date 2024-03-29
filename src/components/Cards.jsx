import Card from './Card';
import styles from "./Cards.module.css"


export default function Cards(props) {
   const { characters } = props;
   return (
   <div className={styles.Cards}>
   {
         characters.map((c) => {
           return ( 
           <Card
          
            id={c.id}
            name={c.name}
            species={c.species}
            gender={c.gender}
            image={c.image}
          onClose={()=> props.onClose(c.id)}
          />);
         })
      }
   </div>
   )
}
