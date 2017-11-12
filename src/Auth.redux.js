import axios from 'axios'
const LONGIN = 'LONGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'

const initState = {
    isAuth:false,
    user:'李云龙',
    age:20
}
//reducer
export function auth(state=initState,action){
    console.log(state,action)
    switch(action.type){
        case LONGIN :
            return {...state,isAuth : true} 
        case LOGOUT :
            return {...state,isAuth : false}
        case USER_DATA : 
            return {...state,user:action.payload.user,age:action.payload.age}
        default : 
            return state
    }
}

export function getUserData(){
    //dispatch用来通知数据修改
    return dispatch => {
             axios.get('/data').then(res => {
            if(res.status === 200){
                dispatch(UserData(res.data))
                console.log(res)
            }
            
        })
    }
}
export function UserData(data){
    return {
        type:USER_DATA,
        payload:data
    }
}
//action creator
export function login(){
    return {type:LONGIN}
}
export function logout(){
    return {type:LOGOUT}
}