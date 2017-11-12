import React from 'react'
import { connect } from 'react-redux'
import {login} from './Auth.redux'
import {Redirect} from 'react-router-dom'

//两个reducers 每个reducer都有一个state
//合并reducer
@connect(
    state => state.auth,
    {login}
)

class Auth extends React.Component{
   render(){
       return (   
           <div>
               { this.props.isAuth ? <Redirect to="/dashbord" /> : null} 
                <h1>你没有权限，需要登录才能看</h1>
                <button onClick={this.props.login}>登录</button>
           </div>
       )
   }
}

export default Auth