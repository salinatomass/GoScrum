import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import { Tasks } from '../components/views/Tasks'
import { Login, Register } from '../components/views/auth'
import { Registered } from '../components/views/Registered'
import { Donate } from '../components/views/Donate'

const NotFound = lazy(() => import('../components/views/NotFound'))

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem('token'))
    return <Navigate to="/login" replace={true} />

  return children
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Tasks />
            </RequireAuth>
          }
        />
        <Route
          path="/donate"
          element={
            <RequireAuth>
              <Donate />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registered/:teamID" element={<Registered />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<>...</>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
