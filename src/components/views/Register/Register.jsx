import { useFormik } from 'formik'

export const Register = () => {
  const initialValues = {
    userName: '',
    email: '',
    password: '',
    teamID: 'e42bd420-067d-4cbc-a9bc-07832a796a56',
    role: 'Team Member',
    continent: 'America',
    region: 'Latam',
  }

  const onSubmit = values => {
    console.log(values)
  }

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    onSubmit,
  })

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
            autoComplete="name"
          />
          {errors.userName && (
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
            autoComplete="email"
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
        <input type="hidden" name="teamID" value={values.teamID} />
        <div>
          <label htmlFor="role">Rol</label>
          <select
            name="role"
            id="role"
            value={values.role}
            onChange={handleChange}
          >
            <option value="Team Member">Team Member</option>
            <option value="Team Leader">Team Leader</option>
          </select>
          {errors.role && <div className="form-error">{errors.role}</div>}
        </div>
        <div>
          <label htmlFor="continent">Continente</label>
          <select
            name="continent"
            id="continent"
            value={values.continent}
            onChange={handleChange}
          >
            <option value="America">America</option>
            <option value="Europa">Europa</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.continent && (
            <div className="form-error">{errors.continent}</div>
          )}
        </div>
        <div>
          <label htmlFor="region">Región</label>
          <select
            name="region"
            id="region"
            value={values.region}
            onChange={handleChange}
          >
            <option value="Latam">Latam</option>
            <option value="Brasil">Brasil</option>
            <option value="America del Norte">America del Norte</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.region && <div className="form-error">{errors.region}</div>}
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}
