import React, { Component } from 'react'
import Todo from './Todo'
 
class Todos extends Component {
 
  render() {
    return(
      <ul>
        {this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} key={index} /> })
        }
      </ul>
    )
  }
}
 
export default Todos