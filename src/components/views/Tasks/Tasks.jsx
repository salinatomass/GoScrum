import { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import { useResize } from '../../../hooks/useResize'
import Header from '../../Header/Header'
import { TaskForm } from '../../TaskForm/TaskForm'
import Card from '../../Card/Card'

import './Tasks.styles.css'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import { Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material'

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export const Tasks = () => {
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { isPhone } = useResize()

  const fetchTasks = async () => {
    setIsLoading(true)

    try {
      const res = await fetch(`${API_ENDPOINT}/task`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      const data = await res.json()
      setList(data.result)
      setFilteredList(data.result)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  const renderAllTasks = () =>
    filteredList.map(task => <Card key={task._id} data={task} />)

  const renderCollumnTasks = text =>
    filteredList
      .filter(task => task.status === text)
      .map(task => <Card key={task._id} data={task} />)

  const handleChangeImportance = e => {
    if (e.target.value === 'ALL') return setFilteredList(list)
    setFilteredList(list.filter(task => task.importance === e.target.value))
  }

  const handleChangeWho = e => {
    if (e.target.value === 'ME')
      return setFilteredList(
        list.filter(
          task => task.user.userName === localStorage.getItem('userName')
        )
      )
    setFilteredList(list)
  }

  const handleSearch = debounce(e => {
    const formatedSearch = e.target.value.toLowerCase().replace(/\s/g, '')
    setFilteredList(
      list.filter(task => {
        const formattedTask = task.title.toLowerCase().replace(/\s/g, '')
        return formattedTask.includes(formatedSearch)
      })
    )
  }, 1000)

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      <Header />
      <main id="tasks">
        <TaskForm />
        <section className="wrapper_list">
          <div className="list_header">
            <h2>Mis tareas</h2>
          </div>
          <div className="filters">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                onChange={handleChangeWho}
              >
                <FormControlLabel
                  value="ALL"
                  control={<Radio />}
                  label="Todas"
                />
                <FormControlLabel
                  value="ME"
                  control={<Radio />}
                  label="Mis tareas"
                />
              </RadioGroup>
            </FormControl>
            <div className="search">
              <input
                type="text"
                placeholder="Buscar por título..."
                onChange={handleSearch}
              />
            </div>
            <select name="importance" onChange={handleChangeImportance}>
              <option value="">Seleccionar una prioridad</option>
              <option value="ALL">Todas</option>
              <option value="LOW">Baja</option>
              <option value="MEDIUM">Media</option>
              <option value="HIGH">Alta</option>
            </select>
          </div>
          {isLoading ? (
            <Skeleton count={10} />
          ) : isPhone ? (
            <div className="list phone">
              {!filteredList.length ? (
                <p>No hay tareas creadas</p>
              ) : (
                renderAllTasks()
              )}
            </div>
          ) : (
            <div className="list_group">
              {!filteredList.length ? (
                <p>No hay tareas creadas</p>
              ) : (
                <>
                  <div className="list">
                    <h4>Nuevas</h4>
                    {renderCollumnTasks('NEW')}
                  </div>
                  <div className="list">
                    <h4>En proceso</h4>
                    {renderCollumnTasks('IN PROGRESS')}
                  </div>
                  <div className="list">
                    <h4>Finalizadas</h4>
                    {renderCollumnTasks('FINISHED')}
                  </div>
                </>
              )}
            </div>
          )}
        </section>
      </main>
    </>
  )
}
