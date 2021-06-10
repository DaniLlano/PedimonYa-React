import React from 'react'
import imgLogo from '../../assets/pedimon-logo.png'
import { NavbarStyled, Logo, Menu, MenuLi } from './NavbarStyles'


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
            
        </NavbarStyled>
    )
}

export default Navbar
