import styled from 'styled-components'
import { OrderItem } from '../orders/OrdersStyled'

export const CartCheckoutContainer = styled.div`
background: #fafafa;
display: flex;
justify-content: space-around;
align-items: center;
height: calc(100vh - 100px);
background: #ffe29a;

@media (max-width: 992px) {
    flex-direction: column;
}
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

export const Total = styled.div`
color: #000;
background-color: #ffe29a;
text-align: center;
margin: 1rem 0;
padding: 10px 0;
width: 70%;
border-radius: 13px;
font-weight: 700;
`