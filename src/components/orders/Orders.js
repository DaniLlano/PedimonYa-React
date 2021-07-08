import React from 'react'
import { OrdersTitle, OrdersContainer, OrdersContent, OrderItems, OrderImg, QtyContainer, QtyBtn } from './OrdersStyled'
import { useSelector } from 'react-redux'

function Orders() {

    const hidden = useSelector((state) => state.cart.hidden);

    const cartItems = useSelector((state) => state.cart.cartItems)


    return (
        <OrdersContainer show={hidden}>
            {cartItems?.lenght === 0 ?
            (<OrdersTitle>Nada por aquí</OrdersTitle>) : (<>
                <OrdersTitle>Tu pedido:</OrdersTitle>
                    {cartItems.map((item) =>
                    <OrdersContent>
                        <OrderItems key={item.id}>
                                <OrderImg src={item.img}/>
                                <div>
                                    <p>{item.nombre}</p>
                                    <p>${item.precio}</p>
                                </div>
                            <QtyContainer>
                                <QtyBtn></QtyBtn>
                                <QtyBtn></QtyBtn>
                                <QtyBtn></QtyBtn>
                            </QtyContainer>
                        </OrderItems>
                    </OrdersContent>
                    )}
            </>)
        }
            
            
        </OrdersContainer>
    )
}

export default Orders
