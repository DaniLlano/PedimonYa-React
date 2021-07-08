import styled from 'styled-components';


export const OrdersTitle = styled.h3`
text-align: center;
padding: 1rem 0;
`

export const OrdersContainer = styled.div`
position: fixed;
right: 0;
top: 25px;
width: 250px;
background-color: #ffe29a;
border: 1px solid black;
border-radius: 0.3rem;
box-shadow: 3px 3px 3px 0;
height: calc(100% - 75px);
z-index: 990;
display: flex;
flex-direction: column;
transform: ${(props) => (!props.show ? "translateX(0)" : "translateX(100%)")};
transition: transform 0.5s ease-in-out;
`

export const OrdersContent = styled.div`
padding: 0.7rem;
`

export const OrderItems = styled.div`
display: grid;
grid-template-columns: 1rem 2rem 2rem;
justify-content: space-between;
font-weight: bold;
background-color: #fafafa;
border-radius: 0.3rem;
box-shadow: 3px 3px 3px 0;
padding: 0.7rem 0.4rem;
`

export const OrderImg = styled.img`
width: 2.5rem;
height: 2.5rem;
`

export const OrderNamePrice = styled.p`
font-weight: bold;
`

export const QtyContainer = styled.div`
display: flex;
justify-content: center;
`

export const PriceContainer = styled(QtyContainer)`
padding: 0.5rem 0;
`

export const QtyBtn = styled.div`
width: 1rem;
height: 1rem;
border: 1px solid black;
margin: 0 0.3rem;
`