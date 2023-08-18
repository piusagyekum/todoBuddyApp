const ListItem = ({ todo, todos, setTodos }) => {
  const toggleCheck = id => {

    console.log(id)
    console.log(todos)
    const updatedTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, checked: !todo.checked } : todo
    })
    console.log(updatedTodos)
    setTodos(updatedTodos)
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => {
          toggleCheck(todo.id)
        }}
      />
      <p>{todo.task}</p>
      <p>{todo.date.toString()}</p>
    </div>
  )
}

export default ListItem
