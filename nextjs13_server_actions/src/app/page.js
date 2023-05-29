import { getTodos } from "@/lib/todos"
import NewTodoForm from "./components/NewTodoForm"
import TodoItem from "./components/TodoItem"

export default async function Home() {

  const {todos} = await getTodos()

  return (
    <>
      <div className="p-8">
        <div className="container">
          <h1 className="text-2xl font-bold">Todos</h1>

        <NewTodoForm/>


          <h2 className="text-xl font-bold">Previous todos:</h2>

          <ul>
            {todos?.map(todo => (
              <TodoItem key={todo.id} todo={todo}>{todo.title}</TodoItem>
            ))}
          </ul>
        </div>
      </div>
    </>  
  )
}
