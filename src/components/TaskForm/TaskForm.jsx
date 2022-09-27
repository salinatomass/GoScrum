import { useFormik } from 'formik'
import * as Yup from 'yup'

import './TaskForm.styles.css'

export const TaskForm = () => {
  const initialValues = {
    title: '',
    status: '',
    priority: '',
    description: '',
  }

  const required = '* Campo obligatorio'

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(6, 'La cantidad minima es 6').required(required),
    status: Yup.string().required(required),
    priority: Yup.string().required(required),
    description: Yup.string()
      .min(6, 'La cantidad minima es 6')
      .max(140, 'La cantidad maxima es 140')
      .required(required),
  })

  const onSubmit = () => {
    alert('Good')
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const { handleChange, handleSubmit, errors, touched, handleBlur } = formik

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
              onBlur={handleBlur}
              className={errors.title && touched.title ? 'error' : ''}
            />
            {errors.title && touched.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>
          <div>
            <select
              name="status"
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.status && touched.status ? 'error' : ''}
            >
              <option value="">Seleccionar un estado</option>
              <option value="new">Nueva</option>
              <option value="inProcess">En proceso</option>
              <option value="finished">Terminada</option>
            </select>
            {errors.status && touched.status && (
              <span className="error-message">{errors.status}</span>
            )}
          </div>
          <div>
            <select
              name="priority"
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.priority && touched.priority ? 'error' : ''}
            >
              <option value="">Seleccionar una prioridad</option>
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
            {errors.priority && touched.priority && (
              <span className="error-message">{errors.priority}</span>
            )}
          </div>
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Descripcion"
            className={errors.description && touched.description ? 'error' : ''}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.description && touched.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  )
}
