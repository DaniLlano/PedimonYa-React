import React from 'react'
import imgLogo from '../../assets/pedimon-logo.png'
import { NavbarStyled, Logo, Menu, MenuLi, CartContainer, Anchor } from './NavbarStyles'
import CartIcon from '../cart/CartIcon'

function Navbar() {
    return (
        <NavbarStyled>
            <Logo src={imgLogo}/>
            <Menu>
                <MenuLi>
                <Anchor href="#about">Nosotros</Anchor>
                </MenuLi>
                <MenuLi>
                <Anchor href="#productos">Productos</Anchor>
                </MenuLi>
            </Menu>
            <CartContainer>
                <CartIcon></CartIcon>
            </CartContainer>
            
        </NavbarStyled>
    )
}

export default Navbar
