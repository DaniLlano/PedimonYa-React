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
                <a href="#about">About</a>
                </MenuLi>
                <MenuLi>
                <a href="#productitos">Our Products</a>
                </MenuLi>
            </Menu>
            <CartContainer>
                <CartIcon></CartIcon>
            </CartContainer>
            
        </NavbarStyled>
    )
}

export default Navbar
