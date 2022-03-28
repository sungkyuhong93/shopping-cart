// Helper Functions
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const cartTotal = (cartItems) => {
    const updatedCartTotal = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
    )
    return updatedCartTotal;
}

// Actions
export const addToCart = (cartItems) => {
    const testItem = {
        id: 1,
        title: "Beanie",
        quantity: 1,
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18
    }

    const newCartItems = addCartItem(cartItems, testItem);
   
    return {
        type: "ADD_TO_CART",
        payload: newCartItems
    }
}

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    }
}

export const closeCart = () => {
    return {
        type: "CLOSE_CART"
    }
}

export const getCartTotal = (cartItems) => {
    const newCartTotal = cartTotal(cartItems);
    console.log(newCartTotal);
    return {
        type: "GET_CART_TOTAL",
        payload: newCartTotal
    }
}