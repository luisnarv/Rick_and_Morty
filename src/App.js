import { useState, useEffect } from 'react'
import style from './App.module.css' 
import Cards from './components/Cards.jsx'
import About from "./components/About.jsx"
import NavBar from './components/NavBar.jsx'
import Detail  from './components/Detail.jsx'
// import characters, { Rick } from './data.js'
import { Routes,Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form.jsx'
import Favorites from './components/Favorites'


function App () {
const [access, setAccess] = useState(false)
const username = "luis@33b.com"
const password = "123456"
const navigate = useNavigate();

function login(userData){
  if(userData.password === password && userData.username === username){
    setAccess(true);
    navigate("/home");
    alert("Bienvenido a mi primera app de REACT")
  }
}
function logout(){
    setAccess(false);
    navigate("/home");
    alert("Hasta la proxima");
  }


useEffect(() => {
  !access && navigate("/");
},[access]);


  const location = useLocation()
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
            {location.pathname === "/" ? null : <NavBar logout={logout} onSearch={onSearch}/>}
          </div>
        <Routes>
          <Route path='/' element={<Form login={login} />}></Route>

          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/favorites' element={<Favorites characters={characters}  onClose={onClose}/>}></Route>
          <Route path='/detail/:detailId' element={<Detail/>}></Route>
        </Routes>
       </div>
   </div>
  )
}

export default App

export function setCharacters(data){
  return data;
}