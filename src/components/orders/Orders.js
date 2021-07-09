import React from 'react'
import { OrdersTitle, OrdersContainer, OrdersContent, OrderItem, OrderImg, QtyContainer, QtyBtn } from './OrdersStyled'
import { useSelector } from 'react-redux'
import HandleQuantity from './HandleQuantity'

function Orders() {

    const hidden = useSelector((state) => state.cart.hidden);

    const cartItems = useSelector((state) => state.cart.cartItems)


    return (
        <OrdersContainer show={hidden}>
            {cartItems?.lenght === 0 ?
            (<OrdersTitle>Nada por aquí</OrdersTitle>) : (<>
                <OrdersTitle>Tu pedido:</OrdersTitle>
                    {cartItems.map((item, index) =>
                    <OrdersContent>
                        <OrderItem key={index} id={item.id}>
                                <OrderImg src={item.img}/>
                                <div>
                                    <p>{item.nombre}</p>
                                    <p>${item.precio}</p>
                                </div>
                                    <HandleQuantity item={item} />
                        </OrderItem>
                    </OrdersContent>
                    )}
            </>)
        }
            
            
        </OrdersContainer>
    )
}

export default Orders
