
import modalStyles from "../Styles/modal.module.css"

const Modal = ({
  modalReference,
  editedValue,
  setEditedValue,
  todos,
  setTodos,
  idToUpdate,
}) => {
  const handleUpdate = () => {
    const updatedTodos = todos.map(todo =>
      todo.id === idToUpdate ? { ...todo, task: editedValue } : todo
    )
    setTodos(updatedTodos)
    modalReference.current.close()
  }

  return (
    <dialog ref={modalReference} className={modalStyles.modal}>
      <textarea
        autoFocus
        name=""
        id=""
        rows={5}
        className={modalStyles.textarea}
        value={editedValue}
        onChange={e => {
          setEditedValue(e.target.value)
        }}
      ></textarea>
      <div>
        <div className={modalStyles.buttons}>
          <button
            onClick={() => {
              modalReference.current.close()
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleUpdate()
            }}
          >
            Update
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default Modal
