"use server"

import { createTodo } from "@/lib/todos"

export async function createTodoAction(title){
    try {
        const data =await createTodo(title)
        console.log(data);
    } catch (error) {
        return(error)
    }
}