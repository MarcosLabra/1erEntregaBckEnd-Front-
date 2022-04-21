import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { toast } from "react-toastify"




const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])


  useEffect(() => {

    fetch('https://primer-entrega-bckend.herokuapp.com/api/productos', {method: 'GET'})
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => toast.error("Error al cargar productos"))
      .finally(() => setLoading(false))

  }, [])
  
  return loading ? <h4>Cargando...</h4> : <ItemList items={items} />

}
export default ItemListContainer