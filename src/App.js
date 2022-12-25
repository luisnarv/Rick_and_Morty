import { useState } from 'react'
import style from './App.module.css' 
import Cards from './components/Cards.jsx'
import Login from './components/Login.jsx'
import About from "./components/About.jsx"
import NavBar from './components/NavBar.jsx'
import Detail  from './components/Detail.jsx'
// import characters, { Rick } from './data.js'
import { Routes,Route } from 'react-router-dom';


function App () {
const [characters,setCharacters] = useState([])
  function onSearch(id){
   fetch(`https://rickandmortyapi.com/api/character/${id}`)
   .then((response) => response.json())
   .then ((data) => {
    if(data.name){
      let exist = characters.find((e) => e.id === data.id);
      if(exist){
        alert("Esta carta ya existe");
      }else{
      setCharacters((oldChars) => [...oldChars, data]);
      }} else {
      window.alert("No hay personajes con ese ID");}
   });
  }
function onClose(id){
setCharacters((data)=>{
  return data.filter((e) => e.id !== id)
} )
}

  return (
    <div className={style.App}>
       <div className={style.container}>
          <div>
           <NavBar onSearch={onSearch}/>
          </div>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/detail/:detailId' element={<Detail/>}></Route>
        </Routes>
       </div>
   </div>
  )
}

export default App