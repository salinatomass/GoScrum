import './Tasks.styles.css'
import { useResize } from '../../../hooks/useResize'
import Header from '../../Header/Header'
import { TaskForm } from '../../TaskForm/TaskForm'
import Card from '../../Card/Card'
import { tasksData } from './tasksData'

export const Tasks = () => {
  const { isPhone } = useResize()

  const limitString = str => {
    if (str.length > 170)
      return { string: str.slice(0, 167).concat('...'), addButton: true }
    return { string: str, addButton: false }
  }

  const renderAllTasks = () => {
    return tasksData.map(task => <Card key={task.id} data={task} />)
  }

  return (
    <>
      <Header />
      <main id="tasks">
        <TaskForm />
        <section className="wrapper_list">
          <div className="list_header">
            <h2>Mis tareas</h2>
          </div>
          {isPhone ? (
            <div className="list phone">{renderAllTasks()}</div>
          ) : (
            <div className="list_group">
              <div className="list">
                <h4>Nuevas</h4>
                <Card data={tasksData[0]} />
              </div>
              <div className="list">
                <h4>En proceso</h4>
                <Card data={tasksData[1]} />
              </div>
              <div className="list">
                <h4>Finalizadas</h4>
                <Card data={tasksData[2]} />
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  )
}
