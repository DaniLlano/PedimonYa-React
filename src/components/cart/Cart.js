import React, { useState } from 'react'
import {BtnToggle, CartToggle} from "./CartStyles"

function Cart() {

    const [cartShow, setCartShow] = useState(false)

    return (
        <div>
            <BtnToggle onClick={() => setCartShow(!cartShow)}>
                {cartShow && <CartToggle />}
            </BtnToggle>
        </div>
    )
}

export default Cart
