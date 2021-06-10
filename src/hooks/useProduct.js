import { useState } from "react";

export const useProduct = () => {
    const [producto, setProducto] = useState(null);

    return {producto, setProducto}
}