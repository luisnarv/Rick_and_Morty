import { Link } from "react-router-dom";
import styles from "./Card.module.css"
export default function Card(props) {
   return (
      <div className={styles.Card}>

         <button onClick={props.onClose}>X</button>
         <div className={styles.texto}>
            <Link to= {`/detail/${props.id}`}>
          <h2>{props.name}</h2>
          <p>{props.species}</p>
          <p>{props.gender}</p>
          <img  src={props.image} alt={props.image}/>
          </Link>
         </div>
      </div>
   );
}
