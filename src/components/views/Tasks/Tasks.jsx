import { useState, useEffect } from 'react'
import './Tasks.styles.css'
import { useResize } from '../../../hooks/useResize'
import Header from '../../Header/Header'
import { TaskForm } from '../../TaskForm/TaskForm'
import Card from '../../Card/Card'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

export const Tasks = () => {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { isPhone } = useResize()

  const renderAllTasks = () =>
    list.map(task => <Card key={task._id} data={task} />)

  const renderNewTasks = () =>
    list
      .filter(task => task.status === 'NEW')
      .map(task => <Card key={task._id} data={task} />)

  const renderInProgressTasks = () =>
    list
      .filter(task => task.status === 'IN PROGRESS')
      .map(task => <Card key={task._id} data={task} />)

  const renderFinishedTasks = () =>
    list
      .filter(task => task.status === 'FINISHED')
      .map(task => <Card key={task._id} data={task} />)

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
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

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
          {isLoading ? (
            <Skeleton count={10} />
          ) : isPhone ? (
            <div className="list phone">
              {!list.length ? <p>No hay tareas creadas</p> : renderAllTasks()}
            </div>
          ) : (
            <div className="list_group">
              {!list.length ? (
                <p>No hay tareas creadas</p>
              ) : (
                <>
                  <div className="list">
                    <h4>Nuevas</h4>
                    {renderNewTasks()}
                  </div>
                  <div className="list">
                    <h4>En proceso</h4>
                    {renderInProgressTasks()}
                  </div>
                  <div className="list">
                    <h4>Finalizadas</h4>
                    {renderFinishedTasks()}
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
