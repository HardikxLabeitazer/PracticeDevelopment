import React, { Component } from 'react'

export class TodoBanner extends Component {
  render() {
    return (
      <div>
          <h3>{this.props.name}'s To Do List
          ({this.props.tasks.filter(t=>!t.done).length} items to do</h3>
      </div>
    )
  }
}

export default TodoBanner