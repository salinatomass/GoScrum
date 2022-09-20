const Card = ({ data }) => {
  const { title, description, datetime, creator, type, priority } = data

  return (
    <article className="card">
      <div className="close">x</div>
      <h3>{title}</h3>
      <h6>{datetime}</h6>
      <h5>{creator}</h5>
      <button type="button">{type}</button>
      <button type="button">{priority}</button>
      <p>{description}</p>
    </article>
  )
}

export default Card
