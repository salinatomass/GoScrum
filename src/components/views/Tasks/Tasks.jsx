import { useState, useEffect } from 'react'

import './Tasks.styles.css'
import Header from '../../Header/Header'

export const Tasks = () => {
  const [isPhone, setIsPhone] = useState(window.innerWidth < 900)

  const limitString = str => {
    if (str.length > 170)
      return { string: str.slice(0, 167).concat('...'), addButton: true }
    return { string: str, addButton: false }
  }

  const handleResize = () => {
    if (window.innerWidth < 900) setIsPhone(true)
    else setIsPhone(false)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Header />
      <main id="tasks">
        <section className="wrapper_list">
          <div className="list_header">
            <h2>Mis tareas</h2>
          </div>
          {isPhone ? (
            <div className="list phone">
              <article className="card">
                <div className="close">x</div>
                <h3>Tarea 1 PHONE</h3>
                <h6>24/08/2022 16:41 hs.</h6>
                <h5>Tomas Salina</h5>
                <button type="button">Nueva</button>
                <button type="button">Alta</button>
                <p>Fake Description</p>
              </article>
            </div>
          ) : (
            <div className="list_group">
              <div className="list">
                <h4>Nuevas</h4>
                <article className="card">
                  <div className="close">x</div>
                  <h3>Tarea 1</h3>
                  <h6>24/08/2022 16:41 hs.</h6>
                  <h5>Tomas Salina</h5>
                  <button type="button">Nueva</button>
                  <button type="button">Alta</button>
                  <p>
                    {
                      limitString(`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti laudantium rerum obcaecati optio alias deleniti
                exercitationem quod quisquam nobis doloremque repellat similique
                tempora, quasi quis, perferendis quo labore. Dolorum, vel! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Ab, ratione
                corporis perferendis tempora saepe adipisci omnis?`).string
                    }
                  </p>
                </article>
              </div>
              <div className="list">
                <h4>En proceso</h4>
                <article className="card">
                  <div className="close">x</div>
                  <h3>Tarea 1</h3>
                  <h6>24/08/2022 16:41 hs.</h6>
                  <h5>Tomas Salina</h5>
                  <button type="button">Nueva</button>
                  <button type="button">Alta</button>
                  <p>Fake Description</p>
                </article>
              </div>
              <div className="list">
                <h4>Finalizadas</h4>
                <article className="card">
                  <div className="close">x</div>
                  <h3>Tarea 1</h3>
                  <h6>24/08/2022 16:41 hs.</h6>
                  <h5>Tomas Salina</h5>
                  <button type="button">Nueva</button>
                  <button type="button">Alta</button>
                  <p>Fake Description</p>
                </article>
                <article className="card">
                  <div className="close">x</div>
                  <h3>Tarea 1</h3>
                  <h6>24/08/2022 16:41 hs.</h6>
                  <h5>Tomas Salina</h5>
                  <button type="button">Nueva</button>
                  <button type="button">Alta</button>
                  <p>Fake Description</p>
                </article>
              </div>
            </div>
          )}
          {/* <div className="list">
            <article className="card">
              <div className="close">x</div>
              <h3>Tarea 1</h3>
              <h6>24/08/2022 16:41 hs.</h6>
              <h5>Tomas Salina</h5>
              <button type="button">Nueva</button>
              <button type="button">Alta</button>
              <p>Fake Description</p>
            </article>
            <article className="card">
              <div className="close">x</div>
              <h3>Tarea 1</h3>
              <h6>24/08/2022 16:41 hs.</h6>
              <h5>Tomas Salina</h5>
              <button type="button">Nueva</button>
              <button type="button">Alta</button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti laudantium rerum obcaecati optio alias deleniti
                exercitationem quod quisquam nobis doloremque repellat similique
                tempora, quasi quis, perferendis quo labore. Dolorum, vel! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Ab, ratione
                corporis perferendis tempora saepe adipisci omnis? Quia deserunt
                dolorem iusto aliquid ea velit numquam placeat, quaerat
                necessitatibus! Ad, facere eveniet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Corrupti laudantium rerum
                obcaecati optio alias deleniti exercitationem quod quisquam
                nobis doloremque repellat similique tempora, quasi quis,
                perferendis quo labore. Dolorum, vel! Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Ab, ratione corporis
                perferendis tempora saepe adipisci omnis? Quia deserunt dolorem
                iusto aliquid ea velit numquam placeat, quaerat necessitatibus!
                Ad, facere eveniet. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corrupti laudantium rerum obcaecati optio
                alias deleniti exercitationem quod quisquam nobis doloremque
                repellat similique tempora, quasi quis, perferendis quo labore.
                Dolorum, vel! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Ab, ratione corporis perferendis tempora saepe
                adipisci omnis? Quia deserunt dolorem iusto aliquid ea velit
                numquam placeat, quaerat necessitatibus! Ad, facere eveniet.
              </p>
            </article>
            <article className="card">
              <div className="close">x</div>
              <h3>Tarea 1</h3>
              <h6>24/08/2022 16:41 hs.</h6>
              <h5>Tomas Salina</h5>
              <button type="button">Nueva</button>
              <button type="button">Alta</button>
              <p>Fake Description</p>
            </article>
          </div> */}
        </section>
      </main>
    </>
  )
}
