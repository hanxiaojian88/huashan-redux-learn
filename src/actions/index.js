export default {
    addTodo(title) {
        return {
            type: 'ADD_TODO',
            title
        }
    },
    delete(index) {
        return {
            type: 'DELETE_TODO',
            index
        }
    },
    toggleTodo (index) {
        return {
            type: 'TOGGLE_TODO',
            index
        }
    },
    updateTodo (title, index) {
        return {
            type: 'UPDATE_TODO',
            title,
            index
        }
    }
}