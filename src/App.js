import React, { Component } from 'react';
import Header from './components/Header'
import MainSection from './components/MainSection'
import './App.css'
import {connect} from 'react-redux';

class App extends Component {
  constructor (props) {
    super()
  }
  render() {
      let {todos} = this.props;
      let doneNum = 0;
      console.log(todos);
      todos.forEach(item => {
          if(!item.done) {
              doneNum ++
          }
      })
    return (
      <div className="App">
          <Header></Header>
          <hr/>
          <MainSection></MainSection>
          <hr/>
          <h3>剩余未完成:{doneNum}</h3>
      </div>
    );
  }
}

export default connect(
    state => (
        {
            todos: state.todos
        }
    ),
    null
)(App);
