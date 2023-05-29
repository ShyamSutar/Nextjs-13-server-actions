"use server"

import { createTodo, updateTodo, deleteTodo } from "@/lib/todos"
import { revalidatePath } from "next/cache";

export async function createTodoAction(title){
    try {
        const data =await createTodo(title)
        revalidatePath('/')
        console.log(data);
    } catch (error) {
        return(error)
    }
}

export async function updateTodoAction(id, isCompleted){
    await updateTodo(id, isCompleted)
    revalidatePath('/');
}

export async function deleteTodoAction(id){
    await deleteTodo(id)
    revalidatePath('/');
}