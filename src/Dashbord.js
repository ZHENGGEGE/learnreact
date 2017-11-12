import React from 'react'
import {
    Route,
    Link,
    Redirect
  } from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './Auth.redux'
import App from './App'

function Erying(){
    return <h2>2营</h2>
}  
function Qibinglian(){
    return <h2>骑兵连</h2>
}

@connect(
    state => state.auth,
    {logout}
)

class Dashbord extends React.Component{
   render(){
        const match = this.props.match
        //console.log(match)
       const redirectToLogin = <Redirect to="/login"></Redirect>
       const app = (
        <div>
            <h1>独立团</h1>
            {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
            <ul>
                <li>
                    <Link to={`${match.url}/`}>一营</Link>
                </li>
                <li>
                    <Link to={`${match.url}/erying`}>2营</Link>
                </li>
                <li>
                    <Link to={`${match.url}/qibinglian`}>骑兵连</Link>
                </li>
            </ul>
            <Route path={`${match.url}/`} exact component={App}></Route>
            <Route path={`${match.url}/erying`} component={Erying}></Route>
            <Route path={`${match.url}/qibinglian`} component={Qibinglian}></Route>
        </div>
       )
       return this.props.isAuth ? app : redirectToLogin
   }
}

export default Dashbord