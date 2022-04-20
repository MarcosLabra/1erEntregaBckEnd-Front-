import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart'
import ItemListContainer from '../components/ItemListContainer'
import AddProduct from '../components/AddProduct'


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    )
}

export default Main