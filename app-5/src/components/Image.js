import React, { Component } from 'react'

export default class Image extends Component{
    render(){
        return (
        <div>
            <img src={this.props.url}/>
            <caption> 
            <h1> cats will be cats </h1>
             </caption>


        </div>
        )
    }
}