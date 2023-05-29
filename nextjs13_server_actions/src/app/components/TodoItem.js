import React from 'react'

const TodoItem = ({todo}) => {

  return (
    <div>
        <li>
            {todo.title}
        </li>
    </div>
  )
}

export default TodoItem