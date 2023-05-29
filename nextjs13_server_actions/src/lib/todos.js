import prisma from "./prisma";

export async function getTodos(){
    try {
        const todos = await prisma.Todo.findMany();
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

export async function updateTodo(id, isCompleted){
    try {
        const tddo = await prisma.Todo.update({where:{id}, data:{isCompleted}})
        return (todo)
    } catch (error) {
        return(error)
    }
}

export async function deleteTodo(id){
    try {
        const todo = await prisma.Todo.delete({
            where: {
              id: id,
            },
          })
        return (todo)
    } catch (error) {
        return(error)
    }
}