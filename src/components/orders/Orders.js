import React from 'react'
import { OrdersContainer, OrdersUl, OrdersLi, OrderCont, OrderImg, OrderName } from './OrdersStyled'
import { useSelector } from 'react-redux'

function Orders() {

    const hidden = useSelector((state) => state.cart.hidden);

    const cartItems = useSelector((state) => state.cart.cartItems)


    return (
        <OrdersContainer show={hidden}>
            {cartItems?.lenght === 0 ?
            (<p>Nada por aquí</p>) : (<OrderCont>
                <p>Tu pedido:</p>
                <OrdersUl>
                    {cartItems.map((item) => (
                        <OrdersLi key={item.id}>
                            
                                <OrderImg img={item.img}/>
                                <OrderName>{item.nombre}</OrderName>
                            
                        </OrdersLi>)
                    )}
            </OrdersUl>
            </OrderCont>)
        }
            
            
        </OrdersContainer>
    )
}

export default Orders
