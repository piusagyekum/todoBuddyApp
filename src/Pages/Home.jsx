import { useEffect, useRef, useState } from "react"
import ListItem from "../components/ListItem"
import Modal from "../components/Modal"
import { IoMdAdd } from "react-icons/io"
const Home = () => {
  const modalReference = useRef()
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  )
  const [editedValue, setEditedValue] = useState()
  const [idToUpdate, setIdToUpdate] = useState()

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
    <>
      <header>
        <h1>TodoBuddy</h1>
      </header>
      <main className="container">
        <form action="" id="todo-form" onSubmit={handleSubmit}>
          <div
            style={{
              border: "1px solid #8a2be2",
              display: "flex",
            }}
          >
            <label htmlFor="todo">Todo</label>
            <input
              type="text"
              name="todo"
              id="todo"
              placeholder="Type your Todo..."
              autoFocus
              value={newTodo}
              onChange={e => {
                setNewTodo(e.target.value)
              }}
            />
            <button>
              <IoMdAdd size={20} color="" />
            </button>
          </div>
        </form>
        <ul>
          {todos &&
            todos.map(todo => (
              <ListItem
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                modalReference={modalReference}
                editedValue={editedValue}
                setEditedValue={setEditedValue}
                idToUpdate={idToUpdate}
                setIdToUpdate={setIdToUpdate}
              />
            ))}
        </ul>
        {todos.length === 0 ? <div style={{
          color:"white",
          textAlign:'center'
        }}>No records to display</div> : ""}
      </main>
      <Modal
        modalReference={modalReference}
        editedValue={editedValue}
        setEditedValue={setEditedValue}
        todos={todos}
        setTodos={setTodos}
        idToUpdate={idToUpdate}
        setIdToUpdate={setIdToUpdate}
      />
    </>
  )
}

export default Home
