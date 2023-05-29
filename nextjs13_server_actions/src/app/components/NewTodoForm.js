'use client'
import React from 'react'
import { createTodoAction } from '../_actions'

const NewTodoForm = () => {
    async function action (formData){
        const title = formData.get('title')

        const data = await createTodoAction(title)
        console.log(data);
    }
  return (
    <div>
        <form action={action}>
            <h2>Create a new Todo</h2>
            <input className='border' type="text" name='title'/>
            <button className='border' type='submit'>Add Todo</button>
        </form>
    </div>
  )
}

export default NewTodoForm