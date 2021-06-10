import React from 'react'
import { productos } from '../../data/data'
import { ProductsStyled, ProductsTitle, CardContainer, Card, CardImg, CardBtn } from './ProductsStyles'

function Products() {

    return (
        <ProductsStyled>
            <ProductsTitle>EL STARTER PACK, REY</ProductsTitle>
            <CardContainer>
                {productos.map(item => 
                        <Card id="productito" key={item.id}>
                        <CardImg src={item.img}/>
                        <h3>{item.nombre}</h3>
                        <h3>${item.precio}</h3>
                        <CardBtn>Agregar al carrito</CardBtn>
                        </Card>
            )}
                </CardContainer>
        </ProductsStyled>
    )
}

export default Products
