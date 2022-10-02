import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './TaskForm.styles.css'

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export const TaskForm = () => {
  const initialValues = {
    title: '',
    status: '',
    importance: '',
    description: '',
  }

  const required = '* Campo obligatorio'

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(6, 'La cantidad minima es 6').required(required),
    status: Yup.string().required(required),
    importance: Yup.string().required(required),
    description: Yup.string()
      .min(6, 'La cantidad minima es 6')
      .max(340, 'La cantidad maxima es 340')
      .required(required),
  })

  const onSubmit = async values => {
    try {
      const res = await fetch(`${API_ENDPOINT}/task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({ task: values }),
      })
      const data = await res.json()
      if (data.status_code === 200) {
        resetForm()
        toast('Tu tarea se creó')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
  } = formik

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
              value={values.title}
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
              value={values.status}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.status && touched.status ? 'error' : ''}
            >
              <option value="">Seleccionar un estado</option>
              <option value="NEW">Nueva</option>
              <option value="IN PROGRESS">En proceso</option>
              <option value="FINISHED">Terminada</option>
            </select>
            {errors.status && touched.status && (
              <span className="error-message">{errors.status}</span>
            )}
          </div>
          <div>
            <select
              name="importance"
              value={values.importance}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.importance && touched.importance ? 'error' : ''}
            >
              <option value="">Seleccionar una prioridad</option>
              <option value="LOW">Baja</option>
              <option value="MEDIUM">Media</option>
              <option value="HIGH">Alta</option>
            </select>
            {errors.importance && touched.importance && (
              <span className="error-message">{errors.importance}</span>
            )}
          </div>
        </div>
        <div>
          <textarea
            name="description"
            value={values.description}
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
      <ToastContainer />
    </div>
  )
}
