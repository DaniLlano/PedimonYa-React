import styled from 'styled-components';

export const SectionStyled = styled.div`
    background: #ffe29a;
    display: flex;    
    padding: 70px 0;
`

export const Parrafito = styled.p`
    text-align: start;
    font-size: 23px;
    margin: 23px 0;

    @media (max-width: 576px) {
        font-size: 18px;
    }
`

export const Btn = styled.button`
    background-color: #0032bc;
    padding: 8px 15px;
    border: none;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    transition: opacity 0.4s;

    
    & a {
        color: #fafafa;
    }

    :hover {
        opacity: 0.8;
    }


    @media (max-width: 576px) {
        font-size: 12px;
    }
`

export const Container = styled.div`
    width: 400px;
    font-weight: 300;
    margin: auto;

    @media (max-width: 576px) {
        width: 300px;
    }
`

export const SectionImg = styled.img`
    width: 350px;
    margin: auto;

    @media (max-width: 576px) {
        width: 250px
    }
`

export const SectionSide = styled(SectionImg)`
@media (max-width: 768px) {
        display: none;
    }
`