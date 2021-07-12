import React from 'react'
import footerImg from '../../assets/pedimon-text-white.png'
import {FooterContainer, FooterImg, FooterInfoContainer, FooterInfo} from './FooterStyles'

function Footer() {
    return (
        <FooterContainer>
            <FooterImg src={footerImg}/>
            <FooterInfoContainer>
                <FooterInfo>
                    <h3>Contacto</h3>
                    <p>0810-ATRAPALOS-YA</p>
                    <p>Lo del profe Oak</p>
                </FooterInfo>
                <FooterInfo>
                    <h3>Legales</h3>
                    <p>No nos hacemos cargo si te dormís y nos quedamos sin stock, seguro termines con un Pikachu medio gil.</p>
                </FooterInfo>
            </FooterInfoContainer>
        </FooterContainer>
    )
}

export default Footer
