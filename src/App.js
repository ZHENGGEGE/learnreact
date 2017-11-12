import React from 'react'
import {connect} from 'react-redux'
import {addGun,removeGun,addGunAsync} from './index.redux'


@connect(
    // state属性放到props
    state => ({num : state.counter}),
    //state 的方法放到props自动dispa
    {addGun,removeGun,addGunAsync}
)

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>现在有机枪{this.props.num}把</h1>
                <button onClick={this.props.addGun}>申请武器</button>            
                <button onClick={this.props.removeGun}>上交武器</button>
                <button onClick={this.props.addGunAsync}>申请武器拖两天</button> 
            </div>        
        )       
    }
}

export default App