import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions'


class Header extends Component {
    constructor(props) {
        super(props)
        console.log("我是Header的props",props)
    }

    handleAdd () {
        let title = this.input.value;
        this.props.events.addTodo(title)
        this.input.value = ""
    }

    handleKeyUp (event) {
        if(event.keyCode == 13){
            this.handleAdd()
        }
    }

    render() {
        return (
            <div className="header">
                您想做的事是:
                {' '}
                <input type="text" ref={input => this.input = input} onKeyUp={this.handleKeyUp.bind(this)}/>
                {' '}
                <button onClick={this.handleAdd.bind(this)}>去做</button>
            </div>
        )

    }
}

export default connect(
    null,
    dispatch => {
        return {
            events: bindActionCreators(actions,dispatch)
        }
    }
)(Header)
