import { useNavigate, Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export const Login = () => {
  const navigate = useNavigate()
  const initialValues = {
    userName: '',
    password: '',
  }

  const required = '* Campo obligatorio'

  const validationSchema = Yup.object().shape({
    userName: Yup.string().min(4, 'La cantidad minima es 4').required(required),
    password: Yup.string().required(required),
  })

  const onSubmit = async values => {
    const { userName, password } = values

    try {
      const res = await fetch(`${API_ENDPOINT}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName,
          password,
        }),
      })
      const data = await res.json()

      if (data.status_code === 200) {
        localStorage.setItem('token', data.result?.token)
        navigate('/', { replace: true })
      } else {
        Swal.fire({
          title: 'Credencials inválidas',
          text: 'Por favor introduzca credenciales válidas',
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
        <h1>Iniciar sesión</h1>
        <div>
          <label htmlFor="userName">Nombre de usuario</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.userName && touched.userName ? 'error' : ''}
          />
          {errors.userName && touched.userName && (
            <div className="form-error">{errors.userName}</div>
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
        <div>
          <button type="submit">Enviar</button>
        </div>
        <div>
          <Link to="/register">Registrarme</Link>
        </div>
      </form>
    </div>
  )
}
