import React from 'react'
import {QuantityContainer, QuantityStyled, QuantityButton, DeleteBtn} from './HandleQuantityStyles'
import { useDispatch } from 'react-redux'
import * as cartActions from '../../redux/cart/cartActions'


function HandleQuantity({ item }) {

    const dispatch = useDispatch();

    return (
        <QuantityContainer>{item.quantity === 1 ? (<DeleteBtn onClick={() => dispatch(cartActions.removeItem(item))} />) : 
        (<QuantityButton onClick={() => dispatch(cartActions.removeItem(item))}>-</QuantityButton>)}
            <QuantityStyled>{item.quantity}</QuantityStyled>
            <QuantityButton onClick={() => dispatch(cartActions.addItem(item))}>+</QuantityButton>
        </QuantityContainer>
    )
}

export default HandleQuantity
