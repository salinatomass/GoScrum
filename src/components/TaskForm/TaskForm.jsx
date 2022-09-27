import { useFormik } from 'formik'

import './TaskForm.styles.css'

export const TaskForm = () => {
  const initialValues = {
    title: '',
    status: '',
    priority: '',
    descrption: '',
  }

  const onSubmit = () => {
    alert('Good')
  }

  const formik = useFormik({ initialValues, onSubmit })
  const { handleChange, handleSubmit } = formik

  return (
    <div className="task-form">
      <h2>Crear tarea</h2>
      <p>Crea tus tareas</p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input type="text" name="title" placeholder="Titulo" />
          </div>
          <div>
            <select name="status">
              <option value="">Seleccionar un estado</option>
              <option value="new">Nueva</option>
              <option value="inProcess">En proceso</option>
              <option value="finished">Terminada</option>
            </select>
          </div>
          <div>
            <select name="priority">
              <option value="">Seleccionar una prioridad</option>
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
          </div>
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Descripcion"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  )
}
