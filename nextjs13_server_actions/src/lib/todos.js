import prisma from "./prisma";

export async function getTodos(){
    try {
        const todos = await prisma.todo.findMany()
        return (todos)
    } catch (error) {

        return (error)
    }
}

export async function createTodo(title){
    try {
        const todo = await prisma.Todo.create({data: {title}})
        return (todo)
    } catch (error) {
        return(error)
    }
}