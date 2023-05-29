"use server"

import { createTodo } from "@/lib/todos"
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