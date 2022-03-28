const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: payload,
                isCartOpen: true
            }
        case "CLEAR_CART":
            return {
                ...state,
                cartItems: []
            }
        case "CLOSE_CART":
            return {
                ...state,
                isCartOpen: false
            }
        case "GET_CART_TOTAL":
            return {
                ...state,
                cartTotal: payload
            }
        default:
           return state
    }
}

export default cartReducer;