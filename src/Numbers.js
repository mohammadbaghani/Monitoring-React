import React, { Component } from 'react'
import './Todo.css'





export default class Numbers extends Component {

    





removeClickHandler(id) {
    this.props.onRemove(id)
}

editClickHandler(id) {
    this.props.onEdit(id)
}

render() {
    return (

        <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>


<li className="todo-item"> نمره شما به خودتان :</li>
            <li className="todo-item">{this.props.t}</li>
            
   

       
            
        </div>

    )
}
}