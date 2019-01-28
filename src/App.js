import React, { Component } from 'react'
import TodoList from './TodoList'
import './App.css'

class App extends Component {
  state = { 
    on: false,
    input: '',
    mainColor: 'blue',
    lifeCycle: ''
  }
  handleStrings(str) {
    if (str === 'Hello World') return true
    return false
  }
  componentDidMount() {
   this.setState({ lifeCycle: 'componentDidMount' })
  }
  componentWillReceiveProps() {
    this.setState({ lifeCycle: 'componentWillReceiveProps' })
  }
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    )
  }
}

export class Link extends Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>
  }
}

export default App