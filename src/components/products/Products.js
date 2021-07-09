import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProductsStyled, ProductsTitle, CardContainer, Card, CardImg, CardBtn } from './ProductsStyles'
import * as cartActions from '../../redux/cart/cartActions'

function Products() {
    const dispatch = useDispatch();

    const productos = useSelector((state) => state.products.productos)

    const addProduct = (id) => {
        dispatch(cartActions.addItem(id))
    }

    return (
        <ProductsStyled>
            <ProductsTitle>EL STARTER PACK, REY</ProductsTitle>
            <CardContainer>
                {productos.map((item) => 
                        <Card key={item.id}>
                        <CardImg src={item.img}/>
                        <h3>{item.nombre}</h3>
                        <h3>${item.precio}</h3>
                        <CardBtn onClick={() => addProduct(item)}>Agregar al carrito</CardBtn>
                        </Card>
            )}
                </CardContainer>
        </ProductsStyled>
    )
}

export default Products
