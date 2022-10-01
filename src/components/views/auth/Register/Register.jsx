import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

export const Register = () => {
  const [data, setData] = useState({})

  const fetchData = async () => {
    try {
      const res = await fetch('https://goscrum-api.alkemy.org/auth/data')
      const data = await res.json()
      setData(data.result)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const initialValues = {
    userName: '',
    email: '',
    password: '',
    teamID: 'e42bd420-067d-4cbc-a9bc-07832a796a56',
    role: '',
    continent: '',
    region: '',
  }

  const required = '* Campo obligatorio'

  const validationSchema = Yup.object().shape({
    userName: Yup.string().min(4, 'La cantidad minima es 4').required(required),
    email: Yup.string().email('Debe ser un email válido').required(required),
    password: Yup.string().required(required),
    // teamID: Yup.string().required(required),
    role: Yup.string().required(required),
    continent: Yup.string().required(required),
    region: Yup.string().required(required),
  })

  const onSubmit = values => {
    console.log(values)
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const { handleChange, handleSubmit, values, errors, touched, handleBlur } =
    formik

  return (
    <div className="auth">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Regístrate</h1>
        <div>
          <label htmlFor="userName">Nombre de usuario</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="name"
            className={errors.userName && touched.userName ? 'error' : ''}
          />
          {errors.userName && touched.userName && (
            <div className="form-error">{errors.userName}</div>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="email"
            className={errors.email && touched.email ? 'error' : ''}
          />
          {errors.email && touched.email && (
            <div className="form-error">{errors.email}</div>
          )}
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? 'error' : ''}
          />
          {errors.password && touched.password && (
            <div className="form-error">{errors.password}</div>
          )}
        </div>
        <input type="hidden" name="teamID" value={values.teamID} />
        <div>
          <label htmlFor="role">Rol</label>
          <select
            name="role"
            id="role"
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.role && touched.role ? 'error' : ''}
          >
            <option value="">Seleccionar rol...</option>
            {data.Rol?.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.role && touched.role && (
            <div className="form-error">{errors.role}</div>
          )}
        </div>
        <div>
          <label htmlFor="continent">Continente</label>
          <select
            name="continent"
            id="continent"
            value={values.continent}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.continent && touched.continent ? 'error' : ''}
          >
            <option value="">Seleccionar continente...</option>
            {data.continente?.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.continent && touched.continent && (
            <div className="form-error">{errors.continent}</div>
          )}
        </div>
        {values.continent === 'America' && (
          <div>
            <label htmlFor="region">Región</label>
            <select
              name="region"
              id="region"
              value={values.region}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.region && touched.region ? 'error' : ''}
            >
              <option value="">Seleccionar region...</option>
              {data.region?.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.region && touched.region && (
              <div className="form-error">{errors.region}</div>
            )}
          </div>
        )}
        <div>
          <button type="submit">Enviar</button>
        </div>
        <div>
          <Link to="/login">Iniciar sesión</Link>
        </div>
      </form>
    </div>
  )
}
