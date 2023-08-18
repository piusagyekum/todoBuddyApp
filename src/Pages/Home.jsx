import { useEffect, useState } from "react"
import ListItem from "../components/ListItem"

const Home = () => {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  )

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleSubmit = e => {
    e.preventDefault()

    if (newTodo.length === 0) return

    const id = Math.random() * 9999

    const date = new Date()

    setTodos(prev => [...prev, { id, task: newTodo, date, checked: false }])

    setNewTodo("")
  }

  return (
    <main className="container">
      <form action="" id="todo-form">
        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          name="todo"
          id="todo"
          autoFocus
          value={newTodo}
          onChange={e => {
            setNewTodo(e.target.value)
          }}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
      <ul>
        {todos &&
          todos.map(todo => (
            <ListItem
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
      </ul>
      {todos.length === 0 ? <div>No records to display</div> : ""}
    </main>
  )
}

export default Home
