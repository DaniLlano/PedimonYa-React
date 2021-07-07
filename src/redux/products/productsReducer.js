import { productos } from '../../data/data'

const INITIAL_STATE = {
    productos: productos,
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default productsReducer;