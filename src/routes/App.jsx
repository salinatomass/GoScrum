import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../styles/App.css'
import { Tasks } from '../components/views/Tasks'
import { Login } from '../components/views/Login'
import { Register } from '../components/views/Register'
import { NotFound } from '../components/views/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
