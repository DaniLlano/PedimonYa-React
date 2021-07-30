import styled from 'styled-components'
import { OrderItem } from '../orders/OrdersStyled'
import { CardBtn } from '../products/ProductsStyles'

export const CartCheckoutContainer = styled.div`
background: #fafafa;
display: flex;
justify-content: center;
align-items: center;
height: calc(100vh - 100px);
background: #ffe29a;
`

export const CartCheckout = styled.div`
text-align: center;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background: #fafafa;
height: auto;
width: auto;
padding: 1rem 8rem;
border-radius: 1rem;
`

export const NewOrderItem = styled(OrderItem)`
width: 15rem;
`

export const Total = styled(CardBtn)`
background: #fafafa;
`