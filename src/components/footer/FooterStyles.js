import styled from 'styled-components'
import { AboutStyled } from '../about/AboutStyles'
import { SectionImg } from '../section/SectionStyles'

export const FooterContainer = styled(AboutStyled)`
display: flex;
flex-direction: column;
padding: 50px 0;
color: #fafafa;

& p {
    margin: 0;
    text-align: start;
    font-size: 17px;
}
`

export const FooterImg = styled(SectionImg)`
width: 350px;
`

export const FooterInfoContainer = styled.div`
padding: 40px 0;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`

export const FooterInfo = styled.div`
display: flex;
flex-direction: column;
width: 15rem;

& h3 {
    padding: 20px 0;
}

& p {
    padding: 5px 0;
}
`