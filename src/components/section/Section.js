import React from 'react'
import imgContainer from '../../assets/pedimon-text.png'
import imgSide from '../../assets/pikachu-hero.png'
import {SectionStyled, Container, Parrafito, Btn,  SectionImg, SectionSide} from './SectionStyles'

function Section() {
    return (
        <SectionStyled>
            <Container>
                <SectionImg src={imgContainer} />
                <Parrafito>Buscá tu Pokémon favorito y disfrutá de los beneficios de tener un bicho de estos en tu casa! Hay como cinco millones para coleccionar!</Parrafito>
                <Btn><a href="#productos">LOS QUIERO ATRAPAR</a></Btn>
            </Container>
            <SectionSide src={imgSide} />
        </SectionStyled>
    )
}

export default Section
