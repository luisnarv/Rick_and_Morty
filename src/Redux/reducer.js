import { ADD_FAVORITES, DELETE_FAVORITES } from "./action_type";


const initialState ={
myFavorites: []
}



export default function rootReducer(state=initialState, {type,payload}){
    switch (type) {
        case ADD_FAVORITES :
            return {...state, myFavorites:[...state.myFavorites,payload]};

        case DELETE_FAVORITES :
            const filt =state.myFavorites.filter((id)=>{
                return id  !== payload
            })
                return {...state, myFavorites:filt};
            
    
        default:
            return state;
}}