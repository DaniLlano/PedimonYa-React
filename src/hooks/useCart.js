import { useState } from "react";

export function useCart() {
    const [cart, setCart] = useState([]);

    return {cart, setCart}
}