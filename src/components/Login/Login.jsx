import { useFormik } from 'formik'

export const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'El email es requerido'
    }

    if (!values.password) {
      errors.password = 'El password es requerido'
    }

    return errors
  }

  const onSubmit = () => {
    // localStorage.setItem('logged', 'yes')
    alert('Logged')
  }

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    validate,
    onSubmit,
  })

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="form-error">{errors.password}</div>
          )}
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}
