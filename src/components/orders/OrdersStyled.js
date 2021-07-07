import styled from 'styled-components';

export const OrdersContainer = styled.div`
position: fixed;
right: 0;
top: 25px;
width: 250px;
background-color: #ffe29a;
height: calc(100% - 75px);
z-index: 990;
display: flex;
flex-direction: column;
transform: ${(props) => (!props.show ? "translateX(0)" : "translateX(100%)")};
transition: transform 0.5s ease-in-out;
`

export const OrdersUl = styled.ul`
padding: 2rem;
background-color: red;
list-style: none;
`

export const OrdersLi = styled.li`
background-color: blue;
`

export const OrderCont = styled.div`
background-color: green;
display: flex;
flex-direction: column;
`

export const OrderImg = styled.img`
width: 3rem;
height: 3rem;
`

export const OrderName = styled.h3`
color: black;
`
