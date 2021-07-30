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

export const Anchor = styled.a`
position: relative;
text-decoration: none;

:hover {
    right: 0;
    text-decoration: none;
}

:hover:after {
    border-color: #0032bc;
    right: 0;
}

:after {
    border-top: .1em solid #fff;
    content: "";
    position: absolute;
    right: 100%;
    top: 2rem;
    left: 0;
    transition: right .4s cubic-bezier(0,.5,0,1), border-color .4s ease-out;
}
`