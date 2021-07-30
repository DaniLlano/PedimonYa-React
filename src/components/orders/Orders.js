import React from 'react'
import { OrdersTitle, OrdersContainer, OrdersContent, OrderItem, OrderImg, CompleteOrder} from './OrdersStyled'
import { useSelector } from 'react-redux'
import HandleQuantity from './HandleQuantity'
import { Link } from 'react-router-dom'

function Orders() {

    const hidden = useSelector((state) => state.cart.hidden);

    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalPrice = cartItems.reduce((acc, prod) => {
        return acc + prod.precio * prod.quantity;
    }, 0)


    return (
        <OrdersContainer show={hidden}>
            {cartItems?.length === 0 ? 
            (<OrdersTitle>Nada por aquí...</OrdersTitle>
                ) : (<>
                <OrdersTitle>Tus productos:</OrdersTitle>
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
                    )
                    }
                    <OrdersTitle>Total: ${totalPrice}</OrdersTitle>
                    <CompleteOrder>
                        <Link to="/checkout">Ir a pagar</Link>
                    </CompleteOrder>
                </>)
        }
            
        </OrdersContainer>
    )
}

export default Orders
