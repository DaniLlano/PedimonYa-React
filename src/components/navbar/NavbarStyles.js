import styled from 'styled-components';

export const NavbarStyled = styled.div`
    height: 100px;
    background: #ffe29a;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Logo = styled.img`
    width: auto;
    @media (max-width: 576px) {
        width: 200px;
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    font-size: 23px;

    @media (max-width: 576px) {
        display: none;
    }
`

export const MenuLi = styled.li`
    margin: 10px;
    font-weight: bold;    
    padding: 6px 20px;
    color: #0032bc;
`

export const CartContainer = styled.div`
display: flex;
align-items: center;
align-self: center;
`