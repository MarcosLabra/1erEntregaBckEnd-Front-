import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="active">Productos</NavLink>
            <NavLink to="/addproduct" activeClassName="active">Agregar Producto</NavLink>
            <NavLink to="/cart" activeClassName="active">Carrito</NavLink>
        </nav>
    )
}

export default NavBar