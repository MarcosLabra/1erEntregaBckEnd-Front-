
const Item = ({ item }) => {
  return (
    <article key={item.id} className="productCard">
      <img src={item.foto} alt={`foto de ${item.nombre}`} />
      <h3>{item.nombre}</h3>
      <p className="price">${item.precio}</p>
      <p>stock : {item.stock}</p>
      <p>descripcion: {item.descripcion}</p>
      <p>codigo: {item.codigo}</p>
      <button>Actualizar</button>
      <button>Eliminar</button>

    </article>
  )
}

export default Item