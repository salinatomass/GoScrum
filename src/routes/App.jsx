import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../styles/App.css'
import { Login } from '../components/Login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
