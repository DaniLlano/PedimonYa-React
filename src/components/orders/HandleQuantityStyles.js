import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete';

export const QuantityContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
margin: 5px;
height: 32px;
`

export const QuantityStyled = styled.span`
text-align: center;
width: 0.5rem;
`

export const QuantityButton = styled.div`
width: 1rem;
color: #ff0038;
font-size: 20px;
text-align: center;
cursor: pointer;
margin: 0px 5px;
  
&:hover {
    background-color: #ffe3e3;
  }
`
