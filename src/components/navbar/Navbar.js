import React from 'react'
import imgLogo from '../../assets/pedimon-logo.png'
import { NavbarStyled, Logo, Menu, MenuLi, CartContainer } from './NavbarStyles'
import CartIcon from '../cart/CartIcon'

function Navbar() {
    return (
        <NavbarStyled>
            <Logo src={imgLogo}/>
            <Menu>
                <MenuLi>
                <a href="#about">Nosotros</a>
                </MenuLi>
                <MenuLi>
                <a href="#productos">Productos</a>
                </MenuLi>
            </Menu>
            <CartContainer>
                <CartIcon></CartIcon>
            </CartContainer>
            
        </NavbarStyled>
    )
}

export default Navbar
