import React, { useState } from 'react'

export const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = e => {
    setForm(prevForm => ({ ...prevForm, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
  }

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
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}
