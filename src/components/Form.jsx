import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Form.module.css"
import validate from './validate';

export default function Form (props) {
const [userData, setUserData]= React.useState({username:"", password: ""});
const [errors, setErrors]= React.useState({username:"", password: ""});
  function handleInputChange(e){
  setUserData({
    ...userData,[e.target.name]: e.target.value 
  })
  setErrors(validate({
    ...userData, [e.target.name]: e.target.value
  }))

  }
function handleSubmit(e){
    e.preventDefault()
    props.login(userData)
}
   
  return (
    <div className={styles.container}>
      <form onSubmit={((e)=> {handleSubmit(e)})}>
        <div>
        <label>Username </label>
        <input className={errors.name && styles.warning}  type="text" name="username" placeholder="Ingrese su nombre... " onChange={(e)=> handleInputChange(e)}></input>
        <p  className={styles.danger}>{errors.username}</p>
        <label>Password </label>
        <input type="text" name='password' placeholder='Ingrese su contraseña...' onChange={(e)=> handleInputChange(e) }></input>
        <p  className={styles.danger}>{errors.password}</p>
        {/* {Object.keys(errors).length === 0 ?  <button type='submit'>Login</button> :null} */}
         <button  className={styles.login} type='submit'>Login</button> 
        </div>
        </form>
    </div>
  )
  }





  /*
  <input></input>
        <Link to="/home">
            <button>Login</button>
        </Link>
  */