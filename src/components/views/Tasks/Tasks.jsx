import Header from '../../Header/Header'

import './Tasks.styles.css'

export const Tasks = () => {
  return (
    <>
      <Header />
      <main id="tasks">
        <section className="wrapper_list">
          <div className="list_header">
            <h2>Mis tareas</h2>
          </div>
          <div className="list">
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
          </div>
        </section>
      </main>
    </>
  )
}
