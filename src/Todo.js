import React, { Component } from 'react'
import './Todo.css'





export default class Todo extends Component {

    







render() {
    return (

        <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
            <li className="todo-item">مهارت شماره :{this.props.id}</li>

         
            <li className="todo-item">{this.props.title} </li>
            
   

       
            
        </div>

    )
}
}