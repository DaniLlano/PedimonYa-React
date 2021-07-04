import styled from 'styled-components'
import {Titulito} from '../about/AboutStyles'

export const ProductsStyled = styled.div`
    height: auto;
    padding: 3rem 0;
`
export const ProductsTitle = styled(Titulito)`
    color: #0032bc;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const Card = styled.div`
    width: 250px;
    text-align: center;
    border-radius: 30px;
    box-shadow: 3px 3px 3px 3px #999;
    color: #0032bc;
    padding: 30px 0;
    margin: 2rem 0;
    
`

export const CardImg = styled.img`
    width: 150px;
    text-align: center;
    border-radius: 30px;
    color: #0032bc;
    margin: 1rem 0;
`

export const CardBtn = styled.button`
    background-color: #ffe29a;
    border: none;
    margin: 1rem 0;
    padding: 10px 20px;
    border-radius: 13px;
    font-weight: 700;
    cursor: pointer;
`