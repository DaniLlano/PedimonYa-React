import styled from "styled-components";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const CartIconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
position: fixed;
background-color: #ffe29a;
height: 3rem;
width: 3rem;
border-radius: 50%;
right: ${(props) => (!props.show ? "270px" : "40px")};
transition: right 0.5s ease-in-out;
box-shadow: 2px 2px 2px 2px;
`

export const ItemsQty = styled.div`
position: absolute;
top: 0;
right: 0;
border-radius: 50%;
background-color: #ff0000;
font-size: 10px;
font-weight: bold;
width: 20px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
color: #fafafa;
`

export const ShoppingCart = styled(ShoppingCartIcon)`
width: 45px;
height: 45px;
`