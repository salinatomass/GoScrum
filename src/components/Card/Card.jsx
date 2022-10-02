const Card = ({ data }) => {
  const {
    title,
    description,
    createdAt,
    user: { userName },
    status,
    importance,
  } = data

  const limitString = str => {
    if (str.length > 170)
      return { string: str.slice(0, 167).concat('...'), addButton: true }
    return { string: str, addButton: false }
  }

  return (
    <article className="card">
      <div className="close">x</div>
      <h3>{title}</h3>
      <h6>{createdAt}</h6>
      <h5>{userName}</h5>
      <button type="button">{status.toLowerCase()}</button>
      <button type="button">{importance.toLowerCase()}</button>
      <p>{limitString(description).string}</p>
    </article>
  )
}

export default Card
