import React, {Component} from 'react'

export default class Login extends Component{
    constructor(props){
        super(props)

        this.state ={
            username: '',
            password: '',
        }
    }

    handlePassword(val){
        this.setState({
            password: val
        })
    }
    handleUserName(val){
        this.setState({
            username: val
        })
    }
    login = () => {
        let str = this.state.username + ' ' + this.state.password
        alert(str)
    }

    render(){
        return(
            <div>
                <input type='text' onChange = {(e) => this.handleUserName(e.target.value)}/>
                <input type='text' onChange= {(e) => this.handlePassword(e.target.value)}/>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }

}