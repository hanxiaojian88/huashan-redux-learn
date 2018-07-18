import React,{Component} from 'react';

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            title: ''
        }
    }
    doubleClick () {
        this.setState({
            isEdit: true
        })
    }


    handleOnBlur () {
        this.setState({
            isEdit: false
        })
    }

    handleKeyUp (event) {
        if(event.keyCode == 13) {
            this.handleOnBlur();
        }
    }
    handleChange(event) {
        this.props.actions.updateTodo(event.target.value, this.props.index)
    }
    render() {
        let {actions, item, index} = this.props;


        function getView() {
            if(this.state.isEdit){
                return (
                    <input autoFocus="autoFocus"
                           value={item.title}

                           type="text"
                           onChange={this.handleChange.bind(this)}
                           onKeyUp={this.handleKeyUp.bind(this)}
                           onBlur={this.handleOnBlur.bind(this)}  />
                )
            }
            else {
                return (
                    <span onDoubleClick={this.doubleClick.bind(this)}>{item.title}
                        {' '}
                        <button onClick={actions.delete.bind(this,index)}>
                    X
                    </button>
                        {' '}
                        <button onClick={actions.toggleTodo.bind(this,index)}>
                    {item.done?'取消完成状态': '已完成'}
                    </button>
                    </span>
                )
            }
        }
        return (
            <li className={item.done?'done':''}>
                {getView.bind(this)()}
            </li>
        )

    }
}

export default Item