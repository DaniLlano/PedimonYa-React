import React from 'react'
import { FormContainer, InputStyled, Form, ColumnForm } from './CheckoutFormStyles'
import { CardBtn } from '../products/ProductsStyles'

function CheckoutForm() {
    return (
        <FormContainer>
            <Form>
                <ColumnForm>
                    <label>Nombre</label>
                    <InputStyled type="text" required/>
                    <label>Localidad</label>
                    <InputStyled type="text" required/>
                    <label>Email</label>
                    <InputStyled type="text" required/>
                </ColumnForm>
                <ColumnForm>
                    <label>Apellido</label>
                    <InputStyled type="text" required/>
                    <label>Direccion</label>
                    <InputStyled type="text" required/>
                    <CardBtn>Ir a pagar</CardBtn>
                </ColumnForm>
                
            </Form>
            
        </FormContainer>
    )
}

export default CheckoutForm
