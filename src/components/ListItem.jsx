import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { MdDelete } from "react-icons/md"
import { FaPencil } from "react-icons/fa6"

const ListItem = ({
  todo,
  todos,
  setTodos,
  modalReference,
  setEditedValue,
  setIdToUpdate,
}) => {
  const toggleCheck = id => {
    console.log(id)
    console.log(todos)
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    )
    console.log(updatedTodos)
    setTodos(updatedTodos)
  }

  const handleDelete = id => {
    const updatedTodos = todos.filter(todo => {
      return todo.id !== id
    })

    setTodos(updatedTodos)
  }

  return (
    <>
      <li className="list-item">
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => {
            toggleCheck(todo.id)
          }}
        />
        <div>
          <p>{todo.task}</p>
          <p>
            created:{" "}
            {formatDistanceToNow(new Date(todo.date), { addSuffix: true })}
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <FaPencil
            color="#8a2be2"
            size={15}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIdToUpdate(todo.id)
              setEditedValue(todo.task)
              modalReference.current.showModal()
            }}
          />
          <MdDelete
            color="#8a2be2"
            size={20}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleDelete(todo.id)
            }}
          />
        </div>
      </li>
    </>
  )
}

export default ListItem
