import React from 'react'
import imgLogo from '../../assets/pedimon-logo.png'
import { NavbarStyled, Logo, Menu, MenuLi, Anchor } from './NavbarStyles'

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
            
        </NavbarStyled>
    )
}

export default Navbar
