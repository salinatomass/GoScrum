import { useState } from 'react'

const Card = ({ data }) => {
  const {
    title,
    description,
    createdAt,
    user: { userName },
    status,
    importance,
  } = data

  const [showMore, setShowMore] = useState(false)

  const datetime = new Date(createdAt).toLocaleString()

  const limitString = str => {
    if (str.length > 170)
      return { string: str.slice(0, 167).concat('...'), addButton: true }
    return { string: str, addButton: false }
  }

  return (
    <article className="card">
      <div className="close">x</div>
      <h3>{title}</h3>
      <h6>{datetime}</h6>
      <h5>{userName}</h5>
      <button className={status.toLowerCase()} type="button">
        {status.toLowerCase()}
      </button>
      <button className={importance.toLowerCase()} type="button">
        {importance.toLowerCase()}
      </button>
      {!showMore && <p>{limitString(description).string}</p>}
      {showMore && (
        <>
          <p>{description}</p>
          <button type="button" onClick={() => setShowMore(false)}>
            Ver menos
          </button>
        </>
      )}
      {!showMore && limitString(description).addButton && (
        <button type="button" onClick={() => setShowMore(true)}>
          Ver más
        </button>
      )}
    </article>
  )
}

export default Card
