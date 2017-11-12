const LONGIN = 'LONGIN'
const LOGOUT = 'LOGOUT'


//reducer
export function auth(state={isAuth:false,user:'李云龙'},action){
    switch(action.type){
        case LONGIN :
            return {...state,isAuth : true} 
        case LOGOUT :
            return {...state,isAuth : false}
        default : 
            return state
    }
}

//action creator
export function login(){
    return {type:LONGIN}
}
export function logout(){
    return {type:LOGOUT}
}