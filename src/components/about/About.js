import React from 'react'
import info1 from '../../assets/info-icon-1.png';
import info2 from '../../assets/info-icon-2.png';
import info3 from '../../assets/info-icon-3.png';
import { AboutContainer, AboutStyled, Container, ImgAbout, Titulito} from './AboutStyles'

function About() {
    return (
        <AboutStyled>
            <Titulito>NO TE QUEDES SIN TU PEDI!</Titulito>
            <p>Dale perri, no te podés quedar sin tu Pédimon! Mirá lo fácil que es...</p>
            <Container>
                <AboutContainer>
                    <ImgAbout src={info1}/>
                    <p>Elegís el Pédi que vos querés de la lista de acá abajo (si hay...)</p>
                </AboutContainer>
                <AboutContainer>
                    <ImgAbout src={info2} />
                    <p>Lo agregás al carrito que la gente de la 0417 tuvo que haber metido por algún lado...</p>
                </AboutContainer>
                <AboutContainer>
                    <ImgAbout src={info3} />
                    <p>Le das al botón comprar y LISTO! ya tenes tus Pédis en tu casa me vuelvo LOKEEEE</p>
                </AboutContainer>
            </Container>
        </AboutStyled>
    )
}

export default About
