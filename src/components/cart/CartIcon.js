import React from 'react'
import {CartIconContainer, ItemsQty, ShoppingCart} from "./CartIconStyles"
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from '../../redux/cart/cartActions'
import CloseIcon from '@material-ui/icons/Close';


function CartIcon() {

    const dispatch = useDispatch();

    const hidden = useSelector(state => state.cart.hidden);
    const quantity = useSelector(state => state.cart.cartItems.reduce((acc, cartItems) => {
        return acc + cartItems.quantity
    }, 0)
    )

    const handleShow = () => {
        dispatch(cartActions.toggleCartShow())
    }




    return (
        <CartIconContainer show={hidden} onClick={handleShow}>
            {!hidden ? <CloseIcon /> : 
            <>
                <ShoppingCart />
                <ItemsQty>{quantity}</ItemsQty>
            </>}
            
        </CartIconContainer>
    )
}

export default CartIcon;
