
const Item = ({ item }) => {

  const handleDelete = () => {
    fetch(`https://primer-entrega-bckend.herokuapp.com/api/productos/${item.id}`, {method: 'DELETE'})
  };
  
  return (
    <article key={item.id} className="productCard">
      <img src={item.foto} alt={`foto de ${item.nombre}`} />
      <h3>{item.nombre}</h3>
      <p className="price">${item.precio}</p>
      <p>stock : {item.stock}</p>
      <p>descripcion: {item.descripcion}</p>
      <p>codigo: {item.codigo}</p>
      <button>Actualizar</button>
      <button onClick={handleDelete}>Eliminar</button>

    </article>
  )
}

export default Item