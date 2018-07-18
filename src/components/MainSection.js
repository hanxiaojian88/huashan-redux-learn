import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions'
import Item from './Item'


class MainSection extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map((item, index) => (
                        <Item item={item}
                              key={index}
                              index={index}
                              actions={this.props.actions}
                        ></Item>
                    ))}
                </ul>
            </div>
        )

    }
}

export default connect(
    state => ({
        todos: state.todos
    }),
    dispatch => ({
        actions: bindActionCreators(actions,dispatch)
    })
)(MainSection)