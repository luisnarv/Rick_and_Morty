import style from './App.module.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import characters, { Rick } from './data.js'


function App () {
  function onSearch(id){
    alert(id)
  }
  return (
    <div className={style.App}>
      <div className={style.container}>
        <div>
         <NavBar onSearch={onSearch}/>
        </div>
           <div>
        {/* <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        /> */}
          </div>
         <hr />
       <div>
        <Cards
          characters={characters}
        />
       </div>
       </div>
   </div>
  )
}

export default App