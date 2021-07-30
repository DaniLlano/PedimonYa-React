import React from 'react'
import { useSelector} from 'react-redux'
import imgLogo from '../../assets/pedimon-logo.png'
import { NavbarStyled, Logo } from '../navbar/NavbarStyles'
import {OrdersTitle, OrdersContent, OrderImg} from '../orders/OrdersStyled'
import { CartCheckoutContainer, CartCheckout, NewOrderItem, Total } from './ResumeStyles'

function Resume() {

    const cartItems = useSelector((state) => state.cart.cartItems);

    const price = useSelector((state) => state.cart.cartItems.reduce((acc, prod) => {
        return acc + prod.precio * prod.quantity;
    }, 0)
    );


    return (
        <div>
            <NavbarStyled>
                <Logo src={imgLogo}/>
            </NavbarStyled>
            <CartCheckoutContainer>
                <CartCheckout>
                    <h1>Checkout</h1>
                    <OrdersTitle>Tus productos:</OrdersTitle>
                    {cartItems.map((item, index) =>
                    <OrdersContent>
                        <NewOrderItem key={item.id} id={item.id}>
                                <OrderImg src={item.img}/>
                                <div>
                                    <p>{item.nombre}</p>
                                    <p>${item.precio} x {item.quantity}</p>
                                </div>
                        </NewOrderItem>
                    </OrdersContent>
                    )}
                    <Total>Total ${price}</Total>
                </CartCheckout>
            </CartCheckoutContainer>
            
            
        </div>
    )
}

export default Resume
