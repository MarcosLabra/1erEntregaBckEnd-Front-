const AddProduct = () => {

    return (
        <div className="form">
        <h4>Agregar productos</h4>
        <form action="https://primer-entrega-bckend.herokuapp.com/api/productos" method="POST">
            <label>Nombre <input type="text" name="nombre" /></label>
            <label>Descripcion <input type="text" name="descripcion" /></label>
            <label>Foto <input type="url" name="foto" /></label>
            <label>Codigo <input type="number" name="codigo" /></label>
            <label>Precio <input type="number" name="precio" /></label>
            <label>Stock <input type="number" name="stock" /></label>
            <input className="submit" type="submit" value={"agregar"} />
        </form>
        </div>
    )
}

export default AddProduct