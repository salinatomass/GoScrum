import { useFormik } from 'formik'
import * as Yup from 'yup'

import './TaskForm.styles.css'

export const TaskForm = () => {
  const initialValues = {
    title: '',
    status: '',
    priority: '',
    descrption: '',
  }

  const required = '* Campo obligatorio'

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(6, 'La cantidad minima es 6').required(required),
    status: Yup.string().required(required),
    priority: Yup.string().required(required),
  })

  const onSubmit = () => {
    alert('Good')
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const { handleChange, handleSubmit, errors } = formik

  return (
    <div className="task-form">
      <h2>Crear tarea</h2>
      <p>Crea tus tareas</p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Titulo"
              onChange={handleChange}
            />
            {errors.title && <span>{errors.title}</span>}
          </div>
          <div>
            <select name="status" onChange={handleChange}>
              <option value="">Seleccionar un estado</option>
              <option value="new">Nueva</option>
              <option value="inProcess">En proceso</option>
              <option value="finished">Terminada</option>
            </select>
            {errors.status && <span>{errors.status}</span>}
          </div>
          <div>
            <select name="priority" onChange={handleChange}>
              <option value="">Seleccionar una prioridad</option>
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
            {errors.priority && <span>{errors.priority}</span>}
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
