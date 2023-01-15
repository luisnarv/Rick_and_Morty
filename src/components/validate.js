const regexUsername = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const regexPassword = /^([0-9])*$/;

export default function validate (inputs){
    var errorst={}
    
    if(!inputs.username){
        errorst.username= "Ingresa un Correo"
     }else if(!regexUsername.test(inputs.username)){
 errorst.username= "el nombre de usuario debe ser un correo"
   }

    if(!inputs.password){
        errorst.password= "Ingresa la contraseña"
    }else if(!regexPassword.test(inputs.password)){
        errorst.password= "La contraseña debe ser solo numeros"
     
    }
    return errorst
}