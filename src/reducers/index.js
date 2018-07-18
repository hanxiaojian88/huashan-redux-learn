export default (state, action) => {
    if(state == undefined){
        state = {
            todos: [
                {
                    title: '学习FLUX',
                    done: false
                }
            ]
        }
    }

    switch (action.type) {
        case 'ADD_TODO':
           return {
               todos: [...state.todos,{title: action.title,done: false}]
           }

        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((item, index) =>
                    (index != action.index))
            }

        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((item, index) => {
                    if(action.index == index){
                        return {
                            ...item,
                            done: !item.done
                        }
                    }
                    return item
                })
            }
        case 'UPDATE_TODO':
            return {
                todos: state.todos.map((item, index)=> {
                    if(action.index == index) {
                        return {
                            ...item,
                            title: action.title
                        }
                    }
                    return item
                })
            }
        default:
            return state
    }


    return state
}