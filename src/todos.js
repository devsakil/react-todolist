import React, {component} from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="bg-secondary">
                <div className='m-2 text-white d-flex p-2' key='{todo.id}'>
                    <span className='my-auto col-2'>{todo.date}</span>
                    <span className='my-auto flex-grow-1 '>{todo.content}</span>
                    <button onClick={() => {deleteTodo(todo.id)}} className='btn btn-danger'>X</button>
                </div>
                </div>
            )
        })
    ) : ( <p className='center text-white'> You have no todos left</p> )

    return (
        <div className="todos collection">
             {todoList}
        </div>
    )
}

export default Todos;