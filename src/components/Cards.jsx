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
            name={c.name}
            species={c.species}
            gender={c.gender}
            image={c.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
          />);
         })
      }
   </div>
   )
}
