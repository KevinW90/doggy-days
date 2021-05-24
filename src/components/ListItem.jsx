import '../styles/list-item.scss'

function ListItem({ pet: { name, owner } }) {
  return (
    <div className="list-item">
      <div className="list-item__name">
        {name}
      </div>
    </div>    
  )
}

export default ListItem
