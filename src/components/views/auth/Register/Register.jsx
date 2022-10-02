import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { v4 as uuidv4 } from 'uuid'
import { Switch, FormControlLabel } from '@mui/material'
import Swal from 'sweetalert2'

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export const Register = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}/auth/data`)
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
    teamID: '',
    role: '',
    continent: '',
    region: 'Otro',
    switch: false,
  }

  const required = '* Campo obligatorio'

  const validationSchema = Yup.object().shape({
    userName: Yup.string().min(4, 'La cantidad minima es 4').required(required),
    email: Yup.string().email('Debe ser un email válido').required(required),
    password: Yup.string().required(required),
    role: Yup.string().required(required),
    continent: Yup.string().required(required),
    region: Yup.string().required(required),
  })

  const onSubmit = async values => {
    const teamID = values.teamID ? values.teamID : uuidv4()
    const { userName, email, password, role, continent, region } = values

    try {
      const res = await fetch(`${API_ENDPOINT}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            userName,
            email,
            password,
            teamID,
            role,
            continent,
            region,
          },
        }),
      })
      const data = await res.json()

      if (data.status_code === 201) {
        const createdTeamID = data.result?.user?.teamID
        navigate('/registered/' + createdTeamID, { replace: true })
      } else {
        Swal.fire({
          title: 'Uppps!',
          text: 'Algo salió mal, vuelve a intentarlo',
          confirmButtonText: 'Aceptar',
          width: '400px',
          timer: 8000,
          timerProgressBar: true,
        })
      }
    } catch (err) {
      console.log(err)
    }
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
        <FormControlLabel
          control={
            <Switch
              value={values.switch}
              onChange={() => formik.setFieldValue('switch', !values.switch)}
              name="switch"
              color="secondary"
            />
          }
          label="Perteneces a un equipo ya creado"
        />
        {values.switch && (
          <div>
            <label htmlFor="teamID">
              Por favor, introduce el identificador de equipo
            </label>
            <input
              type="text"
              name="teamID"
              id="teamID"
              value={values.teamID}
              onChange={handleChange}
            />
          </div>
        )}
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
