import styled from 'styled-components'

export const AboutStyled = styled.div`
    background-color: #0032bc;
    padding: 70px 0;

    & p {
        color: #fff;
        text-align: center;
        font-size: 19px;
        margin: 20px;
    }
`

export const Titulito = styled.h2`
    color: #ffe29a;
    text-align: center;
    margin: 0;
    font-size: clamp(1rem, 2rem, 3rem);
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 70px;
`

export const AboutContainer = styled.div`
    width: 250px;
    text-align: center;
    padding: 1rem 0;
`

export const ImgAbout = styled.img`
    width: 90px;
`