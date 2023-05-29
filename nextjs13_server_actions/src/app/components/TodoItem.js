'use client'
import React, { useTransition } from 'react'
import loading from '../loading';
import { deleteTodoAction, updateTodoAction } from '../_actions';

const TodoItem = ({todo}) => {

  const [isPending, startTransition] = useTransition();

  return (
    <div>
        <li className='flex items-center gap-3'>
          <input type="checkbox" id={todo.id} defaultChecked={todo.isCompleted}
          onChange={(e)=>startTransition(()=>updateTodoAction(todo.id,e.target.checked))}
            className='peer h-4 w-4 cursor-pointer rounded border-gray-300 text-xl'
          />

          <label htmlFor="todo.id" className='cursor-pointer peer-checked:text-slate-500 peer-checked:line-through'>{todo.title} </label>
          <span className='ml-auto text-sm text-slate-500 peer-checked:line-through'>{todo.updatedAt.toUTCString()}</span>
          <span className='text-red-500 cursor-pointer' onClick={(e)=>startTransition(()=>deleteTodoAction(todo.id))}>delete</span>

        </li>
    </div>
  )
}

export default TodoItem