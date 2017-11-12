import React from 'react'
import { connect } from 'react-redux'
import {login,getUserData} from './Auth.redux'
import {Redirect} from 'react-router-dom'
// import axios from 'axios'

//两个reducers 每个reducer都有一个state
//合并reducer
@connect(
    state => state.auth,
    {login,getUserData}
)

class Auth extends React.Component{

    /* 获取服务端数据 不和redux配合的情况*/
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         data : {}
    //     }
    // }
    // componentDidMount(){
    //     axios.get('/data').then(res => {
    //         if(res.status === 200){
    //             this.setState({data:res.data})
    //             console.log(res)
    //         }
            
    //     })
    // }

    componentDidMount(){
        this.props.getUserData()
    }
   render(){
       return (   
           <div>
               {/* <h2>我的名字是{this.state.data.user},年龄{this.state.data.age}</h2> */}
               <h2>我的名字是{this.props.user},年龄{this.props.age}</h2>
               { this.props.isAuth ? <Redirect to="/dashbord" /> : null} 
                <h1>你没有权限，需要登录才能看</h1>
                <button onClick={this.props.login}>登录</button>
           </div>
       )
   }
}

export default Auth